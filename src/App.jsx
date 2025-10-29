import { useMemo } from "react";
import "./index.css";

const haloStops = [
  "rgba(255,255,255,0.7)",
  "rgba(255,255,255,0.3)",
  "rgba(255,255,255,0)"
];

const panels = [
  { id: "vision", title: "Vision", tag: "Ultra", tone: "--tone-a" },
  { id: "clarity", title: "Clarity", tag: "Pro", tone: "--tone-b" },
  { id: "horizon", title: "Horizon", tag: "Max", tone: "--tone-c" },
  { id: "pulse", title: "Pulse", tag: "Studio", tone: "--tone-d" }
];

const modules = [
  {
    name: "A",
    accent: "--tone-a",
    layers: ["neon", "glass", "shadow"],
    glyph: "∞"
  },
  {
    name: "B",
    accent: "--tone-b",
    layers: ["mist", "edge", "flare"],
    glyph: "✦"
  },
  {
    name: "C",
    accent: "--tone-c",
    layers: ["wave", "trace", "veil"],
    glyph: "◌"
  },
  {
    name: "D",
    accent: "--tone-d",
    layers: ["ray", "mesh", "drift"],
    glyph: "○"
  }
];

const tapes = [
  { label: "Carbon", tone: "--tone-a" },
  { label: "Quartz", tone: "--tone-b" },
  { label: "Aurora", tone: "--tone-c" },
  { label: "Lumen", tone: "--tone-d" }
];

const gallery = [
  { cue: "01", theme: "--tone-a" },
  { cue: "02", theme: "--tone-b" },
  { cue: "03", theme: "--tone-c" },
  { cue: "04", theme: "--tone-d" }
];

const matrices = [
  {
    id: "primary",
    code: [
      ["halo", "glow", "pulse"],
      ["sheen", "shine", "calm"],
      ["drift", "aura", "soft"]
    ]
  },
  {
    id: "secondary",
    code: [
      ["luxe", "vibe", "tone"],
      ["void", "flux", "veil"],
      ["ray", "wave", "hush"]
    ]
  },
  {
    id: "tertiary",
    code: [
      ["fine", "mist", "gleam"],
      ["gloss", "muse", "calm"],
      ["aero", "aero", "aero"]
    ]
  }
];

const aurora = [
  { id: "layer-alpha", blur: 60, opacity: 0.4 },
  { id: "layer-beta", blur: 80, opacity: 0.25 },
  { id: "layer-gamma", blur: 120, opacity: 0.2 }
];

const streams = [
  { id: "stream-1", speed: 18, hue: "var(--tone-a)" },
  { id: "stream-2", speed: 22, hue: "var(--tone-b)" },
  { id: "stream-3", speed: 24, hue: "var(--tone-c)" },
  { id: "stream-4", speed: 28, hue: "var(--tone-d)" }
];

const quickLinks = [
  "Overview",
  "Silhouettes",
  "Compositions",
  "Modules",
  "Focus",
  "System"
];

const capsules = [
  { title: "Spatial", meta: "01" },
  { title: "Dynamic", meta: "02" },
  { title: "Silent", meta: "03" },
  { title: "Prismatic", meta: "04" }
];

const accents = ["--tone-a", "--tone-b", "--tone-c", "--tone-d"];

function App() {
  const gradient = useMemo(
    () => haloStops.map((stop, index) => `${stop} ${index * 20 + 20}%`).join(","),
    []
  );

  return (
    <div className="app-shell" style={{"--halo-gradient": gradient}}>
      <aside className="nav-rail">
        <button className="brand-core" aria-label="core" />
        <div className="nav-links">
          {quickLinks.map((item) => (
            <span key={item} className="nav-link">
              <span>{item}</span>
            </span>
          ))}
        </div>
        <div className="nav-indicator" />
      </aside>

      <main className="stage">
        <section className="hero">
          <div className="hero-halo" />
          <div className="hero-content">
            <span className="hero-chip">Nova</span>
            <h1 className="hero-title">Light</h1>
            <div className="hero-grid">
              {panels.map((panel) => (
                <article key={panel.id} className="hero-panel" data-tone={panel.tone}>
                  <div className="panel-inner">
                    <header className="panel-header">
                      <span className="panel-tag">{panel.tag}</span>
                      <span className="panel-title">{panel.title}</span>
                    </header>
                    <div className="panel-body">
                      <div className="panel-aurora" />
                      <div className="panel-module">
                        <span className="panel-glyph">{panel.id.slice(0, 2)}</span>
                        <span className="panel-echo" />
                      </div>
                    </div>
                    <footer className="panel-footer">
                      <span className="panel-footer-line" />
                      <span className="panel-footer-dot" />
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <figure className="hero-device">
            <div className="device-shell">
              <div className="device-halo" />
              <div className="device-inner">
                <div className="device-gradient" />
                <div className="device-reflect" />
              </div>
              <div className="device-shadow" />
            </div>
          </figure>
        </section>

        <section className="module-bay">
          <header className="section-header">
            <span className="section-title">Array</span>
            <span className="section-sub">Precision</span>
          </header>
          <div className="module-grid">
            {modules.map((module) => (
              <article key={module.name} className="module-card" data-accent={module.accent}>
                <div className="module-crest">{module.glyph}</div>
                <div className="module-stack">
                  {module.layers.map((layer) => (
                    <span key={layer} className="module-layer">
                      {layer}
                    </span>
                  ))}
                </div>
                <div className="module-meta">{module.name}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="matrix-wall">
          <header className="section-header">
            <span className="section-title">Matrix</span>
            <span className="section-sub">Calibrated</span>
          </header>
          <div className="matrix-grid">
            {matrices.map((matrix) => (
              <article key={matrix.id} className="matrix-card">
                <div className="matrix-title">{matrix.id}</div>
                <div className="matrix-body">
                  {matrix.code.map((row, rowIndex) => (
                    <div key={`${matrix.id}-row-${rowIndex}`} className="matrix-row">
                      {row.map((cell) => (
                        <span key={cell + rowIndex} className="matrix-cell">
                          {cell}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="film">
          <div className="film-track">
            {tapes.map((tape) => (
              <span key={tape.label} className="film-tag" data-tone={tape.tone}>
                {tape.label}
              </span>
            ))}
          </div>
          <div className="film-track reverse">
            {tapes.map((tape) => (
              <span key={`${tape.label}-ghost`} className="film-tag" data-tone={tape.tone}>
                {tape.label}
              </span>
            ))}
          </div>
        </section>

        <section className="gallery">
          <header className="section-header">
            <span className="section-title">Gallery</span>
            <span className="section-sub">Ambient</span>
          </header>
          <div className="gallery-grid">
            {gallery.map((frame) => (
              <figure key={frame.cue} className="gallery-frame" data-theme={frame.theme}>
                <div className="frame-inner">
                  <span className="frame-id">{frame.cue}</span>
                  <span className="frame-beam" />
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section className="aurora">
          <header className="section-header">
            <span className="section-title">Flow</span>
            <span className="section-sub">Harmonic</span>
          </header>
          <div className="aurora-field">
            {aurora.map((layer) => (
              <div
                key={layer.id}
                className="aurora-layer"
                style={{ filter: `blur(${layer.blur}px)`, opacity: layer.opacity }}
              />
            ))}
            <div className="aurora-streams">
              {streams.map((stream) => (
                <span
                  key={stream.id}
                  className="aurora-stream"
                  style={{ animationDuration: `${stream.speed}s`, background: stream.hue }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="capsule">
          <header className="section-header">
            <span className="section-title">Focus</span>
            <span className="section-sub">Immersive</span>
          </header>
          <div className="capsule-grid">
            {capsules.map((capsule) => (
              <article key={capsule.meta} className="capsule-card">
                <div className="capsule-meta">{capsule.meta}</div>
                <div className="capsule-title">{capsule.title}</div>
                <div className="capsule-sheen" />
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="tray">
        <div className="tray-inner">
          {accents.map((accent) => (
            <span key={accent} className="tray-dot" style={{ background: `var(${accent})` }} />
          ))}
          <span className="tray-brand">Nova</span>
          <span className="tray-glow" />
        </div>
      </footer>
    </div>
  );
}

export default App;
