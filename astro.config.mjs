// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { legacyRedirects } from './src/data/redirects.mjs';

const siteUrl = process.env.SITE_URL || 'https://liceolunita.edu.co';
const rawBase = process.env.BASE_PATH || '/';
const basePath = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
const isSubpath = basePath !== '/';

/** @param {string} base */
function subpathAssets(base) {
  return {
    name: 'subpath-assets',
    hooks: {
      /** @param {{ dir: URL }} opts */
      'astro:build:done': ({ dir }) => {
        const outDir = fileURLToPath(dir);
        fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
        if (base === '/') return;

        const baseNoLead = base.slice(1);
        /** @param {string} d */
        const walk = (d) => {
          for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
            const full = path.join(d, entry.name);
            if (entry.isDirectory()) {
              walk(full);
            } else if (entry.name.endsWith('.html')) {
              const html = fs.readFileSync(full, 'utf8');
              const updated = html.replace(
                /\b(href|src|poster)="\/(?!\/)([^"]*)"/g,
                (match, attr, rest) => {
                  if (rest.startsWith(baseNoLead)) return match;
                  return `${attr}="${base}${rest}"`;
                },
              );
              if (updated !== html) fs.writeFileSync(full, updated);
            }
          }
        };
        walk(outDir);

        const manifestPath = path.join(outDir, 'manifest.webmanifest');
        if (fs.existsSync(manifestPath)) {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          manifest.start_url = base;
          if (Array.isArray(manifest.icons)) {
            manifest.icons = manifest.icons.map((ic) => ({
              ...ic,
              src: typeof ic.src === 'string' && ic.src.startsWith('/') && !ic.src.startsWith(base)
                ? `${base}${ic.src.slice(1)}`
                : ic.src,
            }));
          }
          fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
        }
      },
    },
  };
}

export default defineConfig({
  site: siteUrl,
  base: basePath,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto', assets: 'assets' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: { responsiveStyles: true, layout: 'constrained' },
  redirects: isSubpath ? {} : legacyRedirects,
  integrations: [
    sitemap({
      i18n: undefined,
      changefreq: 'weekly',
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        if (item.url === new URL(basePath, siteUrl).href) item.priority = 1;
        return item;
      },
    }),
    subpathAssets(basePath),
  ],
  vite: {
    build: { assetsInlineLimit: 2048 },
  },
});
