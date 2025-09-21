import type { RequestHandler } from './$types';

const routes = [
  { path: '/', priority: 1.0 },
  { path: '/protocol', priority: 0.8 }
];

export const GET: RequestHandler = ({ url }) => {
  const baseUrl = url.origin;
  const today = new Date().toISOString().split('T')[0];

  const urls = routes.map(route => `
<url>
  <loc>${baseUrl}${route.path}</loc>
  <lastmod>${today}</lastmod>
  <priority>${route.priority}</priority>
</url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
