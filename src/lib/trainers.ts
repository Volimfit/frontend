export interface Trainer {
  id: string;
  siteId: string;
  link: string;
  name: string;
  title: string;
  education: string;
  experience: string;
  specializations: string[];
  achievements: string[];
  roles: string[];
  category: string;
  imageSrc: string;
}

interface PocketBaseTrainerRecord {
  id: string;
  collectionId: string;
  updated?: string;
  slug: string;
  site_id: string;
  name: string;
  title?: string;
  category?: string;
  education?: string;
  experience?: string;
  specializations?: string;
  achievements?: string;
  roles?: string;
  photo?: string | string[];
}

interface PocketBaseListResponse<T> {
  items: T[];
}

const PB_URL = (process.env.NEXT_PUBLIC_PB_URL || process.env.PB_URL || 'https://pb.volimfit.ru').replace(/\/$/, '');
const TRAINERS_COLLECTION = process.env.NEXT_PUBLIC_PB_TRAINERS_COLLECTION || 'trainers';

function splitMultilineField(value?: string): string[] {
  if (!value) {
    return [];
  }

  return value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);
}

function toFileName(photo?: string | string[]): string | null {
  if (Array.isArray(photo)) {
    return photo[0] || null;
  }

  return photo || null;
}

function buildTrainerImageUrl(record: PocketBaseTrainerRecord): string {
  const fileName = toFileName(record.photo);

  if (fileName) {
    const version = record.updated ? `?v=${encodeURIComponent(record.updated)}` : '';
    return `${PB_URL}/api/files/${record.collectionId}/${record.id}/${fileName}${version}`;
  }

  return '/trainer_1.jpg';
}

function mapRecordToTrainer(record: PocketBaseTrainerRecord): Trainer {
  return {
    id: record.id,
    siteId: record.site_id || '',
    link: record.slug,
    name: record.name,
    title: record.title || '',
    education: record.education || '',
    experience: record.experience || '',
    specializations: splitMultilineField(record.specializations),
    achievements: splitMultilineField(record.achievements),
    roles: splitMultilineField(record.roles),
    category: record.category || '',
    imageSrc: buildTrainerImageUrl(record),
  };
}

function sortBySiteId(left: Trainer, right: Trainer): number {
  const leftNumber = Number(left.siteId);
  const rightNumber = Number(right.siteId);

  if (Number.isNaN(leftNumber) && Number.isNaN(rightNumber)) {
    return left.name.localeCompare(right.name, 'ru');
  }

  if (Number.isNaN(leftNumber)) {
    return 1;
  }

  if (Number.isNaN(rightNumber)) {
    return -1;
  }

  return leftNumber - rightNumber;
}

export async function getAllTrainers(): Promise<Trainer[]> {
  const url = `${PB_URL}/api/collections/${TRAINERS_COLLECTION}/records?perPage=200`;
  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch trainers: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as PocketBaseListResponse<PocketBaseTrainerRecord>;

  return data.items.map(mapRecordToTrainer).sort(sortBySiteId);
}

export async function getTrainerBySlug(slug: string): Promise<Trainer | null> {
  const url = `${PB_URL}/api/collections/${TRAINERS_COLLECTION}/records?perPage=1&filter=${encodeURIComponent(`slug=\"${slug}\"`)}`;
  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch trainer by slug: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as PocketBaseListResponse<PocketBaseTrainerRecord>;
  const record = data.items[0];

  if (!record) {
    return null;
  }

  return mapRecordToTrainer(record);
}

export async function getAllTrainerSlugs(): Promise<string[]> {
  const trainers = await getAllTrainers();
  return trainers.map((trainer) => trainer.link).filter(Boolean);
}

export const TRAINERS_REVALIDATE_SECONDS = 60 * 60 * 24;
