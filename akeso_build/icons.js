// Akeso — icon set (inline SVG, Lucide-style line icons, ISC/MIT licensed paths from lucide.dev)
// Usage: <i data-icon="aperture"></i>  or  <i data-icon="eye" data-size="32"></i>
// Stroke width and color use currentColor / stroke-width 1.5 for consistency.

(function () {
  'use strict';

  const ICONS = {
    aperture:
      '<circle cx="12" cy="12" r="10"/>' +
      '<path d="m14.31 8 5.74 9.94"/>' +
      '<path d="M9.69 8h11.48"/>' +
      '<path d="m7.38 12 5.74-9.94"/>' +
      '<path d="M9.69 16 3.95 6.06"/>' +
      '<path d="M14.31 16H2.83"/>' +
      '<path d="m16.62 12-5.74 9.94"/>',
    'scan-eye':
      '<path d="M3 7V5a2 2 0 0 1 2-2h2"/>' +
      '<path d="M17 3h2a2 2 0 0 1 2 2v2"/>' +
      '<path d="M21 17v2a2 2 0 0 1-2 2h-2"/>' +
      '<path d="M7 21H5a2 2 0 0 1-2-2v-2"/>' +
      '<circle cx="12" cy="12" r="1"/>' +
      '<path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/>',
    cpu:
      '<rect width="16" height="16" x="4" y="4" rx="2"/>' +
      '<rect width="6" height="6" x="9" y="9" rx="1"/>' +
      '<path d="M15 2v2"/><path d="M15 20v2"/>' +
      '<path d="M2 15h2"/><path d="M2 9h2"/>' +
      '<path d="M20 15h2"/><path d="M20 9h2"/>' +
      '<path d="M9 2v2"/><path d="M9 20v2"/>',
    factory:
      '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>' +
      '<path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>',
    glasses:
      '<circle cx="6" cy="15" r="4"/>' +
      '<circle cx="18" cy="15" r="4"/>' +
      '<path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/>' +
      '<path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2"/>' +
      '<path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2"/>',
    eye:
      '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>' +
      '<circle cx="12" cy="12" r="3"/>',
    layers:
      '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>' +
      '<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/>' +
      '<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
    microscope:
      '<path d="M6 18h8"/>' +
      '<path d="M3 22h18"/>' +
      '<path d="M14 22a7 7 0 1 0 0-14h-1"/>' +
      '<path d="M9 14h2"/>' +
      '<path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>' +
      '<path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
    atom:
      '<circle cx="12" cy="12" r="1"/>' +
      '<path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/>' +
      '<path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>',
    waypoints:
      '<circle cx="12" cy="4.5" r="2.5"/>' +
      '<path d="m10.2 6.3-3.9 3.9"/>' +
      '<circle cx="4.5" cy="12" r="2.5"/>' +
      '<path d="M7 12h10"/>' +
      '<circle cx="19.5" cy="12" r="2.5"/>' +
      '<path d="m13.8 17.7 3.9-3.9"/>' +
      '<circle cx="12" cy="19.5" r="2.5"/>',
    'arrow-up-right':
      '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    'arrow-right':
      '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>' +
      '<rect width="4" height="12" x="2" y="9"/>' +
      '<circle cx="4" cy="4" r="2"/>',
    mail:
      '<rect width="20" height="16" x="2" y="4" rx="2"/>' +
      '<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    newspaper:
      '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>' +
      '<path d="M18 14h-8"/>' +
      '<path d="M15 18h-5"/>' +
      '<path d="M10 6h8v4h-8V6Z"/>',
    plus:
      '<path d="M12 5v14"/><path d="M5 12h14"/>',
    minus:
      '<path d="M5 12h14"/>',
    'chevron-right':
      '<path d="m9 18 6-6-6-6"/>',
    'chevron-down':
      '<path d="m6 9 6 6 6-6"/>',
    check:
      '<path d="M20 6 9 17l-5-5"/>',
    'circle-dot':
      '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    sparkles:
      '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>' +
      '<path d="M20 3v4"/><path d="M22 5h-4"/>' +
      '<path d="M4 17v2"/><path d="M5 18H3"/>',
    flask:
      '<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/>' +
      '<path d="M6.453 15h11.094"/>' +
      '<path d="M8.5 2h7"/>',
    'circle-check':
      '<circle cx="12" cy="12" r="10"/>' +
      '<path d="m9 12 2 2 4-4"/>',
    'map-pin':
      '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>' +
      '<circle cx="12" cy="10" r="3"/>',
    target:
      '<circle cx="12" cy="12" r="10"/>' +
      '<circle cx="12" cy="12" r="6"/>' +
      '<circle cx="12" cy="12" r="2"/>',
  };

  function svgFor(name, opts) {
    opts = opts || {};
    const paths = ICONS[name];
    if (!paths) return '';
    const size = opts.size || 20;
    const stroke = opts.stroke || 1.5;
    return (
      '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="' + stroke + '" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      paths +
      '</svg>'
    );
  }
  window.AKESO_ICON = svgFor;

  // Auto-replace <i data-icon="..."></i>
  function render(scope) {
    const els = (scope || document).querySelectorAll('[data-icon]');
    els.forEach(function (el) {
      const name = el.dataset.icon;
      const size = el.dataset.size ? parseInt(el.dataset.size, 10) : 20;
      const stroke = el.dataset.stroke ? parseFloat(el.dataset.stroke) : 1.5;
      const html = svgFor(name, { size: size, stroke: stroke });
      if (!html) return;
      // Replace the placeholder with the SVG, preserving wrapper class
      const wrap = document.createElement('span');
      wrap.className = 'icon ' + (el.className || '');
      wrap.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;line-height:0;color:inherit;';
      wrap.innerHTML = html;
      el.replaceWith(wrap);
    });
  }

  // Run once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { render(); });
  } else {
    render();
  }
})();
