// ScrollToTopButton.jsx — Bouton flottant retour en haut
import React, { useState, useEffect, useCallback, memo } from "react";
import { ArrowUp } from "lucide-react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export const ScrollToTopButton = memo(() => {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-btn"
      aria-label="Retour en haut"
      title="Retour en haut"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
});

ScrollToTopButton.displayName = "ScrollToTopButton";

