import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllTrainerSlugs } from '@/lib/trainers';

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || '';

function getSecret(req: NextApiRequest): string {
  const querySecret = typeof req.query.secret === 'string' ? req.query.secret : '';
  const bodySecret = typeof req.body?.secret === 'string' ? req.body.secret : '';

  return querySecret || bodySecret;
}

function isTrainersCollection(req: NextApiRequest): boolean {
  const queryCollection = typeof req.query.collection === 'string' ? req.query.collection : '';
  const bodyCollection = typeof req.body?.collection === 'string' ? req.body.collection : '';
  const collection = queryCollection || bodyCollection;

  return !collection || collection === 'trainers';
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

  if (!isTrainersCollection(req)) {
    return res.status(200).json({ revalidated: false, message: 'Collection is ignored' });
  }

  try {
    const slugs = await getAllTrainerSlugs();
    const pagesToRevalidate = ['/', '/trainers', ...slugs.map((slug) => `/trainers/${slug}`)];

    await Promise.all(pagesToRevalidate.map((pagePath) => res.revalidate(pagePath)));

    return res.status(200).json({
      revalidated: true,
      paths: pagesToRevalidate,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown revalidation error';
    return res.status(500).json({ message });
  }
}
