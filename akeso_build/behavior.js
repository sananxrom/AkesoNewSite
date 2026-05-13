/* Akeso — page behavior
   - scroll-reveal via IntersectionObserver
   - sticky nav background toggle
   - hero refraction animation
   - metric count-up
*/
(function () {
  'use strict';

  // ── reveal on scroll (progressive enhancement) ──────────────
  // Disabled: this preview environment throttles animations unpredictably,
  // and we'd rather show content than risk a stuck fade-in.
  // (No-op — content is always visible via CSS.)

  // helper used by metric counter below
  function inView(el) {
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return r.top < vh * 0.92 && r.bottom > 0;
  }

  // ── nav solid on scroll ─────────────────────────────────────
  const nav = document.getElementById('nav');
  let lastScroll = -1;
  function onScroll() {
    const y = window.scrollY;
    if (y === lastScroll) return;
    lastScroll = y;
    if (y > 24) nav.classList.add('solid');
    else nav.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── hero refraction: draw rays + animate wavefront ──────────
  const raysG = document.getElementById('rays');
  const ticksG = document.getElementById('ticks');
  const irisSpokes = document.getElementById('iris-spokes');

  function svgEl(tag, attrs) {
    const n = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  // light rays — straight lines from outside, bending through center field
  if (raysG) {
    const cx = 400, cy = 400;
    const N = 28;
    for (let i = 0; i < N; i++) {
      const t = i / N;
      const angle = t * Math.PI * 2;
      const x1 = cx + Math.cos(angle) * 380;
      const y1 = cy + Math.sin(angle) * 380;
      // converge towards an offset point near center to feel refractive
      const x2 = cx + Math.cos(angle) * 40;
      const y2 = cy + Math.sin(angle) * 40;
      raysG.appendChild(svgEl('line', {
        x1, y1, x2, y2,
        'stroke-dasharray': '1,3'
      }));
    }
  }

  // tick marks on the outer ring
  if (ticksG) {
    const cx = 400, cy = 400, r = 380;
    for (let i = 0; i < 72; i++) {
      const a = (i / 72) * Math.PI * 2;
      const r1 = r;
      const r2 = r + (i % 6 === 0 ? 10 : 5);
      ticksG.appendChild(svgEl('line', {
        x1: cx + Math.cos(a) * r1,
        y1: cy + Math.sin(a) * r1,
        x2: cx + Math.cos(a) * r2,
        y2: cy + Math.sin(a) * r2
      }));
    }
  }

  // iris radial spokes
  if (irisSpokes) {
    const cx = 300, cy = 300;
    for (let i = 0; i < 96; i++) {
      const a = (i / 96) * Math.PI * 2;
      const r1 = 56;
      const r2 = 138;
      irisSpokes.appendChild(svgEl('line', {
        x1: cx + Math.cos(a) * r1,
        y1: cy + Math.sin(a) * r1,
        x2: cx + Math.cos(a) * r2,
        y2: cy + Math.sin(a) * r2,
        opacity: 0.4 + 0.6 * Math.abs(Math.sin(i * 0.7))
      }));
    }
  }

  // animate wavefronts: scale + opacity
  const w1 = document.getElementById('wavefront-1');
  const w2 = document.getElementById('wavefront-2');
  const w3 = document.getElementById('wavefront-3');
  const counter = document.getElementById('hero-counter');

  let t0 = null;
  function tick(t) {
    if (t0 === null) t0 = t;
    const elapsed = (t - t0) / 1000;
    const period = 5.6; // seconds

    function setRing(el, phase) {
      if (!el) return;
      const p = ((elapsed / period) + phase) % 1;
      // r goes from 22 to 360, opacity fades from 0.6 -> 0
      const r = 22 + p * 340;
      const o = (1 - p) * 0.7;
      el.setAttribute('r', r.toFixed(1));
      el.setAttribute('stroke-opacity', o.toFixed(3));
    }
    setRing(w1, 0);
    setRing(w2, 0.34);
    setRing(w3, 0.67);

    // hero counter
    if (counter) {
      const v = ((elapsed * 0.018) % 0.999).toFixed(3);
      counter.textContent = 'f / ' + v;
    }

    rafId = requestAnimationFrame(tick);
  }
  let rafId = requestAnimationFrame(tick);

  // pause animation when page hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
      t0 = null;
    } else {
      rafId = requestAnimationFrame(tick);
    }
  });

  // ── metric count-up ─────────────────────────────────────────
  // We snapshot the original innerHTML and count up to it. Falls back to
  // showing the final value if rAF gets throttled.
  const metricEls = Array.from(document.querySelectorAll('.metric .v[data-count]'));
  metricEls.forEach((el) => {
    el.dataset.finalHtml = el.innerHTML;
  });
  const seenMetrics = new WeakSet();
  function checkMetrics() {
    metricEls.forEach((el) => {
      if (seenMetrics.has(el)) return;
      if (!inView(el)) return;
      seenMetrics.add(el);
      const target = parseInt(el.dataset.count, 10);
      const dur = 1400;
      const start = performance.now();
      const suffix = el.querySelector('.unit');
      const suffixHtml = suffix ? suffix.outerHTML : '';
      let done = false;
      function step(t) {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const v = Math.round(target * eased);
        el.innerHTML = v + suffixHtml;
        if (p < 1) requestAnimationFrame(step);
        else done = true;
      }
      requestAnimationFrame(step);
      // safety: ensure final value if rAF stalls
      setTimeout(() => { if (!done) el.innerHTML = el.dataset.finalHtml; }, 2200);
    });
  }
  checkMetrics();
  window.addEventListener('scroll', checkMetrics, { passive: true });

})();
