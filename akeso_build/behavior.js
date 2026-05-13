/* AKESO — shared page behavior */
(function () {
  'use strict';

  // ── LUCIDE ICONS ────────────────────────────────────────────
  function initLucide() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
  initLucide();
  window.addEventListener('load', initLucide);

  // ── SCROLL REVEAL ───────────────────────────────────────────
  // Simple: observe everything with .reveal/.reveal-stagger/.reveal-fade
  // Add .in when 8% visible. No js-ready gate needed.
  var revealEls = Array.from(document.querySelectorAll('.reveal, .reveal-stagger, .reveal-fade'));

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        // trigger count-up for metrics inside
        e.target.querySelectorAll('.v[data-count]').forEach(startCountUp);
        obs.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function(el) { obs.observe(el); });
  } else {
    // No IntersectionObserver — just show everything
    revealEls.forEach(function(el) { el.classList.add('in'); });
  }

  // ── NAV SOLID ON SCROLL ─────────────────────────────────────
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 24) nav.classList.add('solid');
    else nav.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── METRIC COUNT-UP ─────────────────────────────────────────
  var counted = new WeakSet();
  function startCountUp(el) {
    if (counted.has(el)) return;
    counted.add(el);
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    var unit = el.querySelector('.unit');
    var unitHTML = unit ? unit.outerHTML : '';
    var finalHTML = el.innerHTML;
    var dur = 1200, startTime = null, done = false;
    function step(t) {
      if (!startTime) startTime = t;
      var p = Math.min(1, (t - startTime) / dur);
      var v = Math.round((1 - Math.pow(1 - p, 3)) * target);
      el.textContent = v;
      if (unitHTML) el.insertAdjacentHTML('beforeend', unitHTML);
      if (p < 1) requestAnimationFrame(step);
      else done = true;
    }
    requestAnimationFrame(step);
    setTimeout(function() { if (!done) el.innerHTML = finalHTML; }, 2500);
  }

  // Also trigger count-up for metrics already in view on load
  window.addEventListener('load', function() {
    document.querySelectorAll('.metric .v[data-count]').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) startCountUp(el);
    });
  });

  // ── PARALLAX ────────────────────────────────────────────────
  function setupParallax(id, factor) {
    var el = document.getElementById(id);
    if (!el) return;
    window.addEventListener('scroll', function() {
      var parent = el.parentElement;
      if (!parent) return;
      var rect = parent.getBoundingClientRect();
      var vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      var progress = (vh - rect.top) / (vh + rect.height);
      el.style.transform = 'translateY(' + ((progress - 0.5) * factor) + 'px)';
    }, { passive: true });
  }
  setupParallax('parallax-eye', 90);
  setupParallax('parallax-future', 65);
  setupParallax('parallax-ntnb', 55);

  // ── HERO RETICLE MOUSEMOVE ───────────────────────────────────
  var heroViz = document.getElementById('hero-viz');
  var reticle = document.getElementById('hero-reticle');
  if (heroViz && reticle) {
    var rx = 0, ry = 0, tx = 0, ty = 0;
    heroViz.addEventListener('mousemove', function(e) {
      var r = heroViz.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) * 0.055;
      ty = (e.clientY - (r.top + r.height / 2)) * 0.055;
    });
    heroViz.addEventListener('mouseleave', function() { tx = 0; ty = 0; });
    (function loop() {
      rx += (tx - rx) * 0.08;
      ry += (ty - ry) * 0.08;
      reticle.style.transform = 'translate(calc(-50% + ' + rx + 'px), calc(-50% + ' + ry + 'px))';
      requestAnimationFrame(loop);
    })();
  }

  // ── RETICLE RING ANIMATION ──────────────────────────────────
  var rotRing = document.getElementById('rot-ring');
  var rotRingInner = document.getElementById('rot-ring-inner');
  var pulse1 = document.getElementById('pulse1');
  var pulse2 = document.getElementById('pulse2');
  if (rotRing) {
    var angle = 0, pt = 0;
    (function ringTick() {
      angle += 0.16;
      rotRing.setAttribute('transform', 'rotate(' + angle + ' 130 130)');
      if (rotRingInner) rotRingInner.setAttribute('transform', 'rotate(' + (-angle * 0.65) + ' 130 130)');
      pt += 0.022;
      if (pulse1 && pulse2) {
        var s1 = 14 + (pt % 1) * 84, o1 = Math.max(0, 0.55 - (pt % 1) * 0.65);
        var s2 = 14 + ((pt + 0.45) % 1) * 84, o2 = Math.max(0, 0.4 - ((pt + 0.45) % 1) * 0.5);
        pulse1.setAttribute('r', s1); pulse1.setAttribute('opacity', o1);
        pulse2.setAttribute('r', s2); pulse2.setAttribute('opacity', o2);
      }
      requestAnimationFrame(ringTick);
    })();
  }

  // ── LEGACY SVG WAVEFRONT (if present) ───────────────────────
  function svgEl(tag, attrs) {
    var n = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  var raysG = document.getElementById('rays');
  if (raysG) {
    for (var i = 0; i < 28; i++) {
      var a = (i / 28) * Math.PI * 2;
      raysG.appendChild(svgEl('line', { x1: 400 + Math.cos(a)*380, y1: 400 + Math.sin(a)*380, x2: 400 + Math.cos(a)*40, y2: 400 + Math.sin(a)*40, 'stroke-dasharray': '1,3' }));
    }
  }
  var ticksG = document.getElementById('ticks');
  if (ticksG) {
    for (var ti = 0; ti < 72; ti++) {
      var ta = (ti / 72) * Math.PI * 2, tr = 380;
      ticksG.appendChild(svgEl('line', { x1: 400+Math.cos(ta)*tr, y1: 400+Math.sin(ta)*tr, x2: 400+Math.cos(ta)*(tr+(ti%6===0?10:5)), y2: 400+Math.sin(ta)*(tr+(ti%6===0?10:5)) }));
    }
  }
  var w1 = document.getElementById('wavefront-1');
  var w2 = document.getElementById('wavefront-2');
  var w3 = document.getElementById('wavefront-3');
  if (w1 || w2 || w3) {
    var wt0 = null;
    (function waveTick(t) {
      if (wt0 === null) wt0 = t;
      var e = (t - wt0) / 1000, period = 5.6;
      function setRing(el, phase) {
        if (!el) return;
        var p = ((e / period) + phase) % 1;
        el.setAttribute('r', (22 + p * 340).toFixed(1));
        el.setAttribute('stroke-opacity', ((1 - p) * 0.7).toFixed(3));
      }
      setRing(w1, 0); setRing(w2, 0.34); setRing(w3, 0.67);
      requestAnimationFrame(waveTick);
    })(performance.now());
  }

})();
