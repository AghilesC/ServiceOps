// useMediaQuery.js — Hook optimisé pour media queries
import { useState, useEffect } from "react";

// Cache pour useMediaQuery - évite les re-renders
const mediaQueryCache = new Map();

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    // Initialisation synchrone si déjà en cache
    if (mediaQueryCache.has(query)) {
      return mediaQueryCache.get(query).matches;
    }
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      mediaQueryCache.set(query, media);
      return media.matches;
    }
    return false;
  });

  useEffect(() => {
    let media = mediaQueryCache.get(query);
    if (!media && typeof window !== "undefined") {
      media = window.matchMedia(query);
      mediaQueryCache.set(query, media);
    }
    if (!media) return;

    // Mise à jour initiale si nécessaire
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (e) => {
      setMatches(e.matches);
      mediaQueryCache.set(query, e.target);
    };
    
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]); // Retiré matches des dépendances pour éviter les loops

  return matches;
};

