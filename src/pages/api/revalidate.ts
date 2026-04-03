import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllTrainerSlugs } from '@/lib/trainers';

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || '';
const SUPPORTED_COLLECTIONS = new Set(['trainers', 'public_offer_files']);

function getSecret(req: NextApiRequest): string {
  const headerSecret = typeof req.headers['x-revalidate-secret'] === 'string' ? req.headers['x-revalidate-secret'] : '';
  const querySecret = typeof req.query.secret === 'string' ? req.query.secret : '';
  const bodySecret = typeof req.body?.secret === 'string' ? req.body.secret : '';

  return headerSecret || querySecret || bodySecret;
}

function getCollection(req: NextApiRequest): string {
  const queryCollection = typeof req.query.collection === 'string' ? req.query.collection : '';
  const bodyCollection = typeof req.body?.collection === 'string' ? req.body.collection : '';
  return queryCollection || bodyCollection || 'trainers';
}

function isSupportedCollection(collection: string): boolean {
  return SUPPORTED_COLLECTIONS.has(collection);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!REVALIDATE_SECRET) {
    return res.status(500).json({ message: 'REVALIDATE_SECRET is not configured' });
  }

  if (getSecret(req) !== REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  const collection = getCollection(req);

  if (!isSupportedCollection(collection)) {
    return res.status(400).json({
      revalidated: false,
      message: `Unsupported collection: ${collection}`,
      supported: Array.from(SUPPORTED_COLLECTIONS),
    });
  }

  try {
    const slugs = await getAllTrainerSlugs();
    const pagesToRevalidate = ['/', '/trainers', ...slugs.map((slug) => `/trainers/${slug}`)];

    await Promise.all(pagesToRevalidate.map((pagePath) => res.revalidate(pagePath)));

    return res.status(200).json({
      revalidated: true,
      collection,
      paths: pagesToRevalidate,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown revalidation error';
    return res.status(500).json({ message });
  }
}
