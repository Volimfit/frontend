import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const PB_URL = process.env.PB_URL;
const PB_EMAIL = process.env.PB_EMAIL;
const PB_PASSWORD = process.env.PB_PASSWORD;

if (!PB_URL || !PB_EMAIL || !PB_PASSWORD) {
  console.error('Missing PB_URL, PB_EMAIL or PB_PASSWORD environment variables.');
  process.exit(1);
}

const projectRoot = process.cwd();
const sourcePath = path.join(projectRoot, 'src', 'app', 'data', 'constant.ts');

function buildTrainersSource(fileContent) {
  const agulovMarker = "//   link: 'agulov',";
  const markerIndex = fileContent.indexOf(agulovMarker);
  let revivedAgulov = fileContent;

  if (markerIndex !== -1) {
    const blockStart = fileContent.lastIndexOf('// {', markerIndex);
    const blockEnd = fileContent.indexOf('// },', markerIndex);

    if (blockStart !== -1 && blockEnd !== -1) {
      const commentedBlock = fileContent.slice(blockStart, blockEnd + '// },'.length);
      const uncommentedBlock = commentedBlock
        .split('\n')
        .map((line) => line.replace(/^(\s*)\/\/\s?/, '$1'))
        .join('\n');

      revivedAgulov =
        fileContent.slice(0, blockStart) +
        uncommentedBlock +
        fileContent.slice(blockEnd + '// },'.length);
    }
  }

  return revivedAgulov
    .replace('export const trainers =', 'const trainers =')
    .replace(/export const findTrainerByLink[\s\S]*$/, '');
}

function loadTrainers() {
  const fileContent = fs.readFileSync(sourcePath, 'utf8');
  const scriptSource = `${buildTrainersSource(fileContent)}\nmodule.exports = { trainers };`;
  const context = {
    module: { exports: {} },
    exports: {},
  };

  vm.runInNewContext(scriptSource, context, { filename: sourcePath });

  return context.module.exports.trainers;
}

async function apiRequest(url, options = {}) {
  const response = await fetch(url, options);
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${text}`);
  }

  return data;
}

async function authenticate() {
  const authData = await apiRequest(
    `${PB_URL}/api/collections/_superusers/auth-with-password`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identity: PB_EMAIL,
        password: PB_PASSWORD,
      }),
    }
  );

  return authData.token;
}

async function ensurePhotoField(token) {
  const collection = await apiRequest(`${PB_URL}/api/collections/trainers`, {
    headers: { Authorization: token },
  });

  if (collection.fields.some((field) => field.name === 'photo')) {
    return;
  }

  const photoField = {
    hidden: false,
    id: 'file376926767_trainers',
    maxSelect: 1,
    maxSize: 0,
    mimeTypes: ['image/jpeg', 'image/png', 'image/svg+xml', 'image/gif', 'image/webp'],
    name: 'photo',
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: null,
    type: 'file',
  };

  await apiRequest(`${PB_URL}/api/collections/${collection.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: [...collection.fields, photoField],
    }),
  });
}

async function getAllRecords(token) {
  return apiRequest(`${PB_URL}/api/collections/trainers/records?perPage=200`, {
    headers: { Authorization: token },
  });
}

async function uploadPhoto(token, recordId, trainer) {
  const imageUrl = `https://volimfit.ru${trainer.imageSrc}`;
  const imageResponse = await fetch(imageUrl);
  if (!imageResponse.ok) {
    throw new Error(`Failed to download ${imageUrl}: ${imageResponse.status}`);
  }

  const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
  const extension = contentType.includes('png') ? 'png' : contentType.includes('webp') ? 'webp' : 'jpg';
  const bytes = await imageResponse.arrayBuffer();
  const blob = new Blob([bytes], { type: contentType });
  const formData = new FormData();
  formData.set('photo', blob, `${trainer.link}.${extension}`);

  const response = await fetch(`${PB_URL}/api/collections/trainers/records/${recordId}`, {
    method: 'PATCH',
    headers: { Authorization: token },
    body: formData,
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${text}`);
  }

  return text ? JSON.parse(text) : null;
}

async function main() {
  const token = await authenticate();
  await ensurePhotoField(token);

  const trainers = loadTrainers();
  const records = await getAllRecords(token);
  const recordsBySlug = new Map(records.items.map((item) => [item.slug, item]));

  let uploaded = 0;
  for (const trainer of trainers) {
    const record = recordsBySlug.get(trainer.link);
    if (!record) {
      console.log(`Skipped ${trainer.link}: record not found`);
      continue;
    }

    await uploadPhoto(token, record.id, trainer);
    uploaded += 1;
    console.log(`Uploaded photo: ${trainer.link}`);
  }

  console.log(`Done. Uploaded ${uploaded} trainer photos.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
