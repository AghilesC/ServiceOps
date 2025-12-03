// usePrefersReducedMotion.js — Hook pour détecter la préférence utilisateur
import { useMediaQuery } from "./useMediaQuery";

export const usePrefersReducedMotion = () => {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
};

