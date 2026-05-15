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
  var navIsDark = nav && nav.classList.contains('nav-on-dark');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add('solid');
    } else {
      // Only go transparent if we're on homepage dark hero
      if (navIsDark) nav.classList.remove('solid');
      // else: stay solid — inner pages always need visible nav
    }
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

// ── MOUSE CURSOR ────────────────────────────────────────────
(function() {
  var dot = document.getElementById('cursor-dot');
  var ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  // Only on pointer:fine devices
  if (!window.matchMedia('(pointer: fine)').matches) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    return;
  }

  var mx = window.innerWidth/2, my = window.innerHeight/2;
  var rx = mx, ry = my;

  // Move dot instantly
  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  }, { passive: true });

  // Ring follows with lerp
  function lerpCursor() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(lerpCursor);
  }
  lerpCursor();

  // Hover states
  var hoverEls = 'a, button, .card, .research-cell, .ntnb-cap';
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest(hoverEls)) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', function(e) {
    if (e.target.closest(hoverEls)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Dark cursor on light sections
  var heroEl = document.querySelector('.hero-dark');
  window.addEventListener('scroll', function() {
    if (!heroEl) return;
    var rect = heroEl.getBoundingClientRect();
    var onDark = rect.bottom > 100;
    // Check other dark sections
    var darkSections = document.querySelectorAll('.future, .ntnb-section, .parallax-section');
    var anyDark = onDark;
    if (!anyDark) {
      darkSections.forEach(function(s) {
        var r = s.getBoundingClientRect();
        if (r.top < window.innerHeight / 2 && r.bottom > window.innerHeight / 2) anyDark = true;
      });
    }
    document.body.classList.toggle('cursor-dark', anyDark);
  }, { passive: true });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', function() {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function() {
    dot.style.opacity = '1';
    ring.style.opacity = '';
  });
})();

// ── HERO RETICLE — full-bleed version (follows mouse globally) ──
(function() {
  var reticle = document.getElementById('hero-reticle');
  var hero = document.querySelector('.hero-dark');
  if (!reticle || !hero) return;

  var rx = 0, ry = 0, tx = 0, ty = 0;
  var baseRight = 0.08; // 8% from right

  document.addEventListener('mousemove', function(e) {
    var rect = hero.getBoundingClientRect();
    if (e.clientY > rect.bottom) { tx = 0; ty = 0; return; }
    // Subtle parallax: reticle drifts opposite to mouse
    tx = (e.clientX / window.innerWidth - 0.5) * -30;
    ty = (e.clientY / window.innerHeight - 0.5) * -20;
  }, { passive: true });

  (function loop() {
    rx += (tx - rx) * 0.05;
    ry += (ty - ry) * 0.05;
    reticle.style.transform = 'translateY(calc(-50% + ' + ry + 'px)) translateX(' + rx + 'px)';
    requestAnimationFrame(loop);
  })();
})();

// ── HAMBURGER MENU ────────────────────────────────────────────
(function() {
  var nav = document.getElementById('nav');
  if (!nav) return;

  // Inject hamburger button into nav
  var hamburger = document.createElement('button');
  hamburger.className = 'nav-hamburger';
  hamburger.setAttribute('aria-label', 'Toggle menu');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(hamburger);

  // Inject mobile overlay
  var overlay = document.createElement('div');
  overlay.className = 'nav-mobile-overlay';

  // Build mobile links from existing nav links
  var navLinks = nav.querySelectorAll('.nav-links a');
  var mobileLinksHTML = '<nav class="nav-mobile-links">';
  navLinks.forEach(function(a) {
    var clone = a.cloneNode(true);
    // Add arrow
    var arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.textContent = '→';
    clone.appendChild(arrow);
    mobileLinksHTML += clone.outerHTML;
  });
  mobileLinksHTML += '</nav>';

  // Lang toggle + CTA
  var langToggle = nav.querySelector('.lang-toggle');
  var cta = nav.querySelector('.nav-cta');
  var bottomHTML = '<div class="nav-mobile-bottom">';
  if (cta) bottomHTML += cta.outerHTML;
  if (langToggle) bottomHTML += langToggle.outerHTML;
  bottomHTML += '</div>';

  overlay.innerHTML = mobileLinksHTML + bottomHTML;
  document.body.appendChild(overlay);

  // Open/close
  var isOpen = false;

  function openMenu() {
    isOpen = true;
    hamburger.classList.add('open');
    overlay.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    isOpen = false;
    hamburger.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function() {
    if (isOpen) closeMenu(); else openMenu();
  });

  // Close on link click
  overlay.querySelectorAll('.nav-mobile-links a').forEach(function(a) {
    a.addEventListener('click', closeMenu);
  });

  // Close on overlay background tap
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

  // Close when nav goes solid (scrolled past hero — menu no longer needed visible)
  // Actually keep open if user opened it
})();
