/**
 * Motor de Lunita (personaje 2026, solo SVG + CSS):
 * - Cada instancia tiene una animación base (data-base: idle | party | sleep) en su <svg data-anim>.
 * - Cursor encima: saludo. Clic o `el.__lunita.tap()`: salto. Luego vuelve a su animación base.
 * - `data-intro` (hero): la entrada se reproduce cuando se va la pantalla de carga.
 * - `data-track`: se inclina suavemente hacia el cursor.
 */
type Anim = 'intro' | 'idle' | 'hello' | 'hop' | 'party' | 'loading' | 'sleep';
type LunitaApi = { tap: () => void; celebrate: (on: boolean) => void; play: (a: Anim) => void };

const ONE_SHOT: Partial<Record<Anim, number>> = { intro: 1950, hello: 1250, hop: 1000 };
let started = false;

export function initLunitas() {
  if (started) return;
  started = true;
  const all = [...document.querySelectorAll<HTMLElement>('[data-lunita]')];
  if (!all.length) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const html = document.documentElement;
  const revealed = () => new Promise<void>((done) => {
    const ok = () => html.dataset.splash !== '1' && html.dataset.navIn !== '1';
    if (ok()) return done();
    const mo = new MutationObserver(() => { if (ok()) { mo.disconnect(); done(); } });
    mo.observe(html, { attributes: true, attributeFilter: ['data-splash', 'data-nav-in'] });
  });

  // Las animaciones SVG se calculan en el hilo principal: se pausan mientras Lunita no está en pantalla
  const offscreen = new IntersectionObserver((entries) => {
    for (const e of entries) e.target.toggleAttribute('data-off', !e.isIntersecting);
  }, { rootMargin: '120px' });

  for (const el of all) {
    offscreen.observe(el);
    const svg = el.querySelector<SVGSVGElement>('.lun-svg');
    if (!svg) continue;
    const base = (el.dataset.base || 'idle') as Anim;
    let timer = 0;
    const play = (name: Anim, then: Anim = base) => {
      clearTimeout(timer);
      svg.dataset.anim = 'none';
      void svg.getBoundingClientRect(); // reinicia la animación aunque sea la misma
      svg.dataset.anim = name;
      const d = ONE_SHOT[name];
      if (d) timer = window.setTimeout(() => (svg.dataset.anim = then), d);
    };
    const busy = () => svg.dataset.anim === 'intro' || svg.dataset.anim === 'none';
    const api: LunitaApi = {
      tap: () => { if (!reduce && !busy()) play('hop'); },
      celebrate: (on) => play(on ? 'party' : base),
      play: (a) => play(a),
    };
    (el as any).__lunita = api;
    el.addEventListener('pointerenter', () => { if (!reduce && base === 'idle' && svg.dataset.anim === 'idle') play('hello'); });
    el.addEventListener('click', api.tap);

    if (el.hasAttribute('data-intro')) {
      if (reduce) { el.setAttribute('data-played', ''); continue; }
      svg.dataset.anim = 'none';
      revealed().then(() => requestAnimationFrame(() => { el.setAttribute('data-played', ''); play('intro'); }));
    }
  }

  // Inclinación suave hacia el cursor (solo con mouse)
  const tracked = all.filter((el) => el.hasAttribute('data-track'));
  if (reduce || !tracked.length || !matchMedia('(pointer: fine)').matches) return;
  let mx = 0, raf = 0;
  const tick = () => {
    raf = 0;
    for (const el of tracked) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.bottom < 0 || r.top > innerHeight) continue;
      const k = Math.max(-1, Math.min(1, (mx - (r.left + r.width / 2)) / Math.max(320, innerWidth * 0.4)));
      el.style.setProperty('--tilt', `${(k * 5).toFixed(2)}deg`);
    }
  };
  addEventListener('pointermove', (e) => { mx = e.clientX; if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });
}
