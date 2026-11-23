/**
 * Genera la identidad vectorial del Liceo Lunita de Chía (fiel al escudo oficial logo_600.gif).
 *  - public/brand/escudo.svg              Escudo a color (degradados sutiles)
 *  - public/brand/escudo-plano.svg        Escudo en tintas planas (impresión / bordado / oficial)
 *  - public/brand/escudo-animado.svg      Escudo con animación CSS embebida
 *  - public/brand/banner.svg              Banner horizontal (fondo claro)
 *  - public/brand/banner-oscuro.svg       Banner horizontal (fondo oscuro)
 *  - public/favicon.svg, public/og-default.png, public/apple-touch-icon.png, public/icon-512.png
 *  - src/components/brand/emblem.ts       Geometría compartida para los componentes Astro
 *
 * Toda la tipografía se convierte a trazos con opentype.js: los SVG no dependen de fuentes instaladas.
 * Uso: npm run brand
 */
import fs from 'node:fs';
import path from 'node:path';
import opentype from 'opentype.js';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = (p) => path.join(root, p);
fs.mkdirSync(out('public/brand'), { recursive: true });
fs.mkdirSync(out('src/components/brand'), { recursive: true });

const C = {
  indigo: '#313293',
  indigoLight: '#3B3DA8',
  indigoDeep: '#222370',
  night: '#0A0D2E',
  gold: '#FECA0D',
  goldDeep: '#F0B400',
  goldLight: '#FFE055',
  cream: '#FFF8E7',
  white: '#FFFFFF',
};

const r2 = (n) => Math.round(n * 100) / 100;

/* ---------------------------------------------------------------- Escudo -- */
// Caja exacta 400 x 463 (relación 0.8639 del escudo oficial logo_600.gif).
// Óvalo azul excéntrico con doble filete dorado (exterior e interior):
// el aro azul es ancho arriba-derecha y se estrecha hacia abajo-izquierda.
const E = {
  w: 400,
  h: 463,
  outer:    { cx: 200.0, cy: 231.5, rx: 199.5, ry: 231.0 }, // filete dorado exterior
  ring:     { cx: 200.0, cy: 231.5, rx: 193.0, ry: 224.5 }, // aro azul real
  innerRim: { cx: 180.6, cy: 248.8, rx: 165.0, ry: 189.8 }, // filete dorado interior
  inner:    { cx: 180.6, cy: 248.8, rx: 159.2, ry: 183.8 }, // campo blanco interior
};

// Media luna vertical exacta (RMSE 0.30 px sobre escudo oficial):
// cuernos afilados horizontales hacia la derecha en (203, 139.2) y (203, 402.8), simétrica respecto a y=271.
const MOON_CENTER = [115, 271];
const moonPath = 'M203 139.2A171.2 131.8 0 1 0 203 402.8A181.5 155.5 0 0 1 203 139.2Z';

function star(cx, cy, R, r, rot = -90) {
  let d = '';
  for (let i = 0; i < 10; i++) {
    const rad = ((rot + i * 36) * Math.PI) / 180;
    const rr = i % 2 ? r : R;
    d += `${i ? 'L' : 'M'}${r2(cx + rr * Math.cos(rad))} ${r2(cy + rr * Math.sin(rad))}`;
  }
  return d + 'Z';
}
// Estrella de 5 puntas dentro del campo blanco, justo arriba-derecha del cuerno superior de la luna.
const STAR = { cx: 235.0, cy: 105.6, R: 21.6, r: 8.2 };
const starPath = star(STAR.cx, STAR.cy, STAR.R, STAR.r, -90);

const ell = (e) =>
  `M${r2(e.cx - e.rx)} ${r2(e.cy)}A${r2(e.rx)} ${r2(e.ry)} 0 1 0 ${r2(e.cx + e.rx)} ${r2(e.cy)}A${r2(e.rx)} ${r2(e.ry)} 0 1 0 ${r2(e.cx - e.rx)} ${r2(e.cy)}Z`;

function emblemDefs(id) {
  return `<defs>
  <linearGradient id="${id}-ring" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${C.indigoLight}"/><stop offset=".55" stop-color="${C.indigo}"/><stop offset="1" stop-color="${C.indigoDeep}"/>
  </linearGradient>
  <linearGradient id="${id}-gold" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${C.goldLight}"/><stop offset=".45" stop-color="${C.gold}"/><stop offset="1" stop-color="${C.goldDeep}"/>
  </linearGradient>
</defs>`;
}

/** Cuerpo del escudo. flat=true → tintas planas oficiales. */
function emblemBody(id, { flat = false, field = true } = {}) {
  const ring = flat ? C.indigo : `url(#${id}-ring)`;
  const gold = flat ? C.gold : `url(#${id}-gold)`;
  return `<path class="e-rim" d="${ell(E.outer)}" fill="${gold}"/>
<path class="e-ring" d="${ell(E.ring)}" fill="${ring}"/>
<path class="e-inner-rim" d="${ell(E.innerRim)}" fill="${gold}"/>
${field ? `<path class="e-field" d="${ell(E.inner)}" fill="${C.white}"/>` : ''}
<path class="e-moon" d="${moonPath}" fill="${gold}" stroke="${C.indigo}" stroke-width="4.8" stroke-linejoin="miter" stroke-miterlimit="10"/>
<path class="e-star" d="${starPath}" fill="${gold}" stroke="${C.indigo}" stroke-width="3.4" stroke-linejoin="miter" stroke-miterlimit="10"/>`;
}

const svgHead = (w, h, title, extra = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="t"${extra}><title id="t">${title}</title>`;

/* ------------------------------------------------------------- Tipografía -- */
const loadFont = (p) => opentype.parse(fs.readFileSync(out(p)).buffer);
const fr = loadFont('scripts/fonts/fraunces-600-italic.ttf');
const fr7 = loadFont('scripts/fonts/fraunces-700-italic.ttf');
const inter = loadFont('scripts/fonts/inter-600.ttf');

// Serializador propio (toPathData de opentype.js genera NaN con ciertas coordenadas)
const f2 = (n) => (Math.round(n * 100) / 100).toString();
function toD(cmds) {
  let d = '';
  for (const c of cmds) {
    if (c.type === 'M' || c.type === 'L') d += `${c.type}${f2(c.x)} ${f2(c.y)}`;
    else if (c.type === 'Q') d += `Q${f2(c.x1)} ${f2(c.y1)} ${f2(c.x)} ${f2(c.y)}`;
    else if (c.type === 'C') d += `C${f2(c.x1)} ${f2(c.y1)} ${f2(c.x2)} ${f2(c.y2)} ${f2(c.x)} ${f2(c.y)}`;
    else if (c.type === 'Z') d += 'Z';
  }
  return d;
}

function textPath(font, text, x, y, size, { tracking = 0 } = {}) {
  if (!tracking) {
    const p = font.getPath(text, x, y, size, { kerning: true });
    return { d: toD(p.commands), width: font.getAdvanceWidth(text, size, { kerning: true }) };
  }
  let cx = x, d = '';
  for (const ch of text) {
    d += toD(font.getPath(ch, cx, y, size).commands);
    cx += font.getAdvanceWidth(ch, size) + tracking * size;
  }
  return { d, width: cx - x - tracking * size };
}

/* ----------------------------------------------------------------- Escudo -- */
const title = 'Escudo del Liceo Lunita de Chía';
fs.writeFileSync(
  out('public/brand/escudo.svg'),
  `${svgHead(E.w, E.h, title)}${emblemDefs('e')}${emblemBody('e')}</svg>\n`,
);
fs.writeFileSync(
  out('public/brand/escudo-plano.svg'),
  `${svgHead(E.w, E.h, title)}${emblemBody('p', { flat: true })}</svg>\n`,
);

// Escudo animado (CSS embebido, respeta prefers-reduced-motion)
const ringLen = 2 * Math.PI * Math.sqrt((E.ring.rx ** 2 + E.ring.ry ** 2) / 2);
fs.writeFileSync(
  out('public/brand/escudo-animado.svg'),
  `${svgHead(E.w, E.h, title)}${emblemDefs('a')}
<style>
.e-rim,.e-ring,.e-inner-rim,.e-field{transform-origin:200px 231.5px;animation:pop 1.1s cubic-bezier(.2,.9,.2,1.2) both}
.e-ring{animation-delay:.08s}.e-inner-rim{animation-delay:.14s}.e-field{animation-delay:.18s}
.e-moon{transform-origin:${MOON_CENTER[0]}px ${MOON_CENTER[1]}px;animation:rise 1.4s .35s cubic-bezier(.16,1,.3,1) both,glow 5s 2s ease-in-out infinite}
.e-star{transform-origin:${STAR.cx}px ${STAR.cy}px;animation:spark 1s .9s cubic-bezier(.2,1.6,.3,1) both,twinkle 3.2s 2s ease-in-out infinite}
.halo{transform-origin:${STAR.cx}px ${STAR.cy}px;animation:halo 3.2s 2s ease-in-out infinite;opacity:0}
@keyframes pop{from{transform:scale(.6);opacity:0}to{transform:none;opacity:1}}
@keyframes rise{from{transform:translate(-32px,24px) rotate(-18deg);opacity:0}to{transform:none;opacity:1}}
@keyframes spark{from{transform:scale(0) rotate(-180deg);opacity:0}to{transform:none;opacity:1}}
@keyframes twinkle{0%,100%{transform:scale(1) rotate(0)}50%{transform:scale(1.16) rotate(14deg)}}
@keyframes halo{0%,100%{opacity:0;transform:scale(.6)}50%{opacity:.5;transform:scale(1.35)}}
@keyframes glow{0%,100%{filter:none}50%{filter:drop-shadow(0 0 8px rgba(254,202,13,.55))}}
@media (prefers-reduced-motion:reduce){*{animation:none!important}}
</style>
<circle class="halo" cx="${STAR.cx}" cy="${STAR.cy}" r="28" fill="${C.gold}"/>
${emblemBody('a')}</svg>\n`,
);

/* ----------------------------------------------------------------- Banner -- */
function banner({ dark }) {
  const H = 360;
  const s = 300 / E.h; // escudo a 300 px de alto
  const ex = 34, ey = 30;
  const tx = ex + E.w * s + 44;
  const ink = dark ? C.cream : C.indigoDeep;
  const accent = dark ? C.gold : C.indigo;
  const sub = dark ? 'rgba(255,248,231,.72)' : 'rgba(34,35,112,.74)';

  const l1 = textPath(fr, 'Liceo Lunita', tx, 168, 132);
  const l2a = textPath(fr7, 'de Chía', tx + l1.width + 34, 168, 132);
  const wordW = l1.width + 34 + l2a.width;
  const slogan = textPath(inter, 'EL ARTE, LA EDUCACIÓN Y LA CULTURA SON EL REFLEJO DE UN PUEBLO', tx + 4, 268, 25.5, { tracking: 0.12 });
  const W = Math.ceil(Math.max(tx + wordW, tx + slogan.width) + 50);
  const ruleY = 214;

  return `${svgHead(W, H, 'Liceo Lunita de Chía — El Arte, la Educación y la Cultura son el Reflejo de un Pueblo')}
${emblemDefs('b')}
<linearGradient id="b-rule" x1="0" x2="1"><stop offset="0" stop-color="${C.gold}"/><stop offset="1" stop-color="${C.gold}" stop-opacity="0"/></linearGradient>
<g transform="translate(${ex} ${ey}) scale(${r2(s)})">${emblemBody('b', { field: true })}</g>
<path d="${l1.d}" fill="${ink}"/>
<path d="${l2a.d}" fill="${dark ? `url(#b-gold)` : accent}"/>
<rect x="${tx + 4}" y="${ruleY}" width="${Math.round(wordW * 0.92)}" height="4" rx="2" fill="url(#b-rule)"/>
<path d="${star(tx + Math.round(wordW * 0.92) + 22, ruleY + 2, 13, 5.2)}" fill="${C.gold}"/>
<path d="${slogan.d}" fill="${sub}"/>
</svg>\n`;
}
fs.writeFileSync(out('public/brand/banner.svg'), banner({ dark: false }));
fs.writeFileSync(out('public/brand/banner-oscuro.svg'), banner({ dark: true }));

/* ---------------------------------------------------------------- Favicon -- */
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 416 479">${emblemBody('f', { flat: true })}</svg>\n`;
fs.writeFileSync(out('public/favicon.svg'), favicon);

/* ------------------------------------------- Geometría para componentes -- */
fs.writeFileSync(
  out('src/components/brand/emblem.ts'),
  `// Archivo generado por scripts/build-brand.mjs — no editar a mano.
export const EMBLEM = ${JSON.stringify(
    {
      viewBox: `0 0 ${E.w} ${E.h}`,
      width: E.w,
      height: E.h,
      rim: ell(E.outer),
      ring: ell(E.ring),
      innerRim: ell(E.innerRim),
      field: ell(E.inner),
      moon: moonPath,
      star: starPath,
      starCenter: [STAR.cx, STAR.cy],
      moonCenter: MOON_CENTER,
      ringLength: Math.round(ringLen),
    },
    null,
    2,
  )} as const;\n`,
);

/* ---------------------------------------------------- Rasterizados (PNG) -- */
const iconSvg = (size, bg) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512"><rect width="512" height="512" fill="${bg}"/><g transform="translate(86 58) scale(.85)">${emblemDefs('i')}${emblemBody('i')}</g></svg>`,
  );
await sharp(iconSvg(180, C.cream)).png().toFile(out('public/apple-touch-icon.png'));
await sharp(iconSvg(512, C.cream)).png().toFile(out('public/icon-512.png'));
await sharp(iconSvg(192, C.cream)).png().toFile(out('public/icon-192.png'));

// Imagen Open Graph por defecto 1200x630
const og = textPath(fr, 'Liceo Lunita', 520, 300, 104);
const og2 = textPath(fr7, 'de Chía', 520, 410, 104);
const ogSub = textPath(inter, 'PREESCOLAR · PRIMARIA · BACHILLERATO', 524, 488, 24, { tracking: 0.14 });
const ogSub2 = textPath(inter, 'CHÍA · CUNDINAMARCA · COLOMBIA', 524, 528, 20, { tracking: 0.18 });
let stars = '';
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
for (let i = 0; i < 140; i++) stars += `<circle cx="${r2(rnd() * 1200)}" cy="${r2(rnd() * 630)}" r="${r2(rnd() * 1.6 + 0.3)}" fill="#fff" opacity="${r2(rnd() * 0.7 + 0.15)}"/>`;
const ogSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><radialGradient id="sky" cx=".25" cy=".45" r=".9"><stop offset="0" stop-color="#262A8C"/><stop offset=".55" stop-color="#11145A"/><stop offset="1" stop-color="${C.night}"/></radialGradient>
<radialGradient id="glow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${C.gold}" stop-opacity=".35"/><stop offset="1" stop-color="${C.gold}" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="630" fill="url(#sky)"/>${stars}
<circle cx="260" cy="315" r="300" fill="url(#glow)"/>
<g transform="translate(88 92) scale(.96)">${emblemDefs('o')}${emblemBody('o')}</g>
<path d="${og.d}" fill="${C.cream}"/><path d="${og2.d}" fill="${C.gold}"/>
<path d="${ogSub.d}" fill="rgba(255,248,231,.8)"/><path d="${ogSub2.d}" fill="rgba(255,248,231,.55)"/>
</svg>`);
await sharp(ogSvg).png({ compressionLevel: 9 }).toFile(out('public/og-default.png'));

console.log('✓ Identidad generada en public/brand, favicon, iconos y OG.');
