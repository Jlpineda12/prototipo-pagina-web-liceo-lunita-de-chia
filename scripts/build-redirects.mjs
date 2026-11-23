// Genera redirecciones 301 reales para el hosting a partir de src/data/redirects.mjs
import fs from 'node:fs';
import { legacyRedirects } from '../src/data/redirects.mjs';
const entries = Object.entries(legacyRedirects);
fs.writeFileSync('public/_redirects', entries.map(([f, t]) => `${f} ${t} 301`).join('\n') + '\n');
fs.writeFileSync(
  'public/.htaccess',
  `# Redirecciones 301 del sitio WordPress anterior (generado por scripts/build-redirects.mjs)\nRewriteEngine On\nErrorDocument 404 /404.html\n` +
    entries.map(([f, t]) => `RewriteRule ^${f.slice(1).replace(/\/$/, '')}/?$ ${t.replace('#', '\\#')} [R=301,L,NE]`).join('\n') +
    `\n\n# Caché larga para recursos con hash\n<IfModule mod_headers.c>\n  <FilesMatch "\\.(js|css|woff2|webp|avif|svg|png|jpg)$">\n    Header set Cache-Control "public, max-age=31536000, immutable"\n  </FilesMatch>\n</IfModule>\n`,
);
console.log(`✓ ${entries.length} redirecciones en public/_redirects y public/.htaccess`);
