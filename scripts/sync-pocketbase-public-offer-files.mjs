import fs from 'node:fs';
import path from 'node:path';

const PB_URL = process.env.PB_URL;
const PB_EMAIL = process.env.PB_EMAIL;
const PB_PASSWORD = process.env.PB_PASSWORD;
const COLLECTION_NAME = process.env.PB_PUBLIC_OFFER_COLLECTION || 'public_offer_files';

if (!PB_URL || !PB_EMAIL || !PB_PASSWORD) {
  console.error('Missing PB_URL, PB_EMAIL or PB_PASSWORD environment variables.');
  process.exit(1);
}

const FILES = [
  { slug: 'general-conditions', title_ru: 'Общие условия', filePath: 'public/several-condition.pdf' },
  { slug: 'application', title_ru: 'Заявление', filePath: 'public/several-condition-1.pdf' },
  { slug: 'price-list', title_ru: 'Прейскурант', filePath: 'public/several-condition-2.pdf' },
  { slug: 'club-rules', title_ru: 'Правила клуба', filePath: 'public/several-condition-3.pdf' },
];

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

function fileField(name, required = false) {
  return {
    type: 'file',
    name,
    required,
    hidden: false,
    presentable: false,
    system: false,
    maxSelect: 1,
    maxSize: 20 * 1024 * 1024,
    mimeTypes: ['application/pdf'],
    thumbs: [],
    protected: false,
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
  const authData = await apiRequest(`${PB_URL}/api/collections/_superusers/auth-with-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identity: PB_EMAIL,
      password: PB_PASSWORD,
    }),
  });

  return authData.token;
}

async function ensureCollection(token) {
  const headers = { Authorization: token, 'Content-Type': 'application/json' };
  const collections = await apiRequest(`${PB_URL}/api/collections?perPage=200`, {
    headers: { Authorization: token },
  });

  const existing = collections.items.find((item) => item.name === COLLECTION_NAME);
  if (existing) {
    return existing;
  }

  return apiRequest(`${PB_URL}/api/collections`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: COLLECTION_NAME,
      type: 'base',
      system: false,
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      indexes: [`CREATE UNIQUE INDEX idx_${COLLECTION_NAME}_slug ON ${COLLECTION_NAME} (slug)`],
      fields: [textField('slug', true), textField('title_ru', true), fileField('file', true)],
    }),
  });
}

async function findBySlug(token, slug) {
  const query = new URLSearchParams({
    perPage: '1',
    filter: `slug="${slug}"`,
  });

  const result = await apiRequest(`${PB_URL}/api/collections/${COLLECTION_NAME}/records?${query.toString()}`, {
    headers: { Authorization: token },
  });

  return result.items[0] ?? null;
}

function buildForm(fileMeta) {
  const absFilePath = path.join(process.cwd(), fileMeta.filePath);
  if (!fs.existsSync(absFilePath)) {
    throw new Error(`File not found: ${absFilePath}`);
  }

  const form = new FormData();
  form.set('slug', fileMeta.slug);
  form.set('title_ru', fileMeta.title_ru);

  const fileBuffer = fs.readFileSync(absFilePath);
  const blob = new Blob([fileBuffer], { type: 'application/pdf' });
  form.set('file', blob, path.basename(absFilePath));

  return form;
}

async function upsertFileRecord(token, fileMeta) {
  const existing = await findBySlug(token, fileMeta.slug);
  const headers = { Authorization: token };
  const body = buildForm(fileMeta);

  if (existing) {
    return apiRequest(`${PB_URL}/api/collections/${COLLECTION_NAME}/records/${existing.id}`, {
      method: 'PATCH',
      headers,
      body,
    });
  }

  return apiRequest(`${PB_URL}/api/collections/${COLLECTION_NAME}/records`, {
    method: 'POST',
    headers,
    body,
  });
}

async function main() {
  const token = await authenticate();
  await ensureCollection(token);

  for (const fileMeta of FILES) {
    await upsertFileRecord(token, fileMeta);
    console.log(`Synced file: ${fileMeta.slug}`);
  }

  console.log(`Done. Synced ${FILES.length} public offer files.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
