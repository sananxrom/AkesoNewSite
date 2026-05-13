/* AKESO — shared page behavior
   - js-ready class for reveal animations
   - scroll reveal (IntersectionObserver)
   - sticky nav
   - metric count-up
   - hero SVG animation (homepage)
   - Lucide icons init
   - parallax
*/
(function () {
  'use strict';

  // ── JS READY — enables CSS animations ──────────────────────
  document.documentElement.classList.add('js-ready');

  // ── LUCIDE ICONS ────────────────────────────────────────────
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    // retry after load
    window.addEventListener('load', function () {
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  }

  // ── SCROLL REVEAL ───────────────────────────────────────────
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      el.classList.add('in');
      // trigger count-up for any metrics inside
      el.querySelectorAll('.v[data-count]').forEach(startCountUp);
      revealObs.unobserve(el);
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('.reveal, .reveal-stagger, .reveal-fade').forEach(function (el) {
    revealObs.observe(el);
  });

  // ── NAV SOLID ON SCROLL ─────────────────────────────────────
  var nav = document.getElementById('nav');
  var lastY = -1;
  function onScroll() {
    var y = window.scrollY;
    if (y === lastY) return;
    lastY = y;
    if (!nav) return;
    if (y > 24) nav.classList.add('solid');
    else nav.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── METRIC COUNT-UP ─────────────────────────────────────────
  var seenMetrics = new WeakSet();
  function startCountUp(el) {
    if (seenMetrics.has(el)) return;
    seenMetrics.add(el);
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    var unit = el.querySelector('.unit');
    var unitHTML = unit ? unit.outerHTML : '';
    var finalHTML = el.innerHTML;
    var dur = 1200;
    var startTime = null;
    var done = false;
    function step(t) {
      if (!startTime) startTime = t;
      var p = Math.min(1, (t - startTime) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (unitHTML) el.insertAdjacentHTML('beforeend', unitHTML);
      if (p < 1) requestAnimationFrame(step);
      else done = true;
    }
    requestAnimationFrame(step);
    setTimeout(function () { if (!done) el.innerHTML = finalHTML; }, 2000);
  }

  // also check metrics visible on load
  document.querySelectorAll('.metric .v[data-count]').forEach(function (el) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { startCountUp(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    obs.observe(el);
  });

  // ── PARALLAX ────────────────────────────────────────────────
  function setupParallax(id, factor) {
    var el = document.getElementById(id);
    if (!el) return;
    window.addEventListener('scroll', function () {
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

  // ── HERO RETICLE ────────────────────────────────────────────
  var heroViz = document.getElementById('hero-viz');
  var reticle = document.getElementById('hero-reticle');
  if (heroViz && reticle) {
    var rx = 0, ry = 0, tx = 0, ty = 0;
    heroViz.addEventListener('mousemove', function (e) {
      var r = heroViz.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) * 0.055;
      ty = (e.clientY - (r.top + r.height / 2)) * 0.055;
    });
    heroViz.addEventListener('mouseleave', function () { tx = 0; ty = 0; });
    function reticleLoop() {
      rx += (tx - rx) * 0.08;
      ry += (ty - ry) * 0.08;
      reticle.style.transform = 'translate(calc(-50% + ' + rx + 'px), calc(-50% + ' + ry + 'px))';
      requestAnimationFrame(reticleLoop);
    }
    reticleLoop();
  }

  // ── RETICLE RING ANIMATION ──────────────────────────────────
  var rotRing = document.getElementById('rot-ring');
  var rotRingInner = document.getElementById('rot-ring-inner');
  var pulse1 = document.getElementById('pulse1');
  var pulse2 = document.getElementById('pulse2');
  if (rotRing) {
    var angle = 0, pt = 0;
    function ringTick() {
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
    }
    requestAnimationFrame(ringTick);
  }

  // ── HERO WORD REVEAL ────────────────────────────────────────
  var h1 = document.getElementById('hero-h1');
  if (h1) {
    var html = h1.innerHTML;
    var idx = 0;
    var wrapped = html.replace(/([a-zA-Z\u4e00-\u9fa5][^\s<>]*)/g, function (w) {
      if (w.startsWith('&')) return w;
      idx++;
      var delay = (idx * 0.065).toFixed(2);
      return '<span class="word"><span class="inner" style="animation-delay:' + delay + 's">' + w + '</span></span>';
    });
    h1.innerHTML = wrapped;
  }

  // ── LEGACY SVG HERO WAVEFRONT (tech pages) ──────────────────
  var raysG = document.getElementById('rays');
  var ticksG = document.getElementById('ticks');
  var irisSpokes = document.getElementById('iris-spokes');

  function svgEl(tag, attrs) {
    var n = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }

  if (raysG) {
    var cx = 400, cy = 400, N = 28;
    for (var i = 0; i < N; i++) {
      var a = (i / N) * Math.PI * 2;
      raysG.appendChild(svgEl('line', {
        x1: cx + Math.cos(a) * 380, y1: cy + Math.sin(a) * 380,
        x2: cx + Math.cos(a) * 40,  y2: cy + Math.sin(a) * 40,
        'stroke-dasharray': '1,3'
      }));
    }
  }
  if (ticksG) {
    var tcx = 400, tcy = 400, tr = 380;
    for (var ti = 0; ti < 72; ti++) {
      var ta = (ti / 72) * Math.PI * 2;
      ticksG.appendChild(svgEl('line', {
        x1: tcx + Math.cos(ta) * tr, y1: tcy + Math.sin(ta) * tr,
        x2: tcx + Math.cos(ta) * (tr + (ti % 6 === 0 ? 10 : 5)),
        y2: tcy + Math.sin(ta) * (tr + (ti % 6 === 0 ? 10 : 5))
      }));
    }
  }
  if (irisSpokes) {
    var isx = 300, isy = 300;
    for (var ii = 0; ii < 96; ii++) {
      var ia = (ii / 96) * Math.PI * 2;
      irisSpokes.appendChild(svgEl('line', {
        x1: isx + Math.cos(ia) * 56, y1: isy + Math.sin(ia) * 56,
        x2: isx + Math.cos(ia) * 138, y2: isy + Math.sin(ia) * 138,
        opacity: 0.4 + 0.6 * Math.abs(Math.sin(ii * 0.7))
      }));
    }
  }

  var w1 = document.getElementById('wavefront-1');
  var w2 = document.getElementById('wavefront-2');
  var w3 = document.getElementById('wavefront-3');
  var heroCounter = document.getElementById('hero-counter');
  if (w1 || w2 || w3) {
    var wt0 = null;
    function waveTick(t) {
      if (wt0 === null) wt0 = t;
      var elapsed = (t - wt0) / 1000;
      var period = 5.6;
      function setRing(el, phase) {
        if (!el) return;
        var p = ((elapsed / period) + phase) % 1;
        el.setAttribute('r', (22 + p * 340).toFixed(1));
        el.setAttribute('stroke-opacity', ((1 - p) * 0.7).toFixed(3));
      }
      setRing(w1, 0); setRing(w2, 0.34); setRing(w3, 0.67);
      if (heroCounter) heroCounter.textContent = 'f / ' + ((elapsed * 0.018) % 0.999).toFixed(3);
      requestAnimationFrame(waveTick);
    }
    requestAnimationFrame(waveTick);
  }

  // ── VISIBILITY PAUSE ────────────────────────────────────────
  document.addEventListener('visibilitychange', function () {
    // rAF auto-pauses when hidden — nothing extra needed
  });

})();
