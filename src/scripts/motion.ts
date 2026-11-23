/**
 * Micro-interacciones (≈1 KB): apariciones al hacer scroll y contadores animados.
 * Respeta prefers-reduced-motion y funciona sin librerías.
 */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* -------- Revelados automáticos con escalonado (títulos, tarjetas, iconos) -------- */
document.querySelectorAll<HTMLElement>('.section-head h2, .next h2').forEach((el) => { if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', 'mask'); });
document.querySelectorAll<HTMLElement>('.section-head > p:not(.kicker)').forEach((el) => { if (!el.hasAttribute('data-reveal')) { el.setAttribute('data-reveal', ''); el.style.setProperty('--d', '2'); } });
document.querySelectorAll<HTMLElement>('.section-head .kicker').forEach((el) => { if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', 'left'); });
const groups = '.grid, .tiles, .list, .timeline, .values, .links, .press, .fines, .achv, .word, .faq, .ch, .tl, .vals';
document.querySelectorAll<HTMLElement>(groups).forEach((g) => {
  [...g.children].forEach((c, i) => {
    const el = c as HTMLElement;
    if (el.hasAttribute('data-reveal') || el.querySelector('[data-reveal]')) return;
    el.setAttribute('data-reveal', i % 2 ? 'rise' : 'rise-alt');
    el.style.setProperty('--d', String(i % 6));
  });
});

const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }),
  { rootMargin: '0px 0px -6% 0px', threshold: 0.1 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

const countIO = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      countIO.unobserve(el);
      const to = Number(el.dataset.count);
      if (reduce) return void (el.textContent = String(to));
      const t0 = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 4))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }),
  { threshold: 0.6 },
);
document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));
