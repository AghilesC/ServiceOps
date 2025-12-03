import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

// Analytics - Google Analytics 4 (optionnel)
if (import.meta.env.VITE_GA_ID) {
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${import.meta.env.VITE_GA_ID}', {
      page_path: window.location.pathname,
      anonymize_ip: true,
      respect_dnt: true,
    });
  `;
  document.head.appendChild(script2);
}

// Loading component - Empty pour éviter d'afficher un message
const LoadingFallback = () => null;

// Bootstrap de l'application React
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);

// Service Worker pour PWA (optionnel - à activer en production)
if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log("SW registered: ", registration);
      },
      (error) => {
        console.log("SW registration failed: ", error);
      }
    );
  });
}

// Performance monitoring avec Web Vitals
const reportWebVitals = (metric) => {
  // En mode développement : afficher dans console
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Web Vital:", metric);
  }
  
  // En production : envoyer à Google Analytics si configuré
  if (process.env.NODE_ENV === "production" && import.meta.env.VITE_GA_ID && window.gtag) {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
};

// Charger web-vitals de manière asynchrone pour ne pas bloquer
if (typeof window !== "undefined") {
  import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
    onCLS(reportWebVitals);
    onFID(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
    // INP (Interaction to Next Paint) - nouveau métrique
    if (onINP) {
      onINP(reportWebVitals);
    }
  }).catch(() => {
    // Silently fail si web-vitals n'est pas disponible
  });
}
