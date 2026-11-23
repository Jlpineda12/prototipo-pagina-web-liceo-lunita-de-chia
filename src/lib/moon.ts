/**
 * Fase lunar aproximada (precisión de ±1 día, suficiente para un saludo).
 * Basado en un mes sinódico de 29.530588853 días desde la luna nueva del 6-ene-2000 18:14 UTC.
 */
const SYNODIC = 29.530588853;
const REF = Date.UTC(2000, 0, 6, 18, 14) / 86400000;

export type MoonPhase = { fraction: number; illumination: number; name: string; emoji: string; waxing: boolean };

const NAMES: [number, string, string][] = [
  [0.0339, 'luna nueva', '🌑'],
  [0.216, 'luna creciente', '🌒'],
  [0.284, 'cuarto creciente', '🌓'],
  [0.466, 'gibosa creciente', '🌔'],
  [0.534, 'luna llena', '🌕'],
  [0.716, 'gibosa menguante', '🌖'],
  [0.784, 'cuarto menguante', '🌗'],
  [0.966, 'luna menguante', '🌘'],
  [1.01, 'luna nueva', '🌑'],
];

export function moonPhase(date = new Date()): MoonPhase {
  const days = date.getTime() / 86400000 - REF;
  const fraction = ((days / SYNODIC) % 1 + 1) % 1;
  const illumination = (1 - Math.cos(2 * Math.PI * fraction)) / 2;
  const [, name, emoji] = NAMES.find(([lim]) => fraction < lim)!;
  return { fraction, illumination, name, emoji, waxing: fraction < 0.5 };
}

/** Trazo SVG de la parte iluminada para un disco de radio r centrado en (r, r). */
export function moonPath(fraction: number, r = 28) {
  const k = Math.cos(fraction * 2 * Math.PI); // 1 → nueva, -1 → llena
  const rx = Math.abs(k) * r;
  const waxing = fraction < 0.5;
  // borde exterior del lado iluminado + terminador elíptico
  const outerSweep = waxing ? 1 : 0;
  const innerSweep = waxing ? (k > 0 ? 0 : 1) : k > 0 ? 1 : 0;
  return `M${r} 0A${r} ${r} 0 0 ${outerSweep} ${r} ${2 * r}A${rx.toFixed(2)} ${r} 0 0 ${innerSweep} ${r} 0Z`;
}
