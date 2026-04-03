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

function normalizeTrainer(trainer) {
  return {
    site_id: String(trainer.id),
    slug: trainer.link,
    name: trainer.name,
    title: trainer.title,
    category: trainer.category,
    education: trainer.education,
    experience: trainer.experience,
    specializations: trainer.specializations.join('\n'),
    achievements: trainer.achievements.join('\n'),
    roles: trainer.roles.join('\n'),
  };
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

function textField(name, required = false) {
  return {
    type: 'text',
    name,
    required,
    hidden: false,
    presentable: false,
    system: false,
    primaryKey: false,
    min: 0,
    max: 0,
    pattern: '',
    autogeneratePattern: '',
  };
}

async function ensureCollection(token) {
  const headers = { Authorization: token, 'Content-Type': 'application/json' };
  const collections = await apiRequest(`${PB_URL}/api/collections?perPage=200`, {
    headers: { Authorization: token },
  });

  const existing = collections.items.find((item) => item.name === 'trainers');
  if (existing) {
    return existing;
  }

  return apiRequest(`${PB_URL}/api/collections`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: 'trainers',
      type: 'base',
      system: false,
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      indexes: [
        'CREATE UNIQUE INDEX `idx_trainers_slug` ON `trainers` (`slug`)',
        'CREATE UNIQUE INDEX `idx_trainers_site_id` ON `trainers` (`site_id`)',
      ],
      fields: [
        textField('site_id', true),
        textField('slug', true),
        textField('name', true),
        textField('title'),
        textField('category'),
        textField('education'),
        textField('experience'),
        textField('specializations'),
        textField('achievements'),
        textField('roles'),
      ],
    }),
  });
}

async function findRecordBySlug(token, slug) {
  const query = new URLSearchParams({
    perPage: '1',
    filter: `slug="${slug}"`,
  });

  const result = await apiRequest(
    `${PB_URL}/api/collections/trainers/records?${query.toString()}`,
    {
      headers: { Authorization: token },
    }
  );

  return result.items[0] ?? null;
}

async function upsertTrainer(token, trainer) {
  const existing = await findRecordBySlug(token, trainer.slug);
  const headers = { Authorization: token, 'Content-Type': 'application/json' };

  if (existing) {
    return apiRequest(`${PB_URL}/api/collections/trainers/records/${existing.id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(trainer),
    });
  }

  return apiRequest(`${PB_URL}/api/collections/trainers/records`, {
    method: 'POST',
    headers,
    body: JSON.stringify(trainer),
  });
}

async function main() {
  const trainers = loadTrainers().map(normalizeTrainer);
  const token = await authenticate();
  await ensureCollection(token);

  for (const trainer of trainers) {
    await upsertTrainer(token, trainer);
    console.log(`Synced trainer: ${trainer.slug}`);
  }

  console.log(`Done. Synced ${trainers.length} trainers.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
