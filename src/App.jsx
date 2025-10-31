// App.jsx — ServiceOps MULTILINGUE (FR/EN)
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
  Sparkles,
  Layers,
  Globe,
  Smartphone,
  Sun,
  Moon,
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  Languages,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Hooks & components
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import { ScrollReveal } from "./components/ScrollReveal";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { useTranslation } from "./translations/translations";

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
   UTILITIES
========================================= */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const usePrefersReducedMotion = () => {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
};

/* =========================================
   ERROR BOUNDARY
========================================= */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <AlertTriangle size={48} />
            <h1>{this.props.t("error.title")}</h1>
            <p>{this.props.t("error.description")}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              {this.props.t("error.button")}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired,
};

/* =========================================
   THEME CONTEXT
========================================= */
const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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

const useTheme = () => {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

/* =========================================
   SKIP LINK (Accessibilité)
========================================= */
const SkipLink = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <a href="#main-content" className="skip-link">
      {t("nav.skipToContent")}
    </a>
  );
};

/* =========================================
   CUSTOM CURSOR (Desktop seulement)
========================================= */
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let rafId = null;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.2;
      cursorY += dy * 0.2;
      cursor.style.transform = `translate(${cursorX - 20}px, ${
        cursorY - 20
      }px)`;
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, .interactive, input, textarea, select"
      );
      if (target) cursor.classList.add("cursor-hover");
      else cursor.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isDesktop, prefersReducedMotion]);

  if (!isDesktop || prefersReducedMotion) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

/* =========================================
   SCROLL PROGRESS
========================================= */
const ScrollProgress = memo(() => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    >
      <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
});

ScrollProgress.displayName = "ScrollProgress";

/* =========================================
   SCROLL TO TOP
========================================= */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);
  
  return null;
};

/* =========================================
   COUNTER (avec Intersection Observer)
========================================= */
const Counter = memo(({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);

          if (prefersReducedMotion) {
            setCount(end);
            return;
          }

          let current = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration, started, prefersReducedMotion]);

  return (
    <span ref={ref} aria-label={`${end}${suffix}`}>
      {count}
      {suffix}
    </span>
  );
});

Counter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string,
};

Counter.displayName = "Counter";

/* =========================================
   MAGNETIC BUTTON
========================================= */
const MagneticButton = memo(
  ({ children, onClick, className = "", type = "button", ariaLabel, disabled = false }) => {
    const btnRef = useRef(null);
    const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
      if (!isDesktop || prefersReducedMotion) return;

      const btn = btnRef.current;
      if (!btn) return;

      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      };

      const onLeave = () => (btn.style.transform = "translate(0,0)");

      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);

      return () => {
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      };
    }, [isDesktop, prefersReducedMotion]);

    const handleClick = useCallback((e) => {
      if (e.currentTarget.tagName === 'A') {
        e.preventDefault();
      }
      
      if (onClick && !disabled) {
        onClick(e);
      }
    }, [onClick, disabled]);

    return (
      <button
        ref={btnRef}
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={`btn-magnetic ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
);

MagneticButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

MagneticButton.displayName = "MagneticButton";

/* =========================================
   TILT CARD
========================================= */
const TiltCard = memo(({ children, className = "" }) => {
  const cardRef = useRef(null);
  const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    const card = cardRef.current;
    if (!card) return;

    const onMove = (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const cx = r.width / 2;
      const cy = r.height / 2;
      const rx = ((y - cy) / cy) * -5;
      const ry = ((x - cx) / cx) * 5;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
    };

    const onLeave = () =>
      (card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)");

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);

    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, [isDesktop, prefersReducedMotion]);

  return (
    <div ref={cardRef} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
});

TiltCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TiltCard.displayName = "TiltCard";

/* =========================================
   NAVIGATION
========================================= */
const Navigation = memo(() => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation(language);
  const menuRef = useRef(null);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            aria-label="ServiceOps Home"
            onClick={handleLinkClick}
          >
            <div className="brand-icon" aria-hidden="true">
              <Layers />
            </div>
            <span className="brand-text">ServiceOps</span>
          </Link>

          <div className={`navbar-menu ${open ? "open" : ""}`} role="menu">
            <Link
              to="/"
              className={`nav-link interactive ${
                location.pathname === "/" ? "active" : ""
              }`}
              role="menuitem"
              aria-current={location.pathname === "/" ? "page" : undefined}
              onClick={handleLinkClick}
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
   HOME PAGE
========================================= */
const HomePage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  useScrollAnimations();

  const handleNavigateContact = useCallback((e) => {
    e.preventDefault();
    navigate("/contact");
  }, [navigate]);

  // Données dynamiques basées sur la langue
  const FEATURES_DATA = [
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
  ];

  const PROCESS_STEPS = [
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
  ];

  const BENEFITS_DATA = [
    { icon: Zap, value: 30, suffix: "%", label: t("benefits.items.0.label"), color: "blue" },
    { icon: Shield, value: 99, suffix: "%", label: t("benefits.items.1.label"), color: "green" },
    {
      icon: Database,
      value: 100,
      suffix: "%",
      label: t("benefits.items.2.label"),
      color: "purple",
    },
    { icon: Users, value: 24, suffix: "/7", label: t("benefits.items.3.label"), color: "orange" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <ScrollReveal delay={0}>
                <h1 id="hero-title" className="hero-title">
                  {t("hero.title")}{" "}
                  <span className="gradient-text">{t("hero.titleHighlight")}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="hero-description">
                  {t("hero.description")}
                </p>
              </ScrollReveal>

              <ScrollReveal type="scale" delay={0.2}>
                <div className="hero-cta">
                  <MagneticButton
                    onClick={handleNavigateContact}
                    className="btn btn-primary interactive"
                    ariaLabel={t("hero.requestDemo")}
                  >
                    <Send size={20} aria-hidden="true" />
                    <span>{t("hero.requestDemo")}</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </MagneticButton>

                  <MagneticButton
                    onClick={handleNavigateContact}
                    className="btn btn-secondary interactive"
                    ariaLabel={t("hero.talkToUs")}
                  >
                    <Phone size={20} aria-hidden="true" />
                    <span>{t("hero.talkToUs")}</span>
                  </MagneticButton>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="hero-stats" role="list">
                  <div className="stat" role="listitem">
                    <div className="stat-value">
                      <Counter end={100} suffix="%" />
                    </div>
                    <div className="stat-label">{t("hero.stats.privacy")}</div>
                  </div>
                  <div className="stat" role="listitem">
                    <div className="stat-value">
                      <Counter end={24} suffix="/7" />
                    </div>
                    <div className="stat-label">{t("hero.stats.available")}</div>
                  </div>
                  <div className="stat" role="listitem">
                    <div className="stat-value">
                      <Counter end={99} suffix=".9%" />
                    </div>
                    <div className="stat-label">{t("hero.stats.uptime")}</div>
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
                    <Smartphone className="phone-icon" aria-hidden="true" />
                    <div className="phone-glow" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <ChevronDown className="scroll-icon" />
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
                  className={`feature-card color-${f.color}`}
                  role="listitem"
                >
                  <div className="feature-icon" aria-hidden="true">
                    <f.icon />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <div className="feature-glow" aria-hidden="true" />
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
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="process-card" role="listitem">
                  <div className="process-number" aria-hidden="true">
                    {s.num}
                  </div>
                  <div className="process-icon" aria-hidden="true">
                    <s.icon />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        className="section benefits-section"
        aria-labelledby="benefits-title"
      >
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2 id="benefits-title" className="section-title">
                {t("benefits.title")}
              </h2>
              <p className="section-subtitle">{t("benefits.subtitle")}</p>
            </div>
          </ScrollReveal>

          <div className="benefits-grid" role="list">
            {BENEFITS_DATA.map((b, i) => (
              <ScrollReveal key={i} type="scale" delay={i * 0.1}>
                <TiltCard
                  className={`benefit-card gradient-${b.color}`}
                  role="listitem"
                >
                  <b.icon className="benefit-icon" aria-hidden="true" />
                  <div className="benefit-value">
                    <Counter end={b.value} suffix={b.suffix} />
                  </div>
                  <div className="benefit-label">{b.label}</div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" aria-labelledby="cta-title">
        <div className="container">
          <ScrollReveal type="scale">
            <TiltCard className="cta-card">
              <Globe className="cta-icon" aria-hidden="true" />
              <h2 id="cta-title">{t("cta.title")}</h2>
              <p>{t("cta.subtitle")}</p>
              <MagneticButton
                onClick={handleNavigateContact}
                className="btn btn-primary interactive"
                ariaLabel={t("cta.button")}
              >
                <Calendar size={20} aria-hidden="true" />
                <span>{t("cta.button")}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </MagneticButton>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

/* =========================================
   ABOUT PAGE
========================================= */
const AboutPage = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  useScrollAnimations();

  const VALUES_DATA = [
    { icon: Shield, title: t("about.values.0.title"), desc: t("about.values.0.desc") },
    { icon: Zap, title: t("about.values.1.title"), desc: t("about.values.1.desc") },
    { icon: Lock, title: t("about.values.2.title"), desc: t("about.values.2.desc") },
    { icon: Clock, title: t("about.values.3.title"), desc: t("about.values.3.desc") },
  ];

  return (
    <div className="page-wrapper">
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
                <Users size={48} />
              </div>
              <h2>Aghiles CHAOUCHE</h2>
              <p className="about-role">{t("about.creator")}</p>
              <p className="about-intro">
                {t("about.intro")}
              </p>
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
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <TiltCard className="about-card">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="values-grid" role="list">
            {VALUES_DATA.map((value, idx) => (
              <ScrollReveal key={idx} type="scale" delay={idx * 0.1}>
                <TiltCard className="value-card" role="listitem">
                  <value.icon className="value-icon" aria-hidden="true" />
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================
   CONTACT PAGE
========================================= */
const ContactPage = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  useScrollAnimations();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    sector: "",
    message: "",
    requestDemo: false,
    acceptContact: false,
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});

  const CONTACT_INFO = [
    { icon: Mail, label: t("contact.info.email"), value: "chaouche.aghiles@gmail.com" },
    { icon: Phone, label: t("contact.info.phone"), value: "+1 (438) 788-9596" },
    { icon: MapPin, label: t("contact.info.location"), value: t("contact.info.locationValue") },
  ];

  const TRUST_ITEMS = t("contact.trust");

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

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (type !== "checkbox" && value) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
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

      setTimeout(() => {
        setStatus({
          type: "success",
          message: t("contact.form.success"),
        });
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
      }, 1000);

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
                  {CONTACT_INFO.map((item, idx) => (
                    <div key={idx} className="contact-item">
                      <item.icon className="contact-icon" aria-hidden="true" />
                      <div>
                        <h4>{item.label}</h4>
                        <p>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="trust-list" role="list">
                  {TRUST_ITEMS.map((item, idx) => (
                    <div key={idx} className="trust-item" role="listitem">
                      <CheckCircle size={16} aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
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
                        required
                        placeholder={t("contact.form.namePlaceholder")}
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
                        required
                        placeholder={t("contact.form.companyPlaceholder")}
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
                        required
                        placeholder={t("contact.form.emailPlaceholder")}
                        autoComplete="email"
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
                        required
                        placeholder={t("contact.form.phonePlaceholder")}
                        autoComplete="tel"
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
};

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
            <h3>ServiceOps</h3>
            <p>{t("footer.description")}</p>
            <p className="footer-copyright">
              © {year} Aghiles CHAOUCHE
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
                <Link to="/contact">{t("nav.contact")}</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t("footer.contactTitle")}</h4>
            <p>
              {t("footer.email")}:{" "}
              <a href="mailto:chaouche.aghiles@gmail.com">chaouche.aghiles@gmail.com</a>
              <br />
              {t("footer.phone")}: +1 (438) 788-9596
              <br />
              {t("footer.hosting")}
            </p>
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
   PAGE TRANSITION
========================================= */
const PageTransitionContainer = ({ children }) => {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  const variants = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        enter: { opacity: 1 },
        exit: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, y: 20, filter: "blur(2px)" },
        enter: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        },
        exit: {
          opacity: 0,
          y: -10,
          filter: "blur(2px)",
          transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
        },
      };

  return (
    <main id="main-content" className="main-content" role="main">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

PageTransitionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

/* =========================================
   SHELL
========================================= */
function Shell() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <PageTransitionContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
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
