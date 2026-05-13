// Akeso — Tweaks panel
// Wires the host protocol via TweaksPanel, mutates CSS custom properties live.

const { useEffect } = React;

function applyTweaks(t) {
  const r = document.documentElement.style;
  r.setProperty('--accent-h', String(t.accentHue));
  r.setProperty('--accent-c', String(t.accentChroma));

  // density: scale the pad-y + section header padding
  const padY = t.density === 'compact' ? 'clamp(72px, 10vw, 120px)'
            : t.density === 'comfy'   ? 'clamp(120px, 17vw, 200px)'
            : 'clamp(96px, 14vw, 168px)';
  r.setProperty('--pad-y', padY);

  // ornaments — hide section indexes + corner mono labels if off
  document.body.classList.toggle('no-ornaments', !t.showOrnaments);

  // hero mode toggle
  document.body.setAttribute('data-hero-mode', t.heroMode);
}

function AkesoTweaks() {
  const [t, setTweak] = useTweaks(window.AKESO_TWEAKS);
  useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent" />
      <TweakSlider label="Hue" value={t.accentHue} min={20} max={120} step={1} unit="°"
                   onChange={(v) => setTweak('accentHue', v)} />
      <TweakSlider label="Chroma" value={t.accentChroma} min={0} max={0.22} step={0.005}
                   onChange={(v) => setTweak('accentChroma', v)} />

      <TweakSection label="Layout" />
      <TweakRadio label="Density" value={t.density}
                  options={['compact', 'regular', 'comfy']}
                  onChange={(v) => setTweak('density', v)} />

      <TweakSection label="Hero" />
      <TweakRadio label="Visual" value={t.heroMode}
                  options={['refraction', 'minimal']}
                  onChange={(v) => setTweak('heroMode', v)} />

      <TweakSection label="Detail" />
      <TweakToggle label="Technical ornaments" value={t.showOrnaments}
                   onChange={(v) => setTweak('showOrnaments', v)} />
    </TweaksPanel>
  );
}

const __twkRoot = document.createElement('div');
document.body.appendChild(__twkRoot);
ReactDOM.createRoot(__twkRoot).render(<AkesoTweaks />);
