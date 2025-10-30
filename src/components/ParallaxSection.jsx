import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * ⚠️ Notes importantes
 * - En dev, React.StrictMode monte/démonte les composants 2x -> c’est normal.
 *   Tes hooks GSAP nettoient bien (trigger.kill), donc OK.
 * - Lenis est optionnel : si non installé, on degrade en scroll natif sans planter.
 *   npm i @studio-freight/lenis
 */

// Bootstrap React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ===== Smooth Scroll + GSAP ScrollTrigger sync (optionnel) =====
(async () => {
  // Respecte les utilisateurs sensibles au mouvement
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return;

  // Essayez de charger Lenis et GSAP seulement si dispos (évite les erreurs en dev)
  let Lenis;
  let gsap, ScrollTrigger;

  try {
    const lenisMod = await import("@studio-freight/lenis");
    Lenis = lenisMod.default || lenisMod;
  } catch {
    // Lenis non installé -> on sort silencieusement
    return;
  }

  try {
    const gsapMod = await import("gsap");
    const stMod = await import("gsap/ScrollTrigger");
    gsap = gsapMod.gsap || gsapMod.default || gsapMod;
    ScrollTrigger = stMod.ScrollTrigger || stMod.default || stMod;
    gsap.registerPlugin(ScrollTrigger);
  } catch {
    // GSAP/ScrollTrigger non installés -> Lenis fonctionne quand même
  }

  // Init Lenis (scroll fluide GPU)
  const lenis = new Lenis({
    lerp: 0.1, // inertie (0.08–0.2 recommandé)
    smoothWheel: true,
    smoothTouch: false, // évite de gêner le scroll mobile
    wheelMultiplier: 1.0,
    touchMultiplier: 1.0,
  });

  // Expose pour debug (window.lenis.scrollTo(...))
  window.lenis = lenis;

  // Boucle RAF — si GSAP est là, on passe par gsap.ticker (plus stable avec ST)
  let rafId;
  const onRaf = (t) => lenis.raf(t);

  const startRaf = () => {
    if (gsap) {
      gsap.ticker.add(onRaf);
      // Désactive le lissage pour éviter la dérive de temps
      gsap.ticker.lagSmoothing(0);
    } else {
      const loop = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    }
  };

  const stopRaf = () => {
    if (gsap) {
      gsap.ticker.remove(onRaf);
    } else if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  // Synchronise Lenis <-> ScrollTrigger (si présent)
  if (ScrollTrigger) {
    lenis.on("scroll", ScrollTrigger.update);
    // Rafraîchir ST quand tout est prêt (images, fonts, etc.)
    const refresh = () => {
      // Petite marge pour laisser le layout se stabiliser
      setTimeout(() => ScrollTrigger.refresh(), 50);
    };
    window.addEventListener("load", refresh, { once: true });
  }

  // Pause quand onglet inactif
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopRaf();
    } else {
      startRaf();
    }
  });

  // Démarre
  startRaf();

  // Debounce “resizing” -> ton CSS coupe les transitions pendant resize
  let resizeTimer;
  const onResize = () => {
    document.body.classList.add("resizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resizing");
      if (ScrollTrigger) ScrollTrigger.refresh();
    }, 150);
  };
  window.addEventListener("resize", onResize);

  // Cleanup si jamais le module est hot-reloaded (Vite)
  if (import.meta && import.meta.hot) {
    import.meta.hot.dispose(() => {
      stopRaf();
      window.removeEventListener("resize", onResize);
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }
      lenis.destroy();
    });
  }
})();

// ===== Service Worker (PWA, prod uniquement) =====
if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log("SW registered:", registration);
      },
      (error) => {
        console.log("SW registration failed:", error);
      }
    );
  });
}

// ===== Web Vitals (optionnel en dev) =====
if (process.env.NODE_ENV === "development") {
  const reportWebVitals = (metric) => {
    console.log(metric);
  };
  // Pour activer, décommente :
  // import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
  //   getCLS(reportWebVitals);
  //   getFID(reportWebVitals);
  //   getFCP(reportWebVitals);
  //   getLCP(reportWebVitals);
  //   getTTFB(reportWebVitals);
  // });
}
