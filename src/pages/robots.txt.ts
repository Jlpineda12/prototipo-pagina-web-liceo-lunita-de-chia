import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const isPrototype = import.meta.env.PUBLIC_PROTOTYPE === 'true' || import.meta.env.BASE_URL !== '/';
  const body = isPrototype
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /search.json\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
