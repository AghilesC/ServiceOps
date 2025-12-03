// App.jsx — Workora MULTILINGUE (FR/EN) - ULTRA OPTIMISÉ
import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PropTypes from "prop-types";
import {
  CheckCircle,
  Clock,
  Shield,
  Database,
  Calendar,
  Send,
  FileText,
  Users,
  TrendingUp,
  Lock,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Zap,
  BarChart3,
  Layers,
  Globe,
  Smartphone,
  Sun,
  Moon,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  Languages,
  ArrowUp,
  Linkedin,
  Package,
  Map,
  MessageSquare,
  CreditCard,
  CheckCircle2,
  Sparkles,
  DollarSign,
  Calculator,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Hooks & components
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import { ScrollReveal } from "./components/ScrollReveal";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { useTranslation } from "./translations/translations";

// Nouveaux composants extraits
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { OptimizedImage } from "./components/ui/OptimizedImage";
import { Counter } from "./components/ui/Counter";
import { MagneticButton } from "./components/ui/MagneticButton";
import { TiltCard } from "./components/ui/TiltCard";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { SkipLink } from "./components/common/SkipLink";
import { ScrollProgress } from "./components/common/ScrollProgress";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ScrollToTopButton } from "./components/common/ScrollToTopButton";
import { PageTransitionContainer } from "./components/common/PageTransition";
import { FAQItem } from "./components/common/FAQItem";

/* =========================================
   CONSTANTES & DONNÉES
========================================= */
const ANIMATION_DURATIONS = {
  FAST: 150,
  BASE: 300,
  SLOW: 500,
};

const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)]+$/;

/* =========================================
   NAVIGATION
========================================= */
const Navigation = memo(() => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const menuRef = useRef(null);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    let ticking = false;
    const updateScrolled = () => {
      setScrolled(window.scrollY > 50);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Détection de la section active au scroll (page d'accueil uniquement)
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = [
      { id: "hero-title", name: "home" },
      { id: "features-title", name: "features" },
      { id: "process-title", name: "process" },
      { id: "benefits-title", name: "benefits" },
    ];

    let ticking = false;
    const checkActiveSection = () => {
      const scrollPosition = window.scrollY + 150; // Offset pour la navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].name);
            ticking = false;
            return;
          }
        }
      }
      setActiveSection("home");
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(checkActiveSection);
        ticking = true;
      }
    };

    checkActiveSection(); // Initial check
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const handleLinkClick = useCallback((e) => {
    setOpen(false);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="navbar-content" ref={menuRef}>
          <Link
            to="/"
            className="navbar-brand interactive"
            aria-label="Workora Home"
            onClick={handleLinkClick}
          >
            <div className="brand-icon" aria-hidden="true">
              <OptimizedImage 
                src="/workora_logo.png" 
                alt="Workora Logo" 
                className="brand-logo-img"
              />
            </div>
            <span className="brand-text">Workora</span>
          </Link>

          <div className={`navbar-menu ${open ? "open" : ""}`} role="menu">
            <Link
              to="/"
              className={`nav-link interactive ${
                location.pathname === "/" && (!activeSection || activeSection === "home") ? "active" : ""
              }`}
              role="menuitem"
              aria-current={location.pathname === "/" ? "page" : undefined}
              onClick={(e) => {
                handleLinkClick(e);
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/about"
              className={`nav-link interactive ${
                location.pathname === "/about" ? "active" : ""
              }`}
              role="menuitem"
              aria-current={location.pathname === "/about" ? "page" : undefined}
              onClick={handleLinkClick}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/why-now"
              className={`nav-link interactive ${
                location.pathname === "/why-now" ? "active" : ""
              }`}
              role="menuitem"
              aria-current={location.pathname === "/why-now" ? "page" : undefined}
              onClick={handleLinkClick}
            >
              {t("nav.whyNow")}
            </Link>
            <Link
              to="/pricing"
              className={`nav-link interactive ${
                location.pathname === "/pricing" ? "active" : ""
              }`}
              role="menuitem"
              aria-current={location.pathname === "/pricing" ? "page" : undefined}
              onClick={handleLinkClick}
            >
              {t("nav.pricing")}
            </Link>
            <Link
              to="/faq"
              className={`nav-link interactive ${
                location.pathname === "/faq" ? "active" : ""
              }`}
              role="menuitem"
              aria-current={location.pathname === "/faq" ? "page" : undefined}
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className={`nav-link interactive ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              role="menuitem"
              aria-current={
                location.pathname === "/contact" ? "page" : undefined
              }
              onClick={handleLinkClick}
            >
              {t("nav.contact")}
            </Link>
          </div>

          <div className="navbar-actions">
            <button
              onClick={toggleLanguage}
              className="theme-toggle interactive"
              aria-label={
                language === "en"
                  ? t("nav.switchToFrench")
                  : t("nav.switchToEnglish")
              }
              title={
                language === "en"
                  ? t("nav.switchToFrench")
                  : t("nav.switchToEnglish")
              }
            >
              <Languages size={20} />
              <span className="lang-badge">{language.toUpperCase()}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="theme-toggle interactive"
              aria-label={
                theme === "dark" ? t("nav.switchToLight") : t("nav.switchToDark")
              }
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={open}
              aria-controls="navbar-menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

/* =========================================
   ROI CALCULATOR COMPONENT
========================================= */
const ROICalculator = memo(({ language, t, navigate }) => {
  const calculatorRef = useRef(null);
  const [formData, setFormData] = useState({
    technicians: 5,
    monthlyErrorCostPerTech: 500,
    workOrdersPerMonth: 50, // Nombre de bons de travail par mois
    timeWorkOrderCreation: 15, // Minutes pour créer le bon de travail
    timeWorkOrderDelivery: 10, // Minutes pour remettre/transmettre le bon
    timeInventoryManagement: 5, // Minutes pour gérer l'inventaire par bon
    timeBillingAccounting: 30, // Minutes pour facturation/comptabilité par bon
    hourlyRate: 50, // Taux horaire moyen
  });
  
  const [showResults, setShowResults] = useState(false);
  
  // Temps automatisé par bon de travail (3 minutes)
  const AUTOMATED_TIME_PER_WORK_ORDER = 3; // minutes

  // Prix des plans par mois
  const planPrices = {
    essentials: 249,
    pro: 499,
    enterprise: 999,
  };

  // Déterminer le plan recommandé basé sur le nombre de techniciens
  const getRecommendedPlan = useCallback((techCount) => {
    if (techCount <= 5) return "essentials";
    if (techCount <= 10) return "pro";
    return "enterprise";
  }, []);

  const calculateROI = useCallback(() => {
    const { 
      technicians, 
      monthlyErrorCostPerTech, 
      workOrdersPerMonth,
      timeWorkOrderCreation,
      timeWorkOrderDelivery,
      timeInventoryManagement,
      timeBillingAccounting,
      hourlyRate
    } = formData;
    
    // Convertir les valeurs vides en 0 pour les calculs
    const techCount = technicians === "" ? 0 : (technicians || 0);
    const errorCost = monthlyErrorCostPerTech === "" ? 0 : (monthlyErrorCostPerTech || 0);
    const workOrders = workOrdersPerMonth === "" ? 0 : (workOrdersPerMonth || 0);
    const timeCreation = timeWorkOrderCreation === "" ? 0 : (timeWorkOrderCreation || 0);
    const timeDelivery = timeWorkOrderDelivery === "" ? 0 : (timeWorkOrderDelivery || 0);
    const timeInventory = timeInventoryManagement === "" ? 0 : (timeInventoryManagement || 0);
    const timeBilling = timeBillingAccounting === "" ? 0 : (timeBillingAccounting || 0);
    const rate = hourlyRate === "" ? 0 : (hourlyRate || 0);
    
    const recommendedPlan = getRecommendedPlan(techCount);
    
    // Calculs : marge d'erreur par technicien × nombre de techniciens
    const monthlyTotalErrorCost = errorCost * techCount;
    
    // Calcul du temps total manuel par bon de travail (en minutes)
    const totalManualTimePerWorkOrder = 
      timeCreation + 
      timeDelivery + 
      timeInventory + 
      timeBilling;
    
    // Temps gagné par bon de travail (manuel - automatisé)
    const timeSavedPerWorkOrder = totalManualTimePerWorkOrder - AUTOMATED_TIME_PER_WORK_ORDER;
    
    // Temps total gagné par mois (en minutes, puis converti en heures)
    const totalTimeSavedMinutes = timeSavedPerWorkOrder * workOrders;
    const totalTimeSavedHours = totalTimeSavedMinutes / 60;
    
    // Économies de temps en dollars : temps gagné (heures) × taux horaire
    const monthlyTimeSavings = totalTimeSavedHours * rate;
    
    // Économies totales mensuelles = erreurs évitées + temps gagné
    const monthlyTotalSavings = monthlyTotalErrorCost + monthlyTimeSavings;
    
    // Économies annuelles
    const annualSavings = monthlyTotalSavings * 12;
    
    // Coût du plan recommandé
    const monthlyPlanCost = planPrices[recommendedPlan] || 499;
    const annualPlanCost = monthlyPlanCost * 12;
    
    // ROI réel : économies - coût du plan
    const netSavings = annualSavings - annualPlanCost;
    const roi = annualPlanCost > 0 ? ((netSavings / annualPlanCost) * 100).toFixed(0) : 0;
    const paybackMonths = annualSavings > 0 ? ((annualPlanCost / (annualSavings / 12))).toFixed(1) : 0;

    return {
      monthlyTotalErrorCost: Math.round(monthlyTotalErrorCost),
      monthlyTimeSavings: Math.round(monthlyTimeSavings),
      monthlyTotalSavings: Math.round(monthlyTotalSavings),
      annualSavings: Math.round(annualSavings),
      monthlyPlanCost: Math.round(monthlyPlanCost),
      annualPlanCost: Math.round(annualPlanCost),
      netSavings: Math.round(netSavings),
      roi: parseFloat(roi),
      paybackMonths: parseFloat(paybackMonths),
      totalManualTimePerWorkOrder: Math.round(totalManualTimePerWorkOrder),
      timeSavedPerWorkOrder: Math.round(timeSavedPerWorkOrder),
      totalTimeSavedHours: Math.round(totalTimeSavedHours * 10) / 10,
      recommendedPlan: recommendedPlan,
    };
  }, [formData, getRecommendedPlan]);

  const results = calculateROI();

  const handleInputChange = useCallback((field, value) => {
    // Permettre que le champ soit vide
    if (value === "" || value === null || value === undefined) {
      setFormData((prev) => ({ ...prev, [field]: "" }));
    } else {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        setFormData((prev) => ({ ...prev, [field]: numValue }));
      }
    }
  }, []);
  
  const handleCalculate = useCallback(() => {
    setShowResults(true);
    // Scroll vers le haut du calculateur
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (calculatorRef.current) {
          const offsetTop = calculatorRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      });
    });
  }, []);

  const handleNavigatePricing = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  return (
    <div ref={calculatorRef}>
      <TiltCard className="roi-calculator-card">
        <div className="roi-calculator-grid">
        {/* Inputs */}
        <div className="roi-calculator-inputs">
          <div className="roi-input-group">
            <label htmlFor="technicians">
              <Users size={18} />
              {t("roiCalculator.fields.technicians")}
            </label>
            <input
              type="number"
              id="technicians"
              min="1"
              max="100"
              value={formData.technicians}
              onChange={(e) => handleInputChange("technicians", e.target.value)}
              className="roi-input"
            />
          </div>

          <div className="roi-input-group">
            <label htmlFor="hourlyRate">
              <DollarSign size={18} />
              {t("roiCalculator.fields.hourlyRate")}
            </label>
            <input
              type="number"
              id="hourlyRate"
              min="0"
              step="1"
              value={formData.hourlyRate}
              onChange={(e) => handleInputChange("hourlyRate", e.target.value)}
              className="roi-input"
            />
            <small className="roi-input-hint">{t("roiCalculator.fields.hourlyRateHint")}</small>
          </div>

          <div className="roi-input-group">
            <label htmlFor="monthlyErrorCostPerTech">
              <AlertTriangle size={18} />
              {t("roiCalculator.fields.monthlyErrorCostPerTech")}
            </label>
            <input
              type="number"
              id="monthlyErrorCostPerTech"
              min="0"
              step="1"
              value={formData.monthlyErrorCostPerTech}
              onChange={(e) => handleInputChange("monthlyErrorCostPerTech", e.target.value)}
              className="roi-input"
            />
          </div>

          <div className="roi-input-group">
            <label htmlFor="workOrdersPerMonth">
              <FileText size={18} />
              {t("roiCalculator.fields.workOrdersPerMonth")}
            </label>
            <input
              type="number"
              id="workOrdersPerMonth"
              min="0"
              step="1"
              value={formData.workOrdersPerMonth}
              onChange={(e) => handleInputChange("workOrdersPerMonth", e.target.value)}
              className="roi-input"
            />
          </div>

          <div className="roi-time-section">
            <h4 className="roi-time-section-title">{t("roiCalculator.timeSection.title")}</h4>
            <p className="roi-time-section-subtitle">{t("roiCalculator.timeSection.subtitle")}</p>
            
            <div className="roi-time-inputs">
              <div className="roi-input-group">
                <label htmlFor="timeWorkOrderCreation">
                  <FileText size={16} />
                  {t("roiCalculator.fields.timeWorkOrderCreation")}
                </label>
                <div className="roi-input-small-wrapper">
                  <input
                    type="number"
                    id="timeWorkOrderCreation"
                    min="0"
                    step="1"
                    value={formData.timeWorkOrderCreation}
                    onChange={(e) => handleInputChange("timeWorkOrderCreation", e.target.value)}
                    className="roi-input roi-input-small"
                  />
                  <span className="roi-input-unit">min</span>
                </div>
              </div>

              <div className="roi-input-group">
                <label htmlFor="timeWorkOrderDelivery">
                  <Send size={16} />
                  {t("roiCalculator.fields.timeWorkOrderDelivery")}
                </label>
                <div className="roi-input-small-wrapper">
                  <input
                    type="number"
                    id="timeWorkOrderDelivery"
                    min="0"
                    step="1"
                    value={formData.timeWorkOrderDelivery}
                    onChange={(e) => handleInputChange("timeWorkOrderDelivery", e.target.value)}
                    className="roi-input roi-input-small"
                  />
                  <span className="roi-input-unit">min</span>
                </div>
              </div>

              <div className="roi-input-group">
                <label htmlFor="timeInventoryManagement">
                  <Package size={16} />
                  {t("roiCalculator.fields.timeInventoryManagement")}
                </label>
                <div className="roi-input-small-wrapper">
                  <input
                    type="number"
                    id="timeInventoryManagement"
                    min="0"
                    step="1"
                    value={formData.timeInventoryManagement}
                    onChange={(e) => handleInputChange("timeInventoryManagement", e.target.value)}
                    className="roi-input roi-input-small"
                  />
                  <span className="roi-input-unit">min</span>
                </div>
              </div>

              <div className="roi-input-group">
                <label htmlFor="timeBillingAccounting">
                  <CreditCard size={16} />
                  {t("roiCalculator.fields.timeBillingAccounting")}
                </label>
                <div className="roi-input-small-wrapper">
                  <input
                    type="number"
                    id="timeBillingAccounting"
                    min="0"
                    step="1"
                    value={formData.timeBillingAccounting}
                    onChange={(e) => handleInputChange("timeBillingAccounting", e.target.value)}
                    className="roi-input roi-input-small"
                  />
                  <span className="roi-input-unit">min</span>
                </div>
              </div>
            </div>
            
            <div className="roi-time-comparison">
              <div className="roi-time-manual">
                <AlertTriangle size={16} />
                <div>
                  <span className="roi-time-label">{t("roiCalculator.timeSection.manualTime")}:</span>
                  <span className="roi-time-value">{results.totalManualTimePerWorkOrder} min</span>
                </div>
              </div>
              <ArrowRight size={20} className="roi-time-arrow" />
              <div className="roi-automated-time">
                <CheckCircle size={16} />
                <div>
                  <span className="roi-time-label">{t("roiCalculator.timeSection.automatedTime")}:</span>
                  <span className="roi-time-value"><strong>3 min</strong></span>
                </div>
              </div>
              <div className="roi-time-saved">
                <TrendingUp size={16} />
                <span>{t("roiCalculator.timeSection.timeSaved")}: <strong>{results.timeSavedPerWorkOrder} min</strong> {t("roiCalculator.timeSection.perWorkOrder")}</span>
              </div>
            </div>
          </div>

          <MagneticButton
            onClick={handleCalculate}
            className="btn btn-primary btn-enhanced roi-calculate-btn"
            ariaLabel={t("roiCalculator.calculateButton")}
          >
            <Calculator size={20} aria-hidden="true" />
            <span>{t("roiCalculator.calculateButton")}</span>
          </MagneticButton>
        </div>

        {/* Results */}
        {showResults && (
        <div className="roi-calculator-results">
          <div className="roi-results-explanation">
            <p>{t("roiCalculator.results.explanation")}</p>
          </div>
          <div className="roi-result-card">
            <DollarSign className="roi-result-icon" size={32} />
            <div className="roi-result-content">
              <h3>{t("roiCalculator.results.monthlySavings")}</h3>
              <p className="roi-result-value">
                ${results.monthlyTotalSavings.toLocaleString()}
              </p>
              <p className="roi-result-breakdown">
                {t("roiCalculator.results.errorsAvoided")}: ${results.monthlyTotalErrorCost.toLocaleString()} + {t("roiCalculator.results.timeSaved")}: ${results.monthlyTimeSavings.toLocaleString()} ({results.totalTimeSavedHours}h/mois)
              </p>
            </div>
          </div>

          <div className="roi-result-card">
            <TrendingUp className="roi-result-icon" size={32} />
            <div className="roi-result-content">
              <h3>{t("roiCalculator.results.annualSavings")}</h3>
              <p className="roi-result-value">
                ${results.annualSavings.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="roi-result-card">
            <CreditCard className="roi-result-icon" size={32} />
            <div className="roi-result-content">
              <h3>{t("roiCalculator.results.annualPlanCost")}</h3>
              <p className="roi-result-value roi-result-cost">
                ${results.annualPlanCost.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="roi-result-card roi-result-card-highlight">
            <Calculator className="roi-result-icon" size={32} />
            <div className="roi-result-content">
              <h3>{t("roiCalculator.results.netSavings")}</h3>
              <p className={`roi-result-value roi-result-net ${results.netSavings < 0 ? "roi-result-negative" : ""}`}>
                ${results.netSavings.toLocaleString()}
              </p>
              <p className={`roi-result-roi-percent ${results.roi < 0 ? "roi-result-negative" : ""}`}>
                ROI: {results.roi > 0 ? "+" : ""}{results.roi}%
              </p>
            </div>
          </div>

          <div className={`roi-plan-recommendation ${results.netSavings < 0 ? "roi-recommendation-negative" : ""}`}>
            {results.netSavings < 0 ? (
              <>
                <AlertTriangle size={24} className="roi-recommendation-icon roi-recommendation-warning-icon" />
                <div className="roi-recommendation-content">
                  <h4>{t("roiCalculator.results.notRecommendedTitle")}</h4>
                  <p className="roi-recommendation-reason roi-recommendation-warning">
                    {t("roiCalculator.results.notRecommendedMessage")}
                  </p>
                </div>
              </>
            ) : (
              <>
                <CheckCircle size={24} className="roi-recommendation-icon" />
                <div className="roi-recommendation-content">
                  <h4>{t("roiCalculator.results.recommendationTitle")}</h4>
                  <p className="roi-recommendation-plan">
                    <strong>{t(`roiCalculator.plans.${results.recommendedPlan}`)}</strong> - ${planPrices[results.recommendedPlan]}{language === "fr" ? "/mois" : "/month"}
                  </p>
                  <p className="roi-recommendation-reason">
                    {t(`roiCalculator.results.recommendationReason.${results.recommendedPlan}`, { technicians: formData.technicians })}
                  </p>
                  {results.netSavings > 0 && (
                    <MagneticButton
                      onClick={handleNavigatePricing}
                      className="btn btn-primary btn-enhanced roi-cta-btn-inline"
                      ariaLabel={t("roiCalculator.cta")}
                    >
                      <ArrowRight size={20} aria-hidden="true" />
                      <span>{t("roiCalculator.cta")}</span>
                    </MagneticButton>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        )}
      </div>
      </TiltCard>
    </div>
  );
});

ROICalculator.displayName = "ROICalculator";
ROICalculator.propTypes = {
  language: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

/* =========================================
   HOME PAGE
========================================= */
const HomePage = React.memo(() => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  useScrollAnimations();

  // Meta tags SEO
  const metaTitle = language === "fr" 
    ? "Field Service Management Software Solution - Workora"
    : "Field Service Management Software Solution - Workora";
  const metaDescription = language === "fr"
    ? "Workora par Aghiles CHAOUCHE : Solution complète de digitalisation pour techniciens. Bons de travail numériques, signatures électroniques, envoi automatique. CVC, plomberie, électricité."
    : "Workora by Aghiles CHAOUCHE: Complete digitalization solution for technicians. Digital work orders, electronic signatures, automatic delivery. HVAC, plumbing, electrical.";

  const handleNavigateContact = useCallback((e) => {
    e.preventDefault();
    navigate("/contact");
  }, [navigate]);

  // Données dynamiques basées sur la langue - MÉMORISÉES
  const FEATURES_DATA = React.useMemo(() => [
    {
      icon: FileText,
      title: t("features.items.0.title"),
      desc: t("features.items.0.desc"),
      color: "blue",
    },
    {
      icon: Send,
      title: t("features.items.1.title"),
      desc: t("features.items.1.desc"),
      color: "green",
    },
    {
      icon: Database,
      title: t("features.items.2.title"),
      desc: t("features.items.2.desc"),
      color: "purple",
    },
    {
      icon: Calendar,
      title: t("features.items.3.title"),
      desc: t("features.items.3.desc"),
      color: "orange",
    },
    {
      icon: BarChart3,
      title: t("features.items.4.title"),
      desc: t("features.items.4.desc"),
      color: "pink",
    },
    {
      icon: Lock,
      title: t("features.items.5.title"),
      desc: t("features.items.5.desc"),
      color: "red",
    },
  ], [t]);

  const PROCESS_STEPS = React.useMemo(() => [
    {
      num: "01",
      icon: FileText,
      title: t("process.steps.0.title"),
      desc: t("process.steps.0.desc"),
    },
    {
      num: "02",
      icon: CheckCircle,
      title: t("process.steps.1.title"),
      desc: t("process.steps.1.desc"),
    },
    {
      num: "03",
      icon: Send,
      title: t("process.steps.2.title"),
      desc: t("process.steps.2.desc"),
    },
    {
      num: "04",
      icon: TrendingUp,
      title: t("process.steps.3.title"),
      desc: t("process.steps.3.desc"),
    },
  ], [t]);



  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://serviceops.fr/" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://serviceops.fr/" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <html lang={language} />
      </Helmet>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-slideshow" aria-hidden="true">
            <div className="hero-bg-slide hero-bg-slide-1" />
            <div className="hero-bg-slide hero-bg-slide-2" />
            <div className="hero-bg-slide hero-bg-slide-3" />
          </div>
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <ScrollReveal delay={0}>
                <h1 id="hero-title" className="hero-title">
                  {t("hero.title")}{" "}
                  <span className="gradient-text gradient-text-enhanced">{t("hero.titleHighlight")}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p className="hero-description">
                  {t("hero.description")}
                </p>
              </ScrollReveal>

              <ScrollReveal type="scale" delay={0.1}>
                <div className="hero-cta">
                  <MagneticButton
                    onClick={handleNavigateContact}
                    className="btn btn-primary btn-enhanced interactive"
                    ariaLabel={t("hero.requestDemo")}
                  >
                    <Send size={20} aria-hidden="true" />
                    <span>{t("hero.requestDemo")}</span>
                    <ArrowRight size={18} aria-hidden="true" />
                    <span className="btn-shine" aria-hidden="true" />
                  </MagneticButton>

                  <a
                    href="tel:+14387889596"
                    className="btn btn-secondary btn-enhanced interactive"
                    aria-label={t("hero.talkToUs")}
                  >
                    <Phone size={20} aria-hidden="true" />
                    <span>{t("hero.talkToUs")}</span>
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="hero-stats enhanced-stats" role="list">
                  <div className="stat stat-enhanced" role="listitem">
                    <div className="stat-icon-wrapper">
                      <Shield size={24} className="stat-icon" aria-hidden="true" />
                    </div>
                    <div className="stat-value">
                      <Counter end={100} suffix="%" />
                    </div>
                    <div className="stat-label">{t("hero.stats.privacy")}</div>
                  </div>
                  <div className="stat stat-enhanced" role="listitem">
                    <div className="stat-icon-wrapper">
                      <Clock size={24} className="stat-icon" aria-hidden="true" />
                    </div>
                    <div className="stat-value">
                      <Counter end={24} suffix="/7" />
                    </div>
                    <div className="stat-label">{t("hero.stats.available")}</div>
                  </div>
                  <div className="stat stat-enhanced" role="listitem">
                    <div className="stat-icon-wrapper">
                      <TrendingUp size={24} className="stat-icon" aria-hidden="true" />
                    </div>
                    <div className="stat-value">
                      <Counter end={100} suffix="%" />
                    </div>
                    <div className="stat-label">{t("hero.stats.tracked")}</div>
                  </div>
                  <div className="stat stat-enhanced" role="listitem">
                    <div className="stat-icon-wrapper">
                      <Zap size={24} className="stat-icon" aria-hidden="true" />
                    </div>
                    <div className="stat-value">
                      <span className="stat-plus">+</span>
                      <Counter end={35} suffix="%" />
                    </div>
                    <div className="stat-label">{t("hero.stats.productivity")}</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal type="scale" delay={0.2} className="hero-visual">
              <div
                className="phone-mockup phone-mockup-small"
                role="img"
                aria-label={t("hero.mockupAlt")}
              >
                <div className="phone-frame">
                  <div className="phone-screen">
                    <div className="phone-screen-content">
                      <Smartphone className="phone-icon" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="section features-section"
        aria-labelledby="features-title"
      >
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 id="features-title" className="section-title">
                {t("features.title")}
              </h2>
              <p className="section-subtitle">
                {t("features.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="features-grid" role="list">
            {FEATURES_DATA.map((f, i) => (
              <ScrollReveal key={i} type="scale" delay={i * 0.05}>
                <TiltCard
                  className={`feature-card feature-card-enhanced color-${f.color}`}
                  role="listitem"
                >
                  <div className="feature-card-inner">
                    <div className="feature-icon" aria-hidden="true">
                      <f.icon />
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                    <div className="feature-link">
                      <ArrowRight size={16} aria-hidden="true" />
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="section process-section"
        aria-labelledby="process-title"
      >
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 id="process-title" className="section-title">
                {t("process.title")}
              </h2>
              <p className="section-subtitle">{t("process.subtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="process-grid" role="list">
            {PROCESS_STEPS.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="process-card process-card-enhanced" role="listitem">
                  <div className="process-card-inner">
                    <div className="process-number" aria-hidden="true">
                      {s.num}
                    </div>
                    <div className="process-icon" aria-hidden="true">
                      <s.icon />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ROI CALCULATOR */}
      <section
        className="section roi-calculator-section"
        aria-labelledby="roi-calculator-title"
      >
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 id="roi-calculator-title" className="section-title">
                {t("roiCalculator.title")}
              </h2>
              <p className="section-subtitle">{t("roiCalculator.subtitle")}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ROICalculator language={language} t={t} navigate={navigate} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" aria-labelledby="cta-title">
        <div className="container">
          <ScrollReveal type="scale">
            <TiltCard className="cta-card cta-card-enhanced">
              <div className="cta-card-inner">
                <div className="cta-icon-wrapper">
                  <Globe className="cta-icon" aria-hidden="true" />
                </div>
                <h2 id="cta-title">{t("cta.title")}</h2>
                <p>{t("cta.subtitle")}</p>
                <MagneticButton
                  onClick={handleNavigateContact}
                  className="btn btn-primary btn-enhanced interactive"
                  ariaLabel={t("cta.button")}
                >
                  <Calendar size={20} aria-hidden="true" />
                  <span>{t("cta.button")}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </MagneticButton>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
});

HomePage.displayName = "HomePage";

/* =========================================
   ABOUT PAGE
========================================= */
const AboutPage = React.memo(() => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const navigate = useNavigate();
  useScrollAnimations();

  const handleNavigateContact = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  // Meta tags SEO
  const metaTitle = language === "fr"
    ? "À Propos - Workora | Qui sommes-nous"
    : "About - Workora | Who We Are";
  const metaDescription = language === "fr"
    ? "Découvrez Workora et Aghiles CHAOUCHE. Notre mission : digitaliser les interventions terrain pour les techniciens en CVC, plomberie et électricité partout au Canada."
    : "Discover Workora and Aghiles CHAOUCHE. Our mission: digitize field operations for HVAC, plumbing, and electrical technicians across Canada.";

  const VALUES_DATA = React.useMemo(() => [
    { icon: Shield, title: t("about.values.0.title"), desc: t("about.values.0.desc") },
    { icon: Zap, title: t("about.values.1.title"), desc: t("about.values.1.desc") },
    { icon: Lock, title: t("about.values.2.title"), desc: t("about.values.2.desc") },
    { icon: Clock, title: t("about.values.3.title"), desc: t("about.values.3.desc") },
  ], [t]);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://serviceops.fr/about" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://serviceops.fr/about" />
        <html lang={language} />
      </Helmet>
      <section className="section about-section" aria-labelledby="about-title">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h1 id="about-title" className="page-title">
                {t("about.title")}
              </h1>
              <p className="page-subtitle">
                {t("about.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal type="scale">
            <TiltCard className="about-hero">
              <div className="about-avatar" aria-hidden="true">
                <OptimizedImage 
                  src="/pdp.png" 
                  alt="Aghiles CHAOUCHE"
                  className="about-avatar-img"
                />
              </div>
              <h2>Aghiles CHAOUCHE</h2>
              <p className="about-role">{t("about.creator")}</p>
              <a 
                href="https://www.linkedin.com/in/aghiles-chaouche-40537a14b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-linkedin-link interactive"
                aria-label="Visitez mon profil LinkedIn"
              >
                <Linkedin size={24} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <div className="about-intro-content">
                <p className="about-intro">
                  {t("about.intro")}
                </p>
                <p className="about-paragraph">
                  {t("about.paragraph1")}
                </p>
                <p className="about-paragraph">
                  {t("about.paragraph2")}
                </p>
                <p className="about-built-from">
                  {t("about.builtFrom")}
                </p>
                <ul className="about-needs-list">
                  {Array.isArray(t("about.needs")) ? t("about.needs").map((need, idx) => (
                    <li key={idx}>{need}</li>
                  )) : null}
                </ul>
                <p className="about-conclusion">
                  {t("about.conclusion")}
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>

          <div className="about-grid">
            {[
              {
                title: t("about.vision.title"),
                content: t("about.vision.content"),
              },
              {
                title: t("about.mission.title"),
                content: t("about.mission.content"),
              },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <TiltCard className="about-card">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="values-grid" role="list">
            {VALUES_DATA.map((value, idx) => (
              <ScrollReveal key={idx} type="scale" delay={idx * 0.05}>
                <TiltCard className="value-card" role="listitem">
                  <value.icon className="value-icon" aria-hidden="true" />
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <TiltCard className="cta-card cta-card-enhanced about-cta">
              <div className="cta-card-inner">
                <div className="cta-icon-wrapper">
                  <Globe className="cta-icon" aria-hidden="true" />
                </div>
                <h2 id="cta-title">{t("cta.title")}</h2>
                <p>{t("cta.subtitle")}</p>
                <MagneticButton
                  onClick={handleNavigateContact}
                  className="btn btn-primary btn-enhanced interactive"
                  ariaLabel={t("cta.button")}
                >
                  <Calendar size={20} aria-hidden="true" />
                  <span>{t("cta.button")}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </MagneticButton>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
});

AboutPage.displayName = "AboutPage";

/* =========================================
   FLIP CARD COMPONENT
========================================= */
const FlipCard = memo(({ index, problem, solution, problemIcon: ProblemIcon, solutionIcon: SolutionIcon, problemLabel, solutionLabel }) => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFullyFlipped, setIsFullyFlipped] = useState(false);
  const flipTimeoutRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => {
      const newState = !prev;
      
      if (newState) {
        // Masquer le texte pendant l'animation de retournement
        setIsFullyFlipped(false);
        // Afficher le texte un peu avant la fin de l'animation
        if (flipTimeoutRef.current) {
          clearTimeout(flipTimeoutRef.current);
        }
        flipTimeoutRef.current = setTimeout(() => {
          setIsFullyFlipped(true);
        }, 400);
      } else {
        // Réinitialiser quand on retourne en arrière
        setIsFullyFlipped(false);
        if (flipTimeoutRef.current) {
          clearTimeout(flipTimeoutRef.current);
        }
      }
      
      return newState;
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      setIsFlipped(true);
      // Masquer le texte pendant l'animation
      setIsFullyFlipped(false);
      // Afficher le texte un peu avant la fin de l'animation (0.4s au lieu de 0.6s)
      if (flipTimeoutRef.current) {
        clearTimeout(flipTimeoutRef.current);
      }
      flipTimeoutRef.current = setTimeout(() => {
        setIsFullyFlipped(true);
      }, 400);
    }
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setIsFlipped(false);
      // Masquer le texte immédiatement quand on quitte
      setIsFullyFlipped(false);
      if (flipTimeoutRef.current) {
        clearTimeout(flipTimeoutRef.current);
      }
    }
  }, [isMobile]);

  // Nettoyer le timeout au démontage
  useEffect(() => {
    return () => {
      if (flipTimeoutRef.current) {
        clearTimeout(flipTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="why-now-flip-card-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={isMobile ? handleFlip : undefined}
    >
      <div className={`why-now-flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Face avant - Problème */}
        <div className="why-now-flip-face why-now-flip-front">
          <div className="why-now-flip-content">
            <div className="why-now-flip-icon why-now-icon-problem">
              <ProblemIcon size={32} />
            </div>
            <h3 className="why-now-flip-label">{problemLabel}</h3>
            <p className="why-now-flip-text">{problem}</p>
          </div>
        </div>

        {/* Face arrière - Solution */}
        <div className="why-now-flip-face why-now-flip-back">
          <div className={`why-now-flip-content ${isFullyFlipped ? "fully-visible" : ""}`}>
            <div className="why-now-flip-icon why-now-icon-solution">
              <SolutionIcon size={32} />
            </div>
            <h3 className="why-now-flip-label">{solutionLabel}</h3>
            <p className="why-now-flip-text">{solution}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

FlipCard.displayName = "FlipCard";
FlipCard.propTypes = {
  index: PropTypes.number.isRequired,
  problem: PropTypes.string.isRequired,
  solution: PropTypes.string.isRequired,
  problemIcon: PropTypes.elementType.isRequired,
  solutionIcon: PropTypes.elementType.isRequired,
  problemLabel: PropTypes.string.isRequired,
  solutionLabel: PropTypes.string.isRequired,
};

/* =========================================
   WHY NOW PAGE
========================================= */
const WhyNowPage = React.memo(() => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  useScrollAnimations();

  // Meta tags SEO
  const metaTitle = language === "fr"
    ? "Pourquoi maintenant ? - Workora | Les problèmes actuels"
    : "Why Now? - Workora | Current Problems";
  const metaDescription = language === "fr"
    ? "Découvrez pourquoi Workora est la solution dont vous avez besoin maintenant. Les problèmes actuels des entreprises de service technique et comment les résoudre."
    : "Discover why Workora is the solution you need now. Current problems facing technical service companies and how to solve them.";

  const WHY_NOW_DATA = React.useMemo(() => {
    // 12 cartes au total - Organisées par ordre de priorité
    const problemIcons = [
      FileText,        // 1. PRIORITÉ MAX - Bons de travail papier qui se perdent
      Map,             // 2. Impossible de savoir où est chaque technicien
      Phone,           // 3. Clients qui appellent pour demander "il arrive quand ?"
      Package,         // 4. Inventaire impossible à suivre
      FileText,        // 5. Saisie manuelle générant des erreurs
      FileText,        // 6. Techniciens demandent comment faire les procédures
      BarChart3,       // 7. Aucune visibilité sur la performance
      CreditCard,      // 8. Facturation retardée
      Smartphone,      // 9. Mobilité limitée
      DollarSign,      // 10. Solution complète chère chez d'autres services
      Clock,           // 11. Manque d'historique des équipements
      AlertTriangle,   // 12. Difficultés à gérer les urgences
    ];
    const solutionIcons = [
      Database,        // 1. Bon de travail digitalisé et sauvegardé
      MapPin,          // 2. Planification temps réel avec suivi
      MessageSquare,   // 3. Intégration ticketing pour ETA automatiques
      Database,        // 4. Inventaire temps réel avec rapports
      FileText,        // 5. Bon de travail avec calcul automatique
      Layers,          // 6. Procédures intégrées dans le site
      TrendingUp,      // 7. Tableaux de bord et analytiques temps réel
      CreditCard,      // 8. Facturation automatique
      Smartphone,      // 9. Solution mobile-first accessible partout
      DollarSign,      // 10. Workora propose des solutions tarifaires adéquates
      Database,        // 11. Historique complet avec photos et documentation sur la web app
      Zap,             // 12. Gestion des priorités dans le planning intégrée
    ];
    return {
      problems: t("whyNow.problems.items"),
      solutions: t("whyNow.solutions.items"),
      problemIcons,
      solutionIcons,
    };
  }, [t]);

  const handleNavigateContact = useCallback((e) => {
    e.preventDefault();
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://serviceops.fr/why-now" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://serviceops.fr/why-now" />
        <html lang={language} />
      </Helmet>
      <section className="section why-now-page-section" aria-labelledby="why-now-page-title">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h1 id="why-now-page-title" className="page-title">
                {t("whyNow.title")}
              </h1>
              <p className="page-subtitle">
                {t("whyNow.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          {/* Design innovant : Flip Cards optimisées */}
          <div className="why-now-flip-grid">
            {WHY_NOW_DATA.problems.map((problem, i) => {
              const solution = WHY_NOW_DATA.solutions[i];
              const ProblemIcon = WHY_NOW_DATA.problemIcons[i];
              const SolutionIcon = WHY_NOW_DATA.solutionIcons[i];
              return (
                <FlipCard
                  key={i}
                  index={i}
                  problem={problem}
                  solution={solution}
                  problemIcon={ProblemIcon}
                  solutionIcon={SolutionIcon}
                  problemLabel={t("whyNow.problems.title")}
                  solutionLabel={t("whyNow.solutions.title")}
                />
              );
            })}
          </div>

          {/* CTA final */}
          <ScrollReveal type="scale" delay={0.3}>
            <TiltCard className="why-now-cta-card why-now-cta-card-enhanced">
              <div className="why-now-cta-content">
                <h2>{language === "fr" ? "Prêt à transformer votre entreprise ?" : "Ready to transform your business?"}</h2>
                <p>{language === "fr" ? "Ne perdez plus de temps avec la paperasse et les problèmes de suivi." : "Don't waste any more time with paperwork and tracking issues."}</p>
                <MagneticButton
                  onClick={handleNavigateContact}
                  className="btn btn-primary btn-enhanced interactive"
                  ariaLabel={t("cta.button")}
                >
                  <Calendar size={20} aria-hidden="true" />
                  <span>{t("cta.button")}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </MagneticButton>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
});

WhyNowPage.displayName = "WhyNowPage";

/* =========================================
   PRICING PAGE
========================================= */
const PricingPage = React.memo(() => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  useScrollAnimations();

  const pricingContent = React.useMemo(() => {
    if (language === "fr") {
      return {
        metaTitle: "Tarifs - Workora | Plans Essentials, Pro, Enterprise",
        metaDescription:
          "Découvrez les tarifs Workora : Essentials, Pro (recommandé) et Enterprise. Plans pensés pour des équipes terrain HVAC, avec installation et support premium.",
        title: "Tarifs",
        subtitle: "Choisissez le plan qui VOUS correspond.",
        buttonLabel: "Choisir ce plan",
        plans: [
          {
            id: "essentials",
            badge: "Plan Essentials",
            tagline: "Pour petites équipes — jusqu’à 5 techniciens",
            monthly: "249$ / mois",
            yearly: "ou ~2 739$/an (1 mois gratuit)",
            setup: "1 500$ frais d’installation",
            includeLabel: "Inclut :",
            inclusions: [
              "Gestion bons de travail + PDF auto",
              "Planification techniciens",
              "Signatures/photos sur mobile",
              "Portail client",
              "Support standard",
            ],
            ideal: "Idéal pour : petites compagnies en croissance",
          },
          {
            id: "pro",
            badge: "Plan Pro (Plan recommandé)",
            tagline: "Pour équipes jusqu'à 10 techniciens",
            monthly: "499$ / mois",
            yearly: "ou ~5 489$/an (1 mois gratuit)",
            setup: "3 000$ frais d’installation",
            includeLabel: "Inclut Essentials + :",
            inclusions: [
              "Gestion inventaire",
              "Alertes automatiques client (SMS/Email)",
              "KPI & rapports avancés",
              "Priorité support",
              "Branding complet client (logo + couleurs)",
            ],
            ideal: "La meilleure valeur — retour sur investissement le plus rapide",
            recommended: true,
          },
          {
            id: "enterprise",
            badge: "Plan Enterprise",
            tagline: "Pour réseaux & grandes entreprises 25+ techniciens",
            monthly: "999$+ / mois",
            yearly: "ou sur devis annuel",
            setup: "6 000$ à 15 000$ setup selon besoins",
            includeLabel: "Inclut Pro + :",
            inclusions: [
              "Domaine personnalisé client",
              "Application marque blanche",
              "Connecteurs ERP / API ouverte",
              "Formation équipe + onboarding avancé",
              "Sécurité & conformité niveau entreprise",
            ],
            ideal: "Le système le plus sur mesure pour les grandes entreprises",
          },
        ],
      };
    }

    return {
      metaTitle: "Pricing - Workora | Essentials, Pro & Enterprise plans",
      metaDescription:
        "See Workora pricing: Essentials, Pro (recommended) and Enterprise. Built for HVAC field teams with premium onboarding and support.",
      title: "Pricing",
      subtitle: "Choose the plan that fits YOU.",
      buttonLabel: "Choose this plan",
      plans: [
        {
          id: "essentials",
          badge: "Essentials Plan",
          tagline: "For small teams — up to 5 technicians",
          monthly: "$249 / month",
          yearly: "or ~$2,739/year (1 month free)",
          setup: "$1,500 onboarding fee",
          includeLabel: "Includes:",
          inclusions: [
            "Digital work orders + automatic PDFs",
            "Technician scheduling",
            "Signatures/photos on mobile",
            "Client portal",
            "Standard support",
          ],
          ideal: "Ideal for: growing field service SMBs",
        },
        {
          id: "pro",
          badge: "Pro Plan (Recommended)",
            tagline: "For teams up to 10 technicians",
          monthly: "$499 / month",
          yearly: "or ~$5,489/year (1 month free)",
          setup: "$3,000 onboarding fee",
          includeLabel: "Includes Essentials +",
          inclusions: [
            "Inventory management",
            "Automated client alerts (SMS/Email)",
            "Advanced KPIs & reporting",
            "Priority support",
            "Full client branding (logo + colors)",
          ],
          ideal: "Best value — fastest return on investment",
          recommended: true,
        },
        {
          id: "enterprise",
          badge: "Enterprise Plan",
          tagline: "For networks & large organizations with 25+ technicians",
          monthly: "$999+/ month",
          yearly: "or custom annual pricing",
          setup: "$6,000 to $15,000 setup depending on scope",
          includeLabel: "Includes Pro +",
          inclusions: [
            "Custom client domain",
            "White-label mobile app",
            "ERP connectors / open API",
            "Team training + advanced onboarding",
            "Enterprise-grade security & compliance",
          ],
          ideal: "Built-to-measure system for large enterprises",
        },
      ],
    };
  }, [language]);

  const handleNavigateContact = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{pricingContent.metaTitle}</title>
        <meta name="description" content={pricingContent.metaDescription} />
        <link rel="canonical" href="https://serviceops.fr/pricing" />
        <meta property="og:title" content={pricingContent.metaTitle} />
        <meta property="og:description" content={pricingContent.metaDescription} />
        <meta property="og:url" content="https://serviceops.fr/pricing" />
        <html lang={language} />
      </Helmet>

      <section className="section pricing-section" aria-labelledby="pricing-title">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h1 id="pricing-title" className="page-title">
                {pricingContent.title}
              </h1>
              <p className="page-subtitle">{pricingContent.subtitle}</p>
            </div>
          </ScrollReveal>

          <div className="pricing-grid" role="list">
            {pricingContent.plans.map((plan, index) => (
              <ScrollReveal key={plan.id} delay={index * 0.05}>
                <TiltCard
                  className={`pricing-card ${plan.recommended ? "pricing-card-featured" : ""}`}
                  role="listitem"
                >
                  <div className="pricing-card-inner">
                    <div className="pricing-badge">{plan.badge}</div>
                    <p className="pricing-tagline">{plan.tagline}</p>
                    <div className="pricing-value">
                      <span className="pricing-monthly">{plan.monthly}</span>
                      <span className="pricing-yearly">{plan.yearly}</span>
                    </div>
                    <div className="pricing-setup">{plan.setup}</div>
                    <div className="pricing-divider" aria-hidden="true" />
                    <div className="pricing-includes">
                      <span className="pricing-includes-label">{plan.includeLabel}</span>
                      <ul className="pricing-list">
                        {plan.inclusions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="pricing-ideal">{plan.ideal}</p>
                    <MagneticButton
                      onClick={handleNavigateContact}
                      className={`btn btn-primary btn-enhanced interactive pricing-cta ${
                        plan.recommended ? "pricing-cta-featured" : ""
                      }`}
                      ariaLabel={`${pricingContent.buttonLabel} - ${plan.badge}`}
                    >
                      <ArrowRight size={18} aria-hidden="true" />
                      <span>{pricingContent.buttonLabel}</span>
                    </MagneticButton>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {/* ROI Calculator CTA */}
          <ScrollReveal delay={0.2}>
            <div className="pricing-roi-cta">
              <MagneticButton
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    navigate("/");
                    // Attendre que la page se charge puis scroller
                    setTimeout(() => {
                      const scrollToROI = () => {
                        const roiSection = document.querySelector(".roi-calculator-section");
                        if (roiSection) {
                          const offsetTop = roiSection.getBoundingClientRect().top + window.pageYOffset - 100;
                          window.scrollTo({ top: offsetTop, behavior: "smooth" });
                        } else {
                          // Retry si la section n'est pas encore chargée
                          setTimeout(scrollToROI, 200);
                        }
                      };
                      scrollToROI();
                    }, 300);
                  } else {
                    // Si déjà sur la page d'accueil, scroller directement
                    const roiSection = document.querySelector(".roi-calculator-section");
                    if (roiSection) {
                      const offsetTop = roiSection.getBoundingClientRect().top + window.pageYOffset - 100;
                      window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    }
                  }
                }}
                className="btn btn-secondary btn-enhanced interactive pricing-roi-button"
                ariaLabel={language === "fr" ? "Simuler les bénéfices que vous pourriez faire" : "Simulate the benefits you could achieve"}
              >
                <Calculator size={20} aria-hidden="true" />
                <span>{language === "fr" ? "Simuler les bénéfices que vous pourriez faire" : "Simulate the benefits you could achieve"}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
});

PricingPage.displayName = "PricingPage";

/* =========================================
   CONTACT PAGE
========================================= */
const ContactPage = React.memo(() => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  useScrollAnimations();

  // Meta tags SEO
  const metaTitle = language === "fr"
    ? "Contact - Workora | Demandez votre démo gratuite"
    : "Contact - Workora | Request Your Free Demo";
  const metaDescription = language === "fr"
    ? "Contactez Workora pour une démonstration gratuite. Réponse garantie sous 24h. Service canadien pour la digitalisation de vos interventions terrain."
    : "Contact Workora for a free demonstration. 24-hour guaranteed response. Canadian service for digitizing your field operations.";

  // Chargement des données sauvegardées depuis localStorage
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("serviceops_contact_form");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return {
          name: "",
          company: "",
          email: "",
          phone: "",
          sector: "",
          message: "",
          requestDemo: false,
          acceptContact: false,
        };
      }
    }
    return {
      name: "",
      company: "",
      email: "",
      phone: "",
      sector: "",
      message: "",
      requestDemo: false,
      acceptContact: false,
    };
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({}); // Pour le feedback visuel

  const CONTACT_INFO = React.useMemo(() => [
    { icon: Mail, label: t("contact.info.email"), value: "support@workora.ca" },
    { icon: Phone, label: t("contact.info.phone"), value: "+1 (438) 788-9596" },
    { icon: MapPin, label: t("contact.info.location"), value: t("contact.info.locationValue") },
  ], [t]);


  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return EMAIL_REGEX.test(value) ? "" : t("contact.form.validation.emailInvalid");
      case "phone":
        return PHONE_REGEX.test(value) ? "" : t("contact.form.validation.phoneInvalid");
      case "name":
      case "company":
        return value.trim().length >= 2 ? "" : t("contact.form.validation.tooShort");
      default:
        return "";
    }
  };

  // Sauvegarde auto dans localStorage
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem("serviceops_contact_form", JSON.stringify(formData));
    }, 500); // Debounce de 500ms
    return () => clearTimeout(timeoutId);
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validation temps réel améliorée
    if (type !== "checkbox") {
      const error = validateField(name, value);
      setErrors((prev) => {
        if (error) {
          return { ...prev, [name]: error };
        } else {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        }
      });
    }
  }, []);
  
  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (value) {
      const error = validateField(name, value);
      setErrors((prev) => {
        if (error) {
          return { ...prev, [name]: error };
        } else {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        }
      });
    }
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const newErrors = {};
      Object.keys(formData).forEach((key) => {
        if (
          key === "requestDemo" ||
          key === "acceptContact" ||
          key === "message"
        )
          return;
        const err = validateField(key, formData[key]);
        if (err) newErrors[key] = err;
      });

      if (!formData.acceptContact) {
        setStatus({ type: "error", message: t("contact.form.acceptError") });
        return;
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setStatus({ type: "error", message: t("contact.form.error") });
        return;
      }

      setStatus({ type: "loading", message: t("contact.form.sending") });

      try {
        // Préparer les données à envoyer
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("company", formData.company);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("sector", formData.sector);
        formDataToSend.append("message", formData.message || "");
        formDataToSend.append("requestDemo", formData.requestDemo ? "true" : "false");

        // Envoyer les données au script PHP
        // Utiliser le base path de Vite pour le chemin correct
        const baseUrl = import.meta.env.BASE_URL || '';
        const phpUrl = `${baseUrl}send-email.php`.replace(/\/+/g, '/'); // Normaliser les slashes
        const response = await fetch(phpUrl, {
          method: "POST",
          body: formDataToSend,
        });

        // Lire la réponse comme texte d'abord (pour éviter de lire deux fois)
        const responseText = await response.text();
        
        // Détecter si le PHP n'est pas exécuté (le code source est renvoyé)
        if (responseText.trim().startsWith("<?php") || 
            (responseText.includes("<?php") && responseText.includes("Script PHP"))) {
          throw new Error(
            "⚠️ PHP n'est pas activé sur ce serveur.\n\n" +
            "Le serveur renvoie le code PHP brut au lieu de l'exécuter.\n\n" +
            "📥 OPTION 1 - UTILISER APACHE DE XAMPP (Recommandé) :\n" +
            "Si votre projet est dans C:\\xampp\\htdocs\\ServiceOps :\n" +
            "1. Démarrez Apache dans XAMPP Control Panel\n" +
            "2. Double-cliquez sur start-with-apache.bat\n" +
            "3. Accédez à http://localhost/ServiceOps/public/\n\n" +
            "📥 OPTION 2 - SERVEUR PHP INTÉGRÉ :\n" +
            "1. Ajoutez C:\\xampp\\php au PATH Windows\n" +
            "2. Double-cliquez sur start-php-server.bat\n" +
            "3. Accédez à http://localhost:8000\n\n" +
            "🚀 OPTION 3 - TESTER EN PRODUCTION (Plus simple !) :\n" +
            "Déployez votre site sur un serveur avec PHP (OVH, Hostinger, etc.)\n" +
            "Le formulaire fonctionnera automatiquement en production.\n\n" +
            "📖 Guides disponibles :\n" +
            "- GUIDE_APACHE_XAMPP.md (pour Apache/XAMPP)\n" +
            "- INSTALLATION_PHP.md (installation PHP standalone)\n" +
            "- GUIDE_TEST_LOCAL.md (test local avec serveur PHP)"
          );
        }
        
        // Vérifier le content-type
        const contentType = response.headers.get("content-type");
        let result;

        // Essayer de parser comme JSON si c'est du JSON
        if (contentType && contentType.includes("application/json")) {
          try {
            result = JSON.parse(responseText);
          } catch (jsonError) {
            throw new Error(`Réponse JSON invalide du serveur: ${responseText.substring(0, 200)}`);
          }
        } else {
          // Si ce n'est pas du JSON, c'est probablement une erreur (404, HTML, etc.)
          if (!response.ok) {
            throw new Error(
              `Le serveur PHP n'est pas accessible (${response.status}). ` +
              "En développement local, vous devez utiliser un serveur PHP. " +
              "Voir CONFIGURATION_SMTP.md pour plus d'infos."
            );
          }
          throw new Error(`Réponse inattendue du serveur: ${responseText.substring(0, 300)}`);
        }

        if (response.ok && result.success) {
          setStatus({
            type: "success",
            message: t("contact.form.success"),
          });
          
          const emptyData = {
            name: "",
            company: "",
            email: "",
            phone: "",
            sector: "",
            message: "",
            requestDemo: false,
            acceptContact: false,
          };
          setFormData(emptyData);
          setErrors({});
          setTouched({});
          // Supprimer les données sauvegardées après envoi réussi
          localStorage.removeItem("serviceops_contact_form");
        } else {
          // Afficher le message d'erreur du serveur si disponible
          const errorMessage = result.message || result.php_error || "Erreur lors de l'envoi";
          throw new Error(errorMessage);
        }
      } catch (error) {
        console.error("Erreur détaillée:", error);
        console.error("Stack:", error.stack);
        
        // Message d'erreur plus informatif
        let errorMessage = t("contact.form.sendError") || "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.";
        
        // Si c'est une erreur réseau ou 404, donner des instructions
        if (error.message.includes("fetch") || error.message.includes("404") || error.message.includes("PHP n'est pas accessible")) {
          errorMessage = error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        setStatus({
          type: "error",
          message: errorMessage,
        });
      }

      return false;
    },
    [formData, t]
  );

  const handleReset = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      sector: "",
      message: "",
      requestDemo: false,
      acceptContact: false,
    });
    setErrors({});
    setStatus({ type: "", message: "" });
  }, []);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://serviceops.fr/contact" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://serviceops.fr/contact" />
        <html lang={language} />
      </Helmet>
      <section
        className="section contact-section"
        aria-labelledby="contact-title"
      >
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h1 id="contact-title" className="page-title">
                {t("contact.title")}
              </h1>
              <p className="page-subtitle">{t("contact.subtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="contact-grid">
            <ScrollReveal delay={0.1}>
              <TiltCard className="contact-info">
                <h2>{t("contact.info.title")}</h2>
                <p>{t("contact.info.description")}</p>

                <div className="contact-details">
                  {CONTACT_INFO.map((item, idx) => {
                    const isPhone = item.icon === Phone;
                    const isEmail = item.icon === Mail;
                    return (
                      <div key={idx} className="contact-item">
                        <item.icon className="contact-icon" aria-hidden="true" />
                        <div>
                          <h4>{item.label}</h4>
                          {isPhone ? (
                            <a href="tel:+14387889596" className="contact-link-mobile">
                              {item.value}
                            </a>
                          ) : isEmail ? (
                            <a href={`mailto:${item.value}`} className="contact-link-mobile">
                              {item.value}
                            </a>
                          ) : (
                            <p>{item.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Boutons d'action rapide mobile */}
                <div className="contact-actions-mobile">
                  <a
                    href="tel:+14387889596"
                    className="btn btn-call"
                    aria-label={t("hero.talkToUs")}
                  >
                    <Phone size={18} aria-hidden="true" />
                    <span>{language === "fr" ? "Appeler" : "Call"}</span>
                  </a>
                </div>
              </TiltCard>
            </ScrollReveal>

            <ScrollReveal type="scale" delay={0.2}>
              <TiltCard className="contact-form-card">
                <form
                  className="contact-form"
                  noValidate
                  onSubmit={handleSubmit}
                  method="post"
                  action="#"
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{t("contact.form.name")} {t("required")}</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        placeholder={t("contact.form.namePlaceholder")}
                        className={touched.name && errors.name ? "input-error" : touched.name && !errors.name ? "input-valid" : ""}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <span
                          id="name-error"
                          className="field-error"
                          role="alert"
                        >
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">{t("contact.form.company")} {t("required")}</label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        placeholder={t("contact.form.companyPlaceholder")}
                        className={touched.company && errors.company ? "input-error" : touched.company && !errors.company ? "input-valid" : ""}
                        aria-invalid={errors.company ? "true" : "false"}
                        aria-describedby={
                          errors.company ? "company-error" : undefined
                        }
                      />
                      {errors.company && (
                        <span
                          id="company-error"
                          className="field-error"
                          role="alert"
                        >
                          {errors.company}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">{t("contact.form.email")} {t("required")}</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        placeholder={t("contact.form.emailPlaceholder")}
                        autoComplete="email"
                        className={touched.email && errors.email ? "input-error" : touched.email && !errors.email ? "input-valid" : ""}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                      />
                      {errors.email && (
                        <span
                          id="email-error"
                          className="field-error"
                          role="alert"
                        >
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">{t("contact.form.phone")} {t("required")}</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        placeholder={t("contact.form.phonePlaceholder")}
                        autoComplete="tel"
                        className={touched.phone && errors.phone ? "input-error" : touched.phone && !errors.phone ? "input-valid" : ""}
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                      {errors.phone && (
                        <span
                          id="phone-error"
                          className="field-error"
                          role="alert"
                        >
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="sector">{t("contact.form.sector")} {t("required")}</label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t("contact.form.selectIndustry")}</option>
                      <option value="hvac">{t("contact.form.industries.hvac")}</option>
                      <option value="plumbing">{t("contact.form.industries.plumbing")}</option>
                      <option value="electrical">{t("contact.form.industries.electrical")}</option>
                      <option value="multi">{t("contact.form.industries.multi")}</option>
                      <option value="other">{t("contact.form.industries.other")}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t("contact.form.message")}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                  </div>

                  <div className="form-checkboxes">
                    <label className="checkbox-label" htmlFor="requestDemo">
                      <input
                        id="requestDemo"
                        type="checkbox"
                        name="requestDemo"
                        checked={formData.requestDemo}
                        onChange={handleChange}
                      />
                      <span>{t("contact.form.requestDemo")}</span>
                    </label>

                    <label className="checkbox-label" htmlFor="acceptContact">
                      <input
                        id="acceptContact"
                        type="checkbox"
                        name="acceptContact"
                        checked={formData.acceptContact}
                        onChange={handleChange}
                        required
                      />
                      <span>{t("contact.form.acceptContact")} {t("required")}</span>
                    </label>
                  </div>

                  {status.message && (
                    <div
                      className={`form-status ${status.type}`}
                      role="status"
                      aria-live="polite"
                    >
                      {status.message}
                    </div>
                  )}

                  <div className="hero-cta">
                    <MagneticButton
                      type="submit"
                      className="btn btn-primary full interactive"
                      ariaLabel={t("contact.form.sendButton")}
                      disabled={status.type === "loading"}
                    >
                      <Send size={20} aria-hidden="true" />
                      <span>{t("contact.form.sendButton")}</span>
                      <ArrowRight size={18} aria-hidden="true" />
                    </MagneticButton>

                    <MagneticButton
                      type="button"
                      className="btn btn-secondary full interactive"
                      ariaLabel={t("contact.form.resetButton")}
                      onClick={handleReset}
                    >
                      <span>{t("contact.form.resetButton")}</span>
                    </MagneticButton>
                  </div>
                </form>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  );
});

ContactPage.displayName = "ContactPage";

/* =========================================
   FAQ PAGE
========================================= */
const FAQPage = React.memo(() => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  useScrollAnimations();

  // Meta tags SEO
  const metaTitle = language === "fr"
    ? "FAQ - Workora | Questions Fréquemment Posées"
    : "FAQ - Workora | Frequently Asked Questions";
  const metaDescription = language === "fr"
    ? "Trouvez les réponses aux questions fréquemment posées sur Workora : fonctionnement, sécurité, intégrations, tarifs et plus encore."
    : "Find answers to frequently asked questions about Workora: how it works, security, integrations, pricing and more.";

  const FAQ_DATA = React.useMemo(() => [
    {
      question: t("faq.items.0.question"),
      answer: t("faq.items.0.answer"),
    },
    {
      question: t("faq.items.1.question"),
      answer: t("faq.items.1.answer"),
    },
    {
      question: t("faq.items.2.question"),
      answer: t("faq.items.2.answer"),
    },
    {
      question: t("faq.items.3.question"),
      answer: t("faq.items.3.answer"),
    },
    {
      question: t("faq.items.4.question"),
      answer: t("faq.items.4.answer"),
    },
    {
      question: t("faq.items.5.question"),
      answer: t("faq.items.5.answer"),
    },
    {
      question: t("faq.items.6.question"),
      answer: t("faq.items.6.answer"),
    },
    {
      question: t("faq.items.7.question"),
      answer: t("faq.items.7.answer"),
    },
  ], [t]);

  const handleNavigateContact = useCallback((e) => {
    e.preventDefault();
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://serviceops.fr/faq" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://serviceops.fr/faq" />
        <html lang={language} />
      </Helmet>
      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h1 id="faq-title" className="page-title">
                {t("faq.title")}
              </h1>
              <p className="page-subtitle">
                {t("faq.subtitle")}
              </p>
            </div>
          </ScrollReveal>

          <div className="faq-list">
            {FAQ_DATA.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal type="scale" delay={0.3}>
            <TiltCard className="cta-card cta-card-enhanced faq-cta">
              <div className="cta-card-inner">
                <div className="cta-icon-wrapper">
                  <Globe className="cta-icon" aria-hidden="true" />
                </div>
                <h2>{language === "fr" ? "Vous avez d'autres questions ?" : "Have more questions?"}</h2>
                <p>{language === "fr" ? "Contactez-nous et nous vous répondrons dans les plus brefs délais." : "Contact us and we'll get back to you as soon as possible."}</p>
                <MagneticButton
                  onClick={handleNavigateContact}
                  className="btn btn-primary btn-enhanced interactive"
                  ariaLabel={t("contact.form.sendButton")}
                >
                  <Calendar size={20} aria-hidden="true" />
                  <span>{language === "fr" ? "Nous Contacter" : "Contact Us"}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </MagneticButton>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
});

FAQPage.displayName = "FAQPage";

/* =========================================
   404 PAGE
========================================= */
const NotFoundPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const handleGoHome = useCallback((e) => {
    e.preventDefault();
    navigate("/");
  }, [navigate]);

  return (
    <div className="page-wrapper">
      <section className="section not-found-section">
        <div className="container">
          <div className="not-found-content">
            <h1 className="not-found-title">{t("notFound.title")}</h1>
            <h2>{t("notFound.subtitle")}</h2>
            <p>{t("notFound.description")}</p>
            <MagneticButton
              onClick={handleGoHome}
              className="btn btn-primary interactive"
              ariaLabel={t("notFound.button")}
            >
              <span>{t("notFound.button")}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================
   FOOTER
========================================= */
const Footer = memo(() => {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Workora</h3>
            <p>{t("footer.description")}</p>
            <p className="footer-copyright">
              © {year} Workora
              <br />
              {t("footer.copyright")}
            </p>
          </div>

          <div className="footer-col">
            <h4>{t("footer.navigation")}</h4>
            <ul role="list">
              <li>
                <Link to="/">{t("nav.home")}</Link>
              </li>
              <li>
                <Link to="/about">{t("nav.about")}</Link>
              </li>
              <li>
                <Link to="/why-now">{t("nav.whyNow")}</Link>
              </li>
              <li>
                <Link to="/pricing">{t("nav.pricing")}</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t("footer.contactTitle")}</h4>
            <p>
              {t("footer.email")}:{" "}
              <a href="mailto:support@workora.ca">support@workora.ca</a>
              <br />
              {t("footer.phone")}: <a href="tel:+14387889596">+1 (438) 788-9596</a>
              <br />
              {t("footer.hosting")}
            </p>
            {/* Boutons d'action mobile dans footer */}
            <div className="footer-contact-actions">
              <a
                href="tel:+14387889596"
                className="footer-action-btn footer-call"
                aria-label={language === "fr" ? "Appeler" : "Call"}
              >
                <Phone size={16} aria-hidden="true" />
                <span>{language === "fr" ? "Appeler" : "Call"}</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t("footer.compliance")}</h4>
            <div className="footer-badges">
              <div className="footer-badge">
                <Shield size={16} aria-hidden="true" />
                <span>{t("footer.badges.privacy")}</span>
              </div>
              <div className="footer-badge">
                <Lock size={16} aria-hidden="true" />
                <span>{t("footer.badges.ssl")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";


/* =========================================
   SHELL
========================================= */
function Shell() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const location = useLocation();

  // Track page views for Analytics
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", import.meta.env.VITE_GA_ID || "", {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <ScrollProgress />
      <ScrollToTopButton />
      <Navigation />
      <PageTransitionContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-now" element={<WhyNowPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransitionContainer>
      <Footer />
    </>
  );
}

/* =========================================
   APP
========================================= */
function AppContent() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <ErrorBoundary t={t}>
      <ThemeProvider>
        <Router>
          <Shell />
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
