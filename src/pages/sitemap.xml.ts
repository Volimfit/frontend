import type { GetServerSideProps } from 'next';
import { getAllTrainerSlugs } from '@/lib/trainers';

const SITE_URL = (process.env.SITE_URL || 'https://volimfit.ru').replace(/\/$/, '');

function buildSitemap(urls: string[]): string {
  const items = urls
    .map(
      (url) =>
        `<url><loc>${url}</loc><changefreq>weekly</changefreq><priority>${url === SITE_URL ? '1.0' : '0.8'}</priority></url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const slugs = await getAllTrainerSlugs();
  const urls = [SITE_URL, `${SITE_URL}/trainers`, ...slugs.map((slug) => `${SITE_URL}/trainers/${slug}`)];

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=3600');
  res.write(buildSitemap(urls));
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
