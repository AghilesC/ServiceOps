// LanguageContext.jsx — Gestion multilingue
import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Récupère la langue sauvegardée ou utilise le navigateur
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    if (saved) return saved;
    
    // Détecte la langue du navigateur
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "fr" ? "fr" : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};