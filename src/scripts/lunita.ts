/**
 * Motor interactivo de Lunita (60 fps):
 * - Seguimiento ocular suave con interpolación (lerp) + paralaje facial 2.5D al mover el mouse.
 * - Reacción de curiosidad al acercar el puntero (cejas) y salto elástico con chispas al hacer clic.
 * - Parpadeo orgánico natural (simple y doble parpadeo ocasional).
 * - Soporte opcional para Rive si alguna instancia usa el atributo `data-rive`.
 */
const BASE = import.meta.env.BASE_URL || '/';
const RIV = `${BASE}rive/lunita.riv`;
const WASM = `${BASE}rive/rive.wasm`;
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
let started = false;

type RiveApi = { celebrate: (on: boolean) => void; tap: () => void };

function hasCleanRiveFrame(canvas: HTMLCanvasElement): boolean {
  const w = canvas.width;
  const h = canvas.height;
  if (w < 16 || h < 16) return false;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return false;
  try {
    const corners: [number, number][] = [[2, 2], [w - 3, 2], [2, h - 3], [w - 3, h - 3]];
    for (const [x, y] of corners) {
      if (ctx.getImageData(x, y, 1, 1).data[3] > 15) return false;
    }
    const probes: [number, number][] = [
      [Math.round(w * 0.42), Math.round(h * 0.48)],
      [Math.round(w * 0.32), Math.round(h * 0.56)],
      [Math.round(w * 0.52), Math.round(h * 0.72)],
    ];
    for (const [x, y] of probes) {
      const d = ctx.getImageData(x, y, 1, 1).data;
      if (d[3] > 60 && d[0] + d[1] + d[2] > 90) return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function initLunitas() {
  if (started) return;
  started = true;
  const all = [...document.querySelectorAll<HTMLElement>('[data-lunita]')];
  if (!all.length) return;

  // 1. Seguimiento ocular suave (lerp) + paralaje 2.5D para todas las Lunitas con data-track
  const tracked = all
    .filter((el) => el.hasAttribute('data-track'))
    .map((el) => ({ el, cx: 0, cy: 0, tx: 0, ty: 0 }));

  let pointerActive = false;
  let mx = innerWidth * 0.5;
  let my = innerHeight * 0.35;
  let rafId = 0;

  const tick = () => {
    rafId = 0;
    let moving = false;

    for (const item of tracked) {
      const { el } = item;
      if (el.hasAttribute('data-rive-ready')) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.bottom < -40 || r.top > innerHeight + 40) continue;

      if (pointerActive) {
        const originX = r.left + r.width * 0.42;
        const originY = r.top + r.height * 0.48;
        const dx = mx - originX;
        const dy = my - originY;
        const dist = Math.hypot(dx, dy) || 1;
        const radius = Math.max(260, Math.min(520, innerWidth * 0.45));
        const k = Math.min(1, dist / radius);
        item.tx = (dx / dist) * k;
        item.ty = (dy / dist) * k;
        el.classList.toggle('is-near', dist < r.width * 0.95);
      } else {
        item.tx = 0;
        item.ty = 0;
        el.classList.remove('is-near');
      }

      // Interpolación suave (0.14) para mirada orgánica sin saltos bruscos
      item.cx += (item.tx - item.cx) * 0.14;
      item.cy += (item.ty - item.cy) * 0.14;

      if (Math.abs(item.tx - item.cx) > 0.004 || Math.abs(item.ty - item.cy) > 0.004) {
        moving = true;
      }

      // Pupilas (±24px X, ±20px Y), rostro 2.5D (±10px X, ±8px Y) e inclinación sutil del cuerpo (±2.6deg)
      el.style.setProperty('--px', `${(item.cx * 24).toFixed(2)}px`);
      el.style.setProperty('--py', `${(item.cy * 20).toFixed(2)}px`);
      el.style.setProperty('--fx', `${(item.cx * 10).toFixed(2)}px`);
      el.style.setProperty('--fy', `${(item.cy * 8).toFixed(2)}px`);
      el.style.setProperty('--tilt', `${(item.cx * 2.6).toFixed(2)}deg`);
    }

    if (moving) rafId = requestAnimationFrame(tick);
  };

  if (!reduce() && tracked.length) {
    const wake = () => { if (!rafId) rafId = requestAnimationFrame(tick); };
    addEventListener('pointermove', (e) => {
      pointerActive = true;
      mx = e.clientX;
      my = e.clientY;
      wake();
    }, { passive: true });
    document.addEventListener('pointerleave', () => {
      pointerActive = false;
      wake();
    });
  }

  // 2. Parpadeo orgánico natural (simple y doble parpadeo ocasional)
  if (!reduce()) {
    for (const el of all) {
      if (el.classList.contains('lunita--celebra')) continue;
      const triggerBlink = () => {
        if (!el.hasAttribute('data-rive-ready') && document.visibilityState === 'visible') {
          el.classList.add('is-blink');
          setTimeout(() => el.classList.remove('is-blink'), 150);
          // 28% de probabilidad de un tierno doble parpadeo
          if (Math.random() < 0.28) {
            setTimeout(() => {
              el.classList.add('is-blink');
              setTimeout(() => el.classList.remove('is-blink'), 140);
            }, 240);
          }
        }
        setTimeout(triggerBlink, 2800 + Math.random() * 3400);
      };
      setTimeout(triggerBlink, 1600 + Math.random() * 2000);
    }
  }

  // 3. Tocar a Lunita: salto elástico alegre + sonrisa
  for (const el of all) {
    el.addEventListener('click', () => {
      if (el.hasAttribute('data-rive-ready')) return;
      el.classList.remove('is-jump');
      void el.offsetWidth;
      el.classList.add('is-jump', 'is-happy');
      setTimeout(() => el.classList.remove('is-happy'), 850);
    });
  }

  // 4. Rive opcional (solo si alguna instancia tiene `data-rive`)
  const riveEls = all.filter((el) => el.hasAttribute('data-rive'));
  const introEls = riveEls.filter((el) => el.hasAttribute('data-intro'));
  const conn = (navigator as any).connection;
  const fail = (el: HTMLElement) => { if (!el.hasAttribute('data-rive-ready')) el.setAttribute('data-rive-fail', ''); };
  // Rive (motor wasm ~1 MB) solo en pantallas grandes con mouse; en móvil/táctil el SVG hace la entrada
  // con CSS: misma Lunita, mucho menos peso y sin bloquear el hilo principal en teléfonos.
  const roomy = matchMedia('(min-width: 900px) and (pointer: fine)').matches;
  if (!riveEls.length || reduce() || conn?.saveData || !roomy) { introEls.forEach(fail); return; }

  // La entrada se reserva hasta que la pantalla de carga se haya ido
  const html = document.documentElement;
  const revealed = () => new Promise<void>((done) => {
    const ok = () => html.dataset.splash !== '1' && html.dataset.navIn !== '1';
    if (ok()) return done();
    const mo = new MutationObserver(() => { if (ok()) { mo.disconnect(); done(); } });
    mo.observe(html, { attributes: true, attributeFilter: ['data-splash', 'data-nav-in'] });
  });
  // Red de seguridad: si Rive no está listo poco después de revelarse la página, entra el SVG
  revealed().then(() => setTimeout(() => introEls.forEach(fail), 2600));

  const go = async () => {
    try {
      const { Rive, Layout, Fit, Alignment, RuntimeLoader } = await import('@rive-app/canvas-lite');
      RuntimeLoader.setWasmUrl(WASM);
      for (const el of riveEls) {
        const canvas = el.querySelector<HTMLCanvasElement>('.lun-rive');
        if (!canvas) continue;
        canvas.hidden = false;
        const r = new Rive({
          src: RIV,
          canvas,
          artboard: 'Lunita',
          stateMachines: 'Lunita',
          autoplay: true,
          autoBind: true,
          layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
          onLoad: () => {
            r.resizeDrawingSurfaceToCanvas();
            const vm = (r as any).viewModelInstance;
            const isIntro = el.hasAttribute('data-intro');
            const api: RiveApi = {
              celebrate: (on) => { const p = vm?.boolean('celebrate'); if (p) p.value = on; },
              // Durante la espera o la entrada no se interrumpe con saltos
              tap: () => { if (el.hasAttribute('data-rive-ready') && !el.hasAttribute('data-intro-playing')) vm?.trigger('tap')?.trigger(); },
            };
            (el as any).__lunita = api;
            const setIntro = () => { const p = vm?.boolean('intro'); if (p) p.value = true; };
            // Sin entrada pendiente, la máquina sale de "Espera" de inmediato
            if (!isIntro) setIntro();
            const ready = () => {
              el.setAttribute('data-rive-ready', '');
              el.dispatchEvent(new CustomEvent('lunita:ready', { bubbles: true }));
            };
            const tStart = performance.now();
            const waitClean = () => {
              if (hasCleanRiveFrame(canvas)) {
                if (!isIntro) return ready();
                // Render verificado con el canvas aún invisible (Lunita quieta en "Espera").
                // Cuando la página se revela, se activa `intro` y la entrada arranca desde el fotograma 0.
                revealed().then(() => {
                  if (el.hasAttribute('data-rive-fail')) { r.pause(); canvas.hidden = true; return; } // ya entró el SVG: se queda
                  setIntro();
                  el.setAttribute('data-intro-playing', '');
                  setTimeout(() => el.removeAttribute('data-intro-playing'), 1500);
                  setTimeout(ready, 50); // la máquina ya avanzó a la Intro antes de mostrar el canvas
                });
                return;
              }
              if (performance.now() - tStart > 6000) {
                r.pause();
                canvas.hidden = true;
                fail(el);
                return;
              }
              requestAnimationFrame(waitClean);
            };
            requestAnimationFrame(waitClean);
          },
          onLoadError: () => { canvas.hidden = true; fail(el); },
        });
        new ResizeObserver(() => r.resizeDrawingSurfaceToCanvas()).observe(canvas);
        new IntersectionObserver(([e]) => (e.isIntersecting ? r.play() : r.pause())).observe(el);
      }
    } catch {
      introEls.forEach(fail); /* respaldo SVG activo */
    }
  };
  // Con una entrada pendiente (hero) se carga ya; si no, cuando el navegador esté libre
  if (introEls.length) { go(); return; }
  const idle = (window as any).requestIdleCallback || ((cb: () => void) => setTimeout(cb, 800));
  if (document.readyState === 'complete') idle(go); else addEventListener('load', () => idle(go), { once: true });
}
