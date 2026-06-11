import type { APIRoute } from 'astro';
import { OPERATORS } from '../data/operators';
import { SITE_URL } from '../data/site';

// Locked operators' dossier pages exist (the client-side unlock needs them
// pre-published) but are deliberately left out of the sitemap until release.
export const GET: APIRoute = () => {
  const paths = [
    '/',
    '/operators',
    '/factions',
    ...OPERATORS
      .filter(op => op.slug && op.released)
      .map(op => `/operators/${op.slug}`),
  ];

  const urls = paths
    .map(p => `  <url><loc>${SITE_URL}${p}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
