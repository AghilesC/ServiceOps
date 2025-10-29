import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Bootstrap de l'application React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service Worker pour PWA (optionnel - à activer en production)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('SW registered: ', registration);
      },
      (error) => {
        console.log('SW registration failed: ', error);
      }
    );
  });
}

// Performance monitoring (optionnel)
if (process.env.NODE_ENV === 'development') {
  const reportWebVitals = (metric) => {
    console.log(metric);
  };
  
  // Vous pouvez importer web-vitals si nécessaire
  // import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
  //   getCLS(reportWebVitals);
  //   getFID(reportWebVitals);
  //   getFCP(reportWebVitals);
  //   getLCP(reportWebVitals);
  //   getTTFB(reportWebVitals);
  // });
}