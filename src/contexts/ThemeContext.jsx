// ThemeContext.jsx — Gestion du thème (Dark/Light)
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Priorité 1: Préférence utilisateur sauvegardée
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    
    // Priorité 2: Préférence système
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    
    // Par défaut: light
    return "light";
  });

  // Applique le thème au document et sauvegarde
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    
    // Met à jour la meta theme-color pour mobile
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        "content",
        theme === "dark" ? "#0f172a" : "#ffffff"
      );
    }
  }, [theme]);

  // Écoute les changements de préférence système (si pas de choix utilisateur)
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    // Si l'utilisateur n'a pas encore fait de choix explicite
    if (!saved || saved === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      
      const handleChange = (e) => {
        setTheme(e.matches ? "dark" : "light");
      };
      
      // Support moderne et ancien
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
      } else if (mediaQuery.addListener) {
        // Fallback pour anciens navigateurs
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

