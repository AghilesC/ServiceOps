import { useMemo } from "react";
import "./index.css";

const navItems = ["Overview", "Studio", "Models", "Colors", "Specs", "Support"];

const heroLayers = [
  { id: "glow", radius: 640, blur: 220, opacity: 0.42 },
  { id: "pulse", radius: 420, blur: 160, opacity: 0.36 },
  { id: "haze", radius: 280, blur: 120, opacity: 0.3 }
];

const heroBadges = [
  { label: "Nova", tone: "--tone-ice" },
  { label: "Light", tone: "--tone-sky" },
  { label: "Pro", tone: "--tone-bloom" }
];

const moduleDeck = [
  {
    id: "alpha",
    title: "Ultra",
    tag: "A",
    layers: ["shell", "horizon", "silk"],
    accent: "--tone-ice"
  },
  {
    id: "beta",
    title: "Max",
    tag: "B",
    layers: ["carbon", "gloss", "mist"],
    accent: "--tone-sky"
  },
  {
    id: "gamma",
    title: "Studio",
    tag: "C",
    layers: ["veil", "trace", "sheen"],
    accent: "--tone-bloom"
  },
  {
    id: "delta",
    title: "Air",
    tag: "D",
    layers: ["feather", "hush", "drift"],
    accent: "--tone-pearl"
  }
];

const lattice = [
  ["vibe", "flux", "calm", "luxe"],
  ["tone", "glow", "soft", "pure"],
  ["wave", "sheen", "halo", "void"],
  ["mist", "haze", "aero", "silk"]
];

const studioSlides = [
  { cue: "01", label: "Silhouette", tone: "--tone-ice" },
  { cue: "02", label: "Gradient", tone: "--tone-sky" },
  { cue: "03", label: "Aura", tone: "--tone-bloom" },
  { cue: "04", label: "Spectrum", tone: "--tone-pearl" }
];

const paletteSwatches = [
  { name: "Frost", accent: "--tone-ice" },
  { name: "Mist", accent: "--tone-sky" },
  { name: "Bloom", accent: "--tone-bloom" },
  { name: "Pearl", accent: "--tone-pearl" }
];

const orbitDots = Array.from({ length: 24 }, (_, index) => ({
  id: `orbit-${index}`,
  delay: index * 60
}));

const signalPins = [
  { id: "signal-alpha", tone: "--tone-ice" },
  { id: "signal-beta", tone: "--tone-sky" },
  { id: "signal-gamma", tone: "--tone-bloom" },
  { id: "signal-delta", tone: "--tone-pearl" }
];

const footerGlyphs = ["⌁", "⌂", "⌽", "⎌"];

function App() {
  const heroGradient = useMemo(
    () =>
      heroLayers
        .map((layer) =>
          `radial-gradient(circle at center, rgba(255,255,255,${layer.opacity}) 0, rgba(255,255,255,0) ${layer.radius}px)`
        )
        .join(","),
    []
  );

  return (
    <div className="nova-shell" style={{ "--hero-gradient": heroGradient }}>
      <aside className="nova-rail">
        <button className="nova-brand" aria-label="Nova" />
        <nav className="nova-nav">
          {navItems.map((item) => (
            <span key={item} className="nav-item">
              {item}
            </span>
          ))}
        </nav>
        <span className="rail-indicator" />
      </aside>

      <main className="nova-stage">
        <section className="hero-block">
          <div className="hero-backdrop">
            {heroBadges.map((badge) => (
              <span key={badge.label} className="hero-badge" data-tone={badge.tone}>
                {badge.label}
              </span>
            ))}
          </div>
          <div className="hero-device">
            <div className="device-outline">
              <div className="device-edge" />
              <div className="device-glass">
                <div className="device-light" />
                <div className="device-reflection" />
              </div>
              <div className="device-shadow" />
            </div>
          </div>
          <div className="hero-overlay">
            {heroLayers.map((layer) => (
              <span
                key={layer.id}
                className="hero-layer"
                style={{
                  filter: `blur(${layer.blur}px)`,
                  opacity: layer.opacity,
                  animationDelay: `${layer.blur / 8}ms`
                }}
              />
            ))}
          </div>
        </section>

        <section className="module-section">
          <header className="section-heading">
            <span className="heading-title">Array</span>
            <span className="heading-tag">Precision</span>
          </header>
          <div className="module-grid">
            {moduleDeck.map((module) => (
              <article key={module.id} className="module-card" data-accent={module.accent}>
                <div className="module-header">
                  <span className="module-tag">{module.tag}</span>
                  <span className="module-title">{module.title}</span>
                </div>
                <div className="module-body">
                  {module.layers.map((layer) => (
                    <span key={layer} className="module-layer">
                      {layer}
                    </span>
                  ))}
                </div>
                <div className="module-glow" />
              </article>
            ))}
          </div>
        </section>

        <section className="lattice-section">
          <header className="section-heading">
            <span className="heading-title">Matrix</span>
            <span className="heading-tag">Harmonic</span>
          </header>
          <div className="lattice-grid">
            {lattice.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className="lattice-row">
                {row.map((cell) => (
                  <span key={`${cell}-${rowIndex}`} className="lattice-cell">
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="studio-section">
          <header className="section-heading">
            <span className="heading-title">Studio</span>
            <span className="heading-tag">Flow</span>
          </header>
          <div className="studio-reel">
            {studioSlides.map((slide) => (
              <figure key={slide.cue} className="studio-card" data-tone={slide.tone}>
                <div className="studio-frame">
                  <span className="studio-cue">{slide.cue}</span>
                  <span className="studio-label">{slide.label}</span>
                </div>
                <span className="studio-glimmer" />
              </figure>
            ))}
          </div>
        </section>

        <section className="palette-section">
          <header className="section-heading">
            <span className="heading-title">Palette</span>
            <span className="heading-tag">Tone</span>
          </header>
          <div className="palette-grid">
            {paletteSwatches.map((swatch) => (
              <article key={swatch.name} className="swatch-card" data-accent={swatch.accent}>
                <span className="swatch-tone" />
                <span className="swatch-name">{swatch.name}</span>
                <span className="swatch-sheen" />
              </article>
            ))}
          </div>
        </section>

        <section className="orbit-section">
          <div className="orbit-ring">
            {orbitDots.map((dot) => (
              <span
                key={dot.id}
                className="orbit-dot"
                style={{ animationDelay: `${dot.delay}ms` }}
              />
            ))}
          </div>
          <div className="orbit-core">
            {signalPins.map((pin) => (
              <span key={pin.id} className="signal-pin" data-tone={pin.tone} />
            ))}
            <div className="signal-core" />
          </div>
        </section>
      </main>

      <footer className="nova-footer">
        <div className="footer-inner">
          {footerGlyphs.map((glyph, index) => (
            <span key={`${glyph}-${index}`} className="footer-glyph">
              {glyph}
            </span>
          ))}
          <span className="footer-mark">Nova</span>
          <span className="footer-sheen" />
        </div>
      </footer>
    </div>
  );
}

export default App;
