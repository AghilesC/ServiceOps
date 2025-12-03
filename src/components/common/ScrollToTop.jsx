// ScrollToTop.jsx — Scroll automatique au changement de route
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Double RAF pour garantir le scroll
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // Scroll instantané
        });
        
        // Rafraîchir ScrollTrigger plusieurs fois pour s'assurer que tout est bien détecté
        // Délai initial pour laisser le DOM se mettre à jour
        setTimeout(() => {
          ScrollTrigger.refresh();
          
          // Second refresh après un délai pour capturer les éléments qui se chargent plus tard
          setTimeout(() => {
            ScrollTrigger.refresh();
            
            // Forcer la révélation des éléments déjà visibles après refresh
            requestAnimationFrame(() => {
              ScrollTrigger.refresh();
            });
          }, 200);
          
          // Troisième refresh pour les éléments vraiment tardifs
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 500);
        }, 100);
      });
    });
  }, [pathname]);
  
  return null;
};

