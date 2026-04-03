export interface PublicOfferFile {
  id: string;
  titleRu: string;
  url: string;
}

interface PocketBasePublicOfferRecord {
  id: string;
  collectionId: string;
  title_ru?: string;
  file?: string | string[];
}

interface PocketBaseListResponse<T> {
  items: T[];
}

const PB_URL = (process.env.NEXT_PUBLIC_PB_URL || process.env.PB_URL || 'https://pb.volimfit.ru').replace(/\/$/, '');
const PUBLIC_OFFER_COLLECTION = process.env.NEXT_PUBLIC_PB_PUBLIC_OFFER_COLLECTION || 'public_offer_files';

function toFileName(file?: string | string[]): string | null {
  if (Array.isArray(file)) {
    return file[0] || null;
  }

  return file || null;
}

function toPublicOfferFile(record: PocketBasePublicOfferRecord): PublicOfferFile | null {
  const titleRu = (record.title_ru || '').trim();
  const fileName = toFileName(record.file);

  if (!titleRu || !fileName) {
    return null;
  }

  return {
    id: record.id,
    titleRu,
    url: `${PB_URL}/api/files/${record.collectionId}/${record.id}/${fileName}`,
  };
}

export async function getPublicOfferFiles(): Promise<PublicOfferFile[]> {
  const url = `${PB_URL}/api/collections/${PUBLIC_OFFER_COLLECTION}/records?perPage=200&sort=title_ru`;
  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch public offer files: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as PocketBaseListResponse<PocketBasePublicOfferRecord>;
  const mapped = data.items.map(toPublicOfferFile).filter((item): item is PublicOfferFile => Boolean(item));
  return mapped;
}
