// App.jsx — ServiceOps (Optimisé + Accessible + Production Ready)
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
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Hooks & components
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import { ScrollReveal } from "./components/ScrollReveal";

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

const FEATURES_DATA = [
  {
    icon: FileText,
    title: "Digital Work Orders",
    desc: "Create and sign work orders electronically. No more lost papers.",
    color: "blue",
  },
  {
    icon: Send,
    title: "Real-Time Delivery",
    desc: "Instant report delivery as soon as technician completes job.",
    color: "green",
  },
  {
    icon: Database,
    title: "Equipment Database",
    desc: "Unified history tracking with photos and serial numbers.",
    color: "purple",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    desc: "Plan and sync your team's operations effortlessly.",
    color: "orange",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Real-time insights and performance tracking.",
    color: "pink",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    desc: "End-to-end encryption and compliance guaranteed.",
    color: "red",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    icon: FileText,
    title: "Fill Out",
    desc: "Complete digital work order on mobile device",
  },
  {
    num: "02",
    icon: CheckCircle,
    title: "Sign",
    desc: "Electronic signature from client",
  },
  {
    num: "03",
    icon: Send,
    title: "Send",
    desc: "Automatic report delivery",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Invoice",
    desc: "Automated billing and tracking",
  },
];

const BENEFITS_DATA = [
  { icon: Zap, value: 30, suffix: "%", label: "Productivity", color: "blue" },
  { icon: Shield, value: 99, suffix: "%", label: "Accuracy", color: "green" },
  {
    icon: Database,
    value: 100,
    suffix: "%",
    label: "Tracked",
    color: "purple",
  },
  { icon: Users, value: 24, suffix: "/7", label: "Available", color: "orange" },
];

const VALUES_DATA = [
  { icon: Shield, title: "Reliability", desc: "24/7 system you can trust" },
  { icon: Zap, title: "Simplicity", desc: "Intuitive for everyone" },
  { icon: Lock, title: "Security", desc: "Data protection first" },
  { icon: Clock, title: "Real-Time", desc: "Instant updates" },
];

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "contact@serviceops.ca" },
  { icon: Phone, label: "Phone", value: "Available on request" },
  { icon: MapPin, label: "Location", value: "Canada - Nationwide" },
];

const TRUST_ITEMS = [
  "24h Response Guaranteed",
  "Free Demonstration",
  "Canadian Service",
  "Dedicated Support",
];

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
            <h1>Oops! Something went wrong</h1>
            <p>We apologize for the inconvenience. Please refresh the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              Refresh Page
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
const SkipLink = () => (
  <a href="#main-content" className="skip-link">
    Skip to main content
  </a>
);

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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  ({ children, onClick, className = "", type = "button", ariaLabel }) => {
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

    return (
      <button
        ref={btnRef}
        type={type}
        onClick={onClick}
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
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link interactive ${
                location.pathname === "/about" ? "active" : ""
              }`}
              role="menuitem"
              aria-current={location.pathname === "/about" ? "page" : undefined}
            >
              About
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
            >
              Contact
            </Link>
          </div>

          <div className="navbar-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle interactive"
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
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
  useScrollAnimations();

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
                <div className="hero-badge">
                  <Sparkles size={16} aria-hidden="true" />
                  <span>Next-Gen Field Management Platform</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 id="hero-title" className="hero-title">
                  Say Goodbye to{" "}
                  <span className="gradient-text">Paperwork</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="hero-description">
                  Transform paper work orders into digital reports with
                  electronic signatures, sent automatically. Complete solution
                  for field technicians: HVAC, plumbing, electrical.
                </p>
              </ScrollReveal>

              <ScrollReveal type="scale" delay={0.3}>
                <div className="hero-cta">
                  <MagneticButton
                    onClick={() => navigate("/contact")}
                    className="btn btn-primary interactive"
                    ariaLabel="Request a demo"
                  >
                    <Send size={20} aria-hidden="true" />
                    <span>Request Demo</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </MagneticButton>

                  <MagneticButton
                    onClick={() => navigate("/contact")}
                    className="btn btn-secondary interactive"
                    ariaLabel="Talk to us"
                  >
                    <Phone size={20} aria-hidden="true" />
                    <span>Talk to Us</span>
                  </MagneticButton>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="hero-stats" role="list">
                  <div className="stat" role="listitem">
                    <div className="stat-value">
                      <Counter end={100} suffix="%" />
                    </div>
                    <div className="stat-label">Privacy Compliant</div>
                  </div>
                  <div className="stat" role="listitem">
                    <div className="stat-value">
                      <Counter end={24} suffix="/7" />
                    </div>
                    <div className="stat-label">Available</div>
                  </div>
                  <div className="stat" role="listitem">
                    <div className="stat-value">
                      <Counter end={99} suffix=".9%" />
                    </div>
                    <div className="stat-label">Uptime</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal type="scale" delay={0.2} className="hero-visual">
              <div
                className="phone-mockup"
                role="img"
                aria-label="Mobile application mockup"
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
                Key Features
              </h2>
              <p className="section-subtitle">
                Everything you need to manage field operations
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
                How It Works
              </h2>
              <p className="section-subtitle">Simple 4-step process</p>
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
                Business Benefits
              </h2>
              <p className="section-subtitle">Transform your operations</p>
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
              <h2 id="cta-title">Ready to Transform Your Business?</h2>
              <p>Join companies revolutionizing their field operations</p>
              <MagneticButton
                onClick={() => navigate("/contact")}
                className="btn btn-primary interactive"
                ariaLabel="Schedule a free demo"
              >
                <Calendar size={20} aria-hidden="true" />
                <span>Schedule Free Demo</span>
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
  useScrollAnimations();

  return (
    <div className="page-wrapper">
      <section className="section about-section" aria-labelledby="about-title">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h1 id="about-title" className="page-title">
                About ServiceOps
              </h1>
              <p className="page-subtitle">
                Building the future of field operations
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal type="scale">
            <TiltCard className="about-hero">
              <div className="about-avatar" aria-hidden="true">
                <Users size={48} />
              </div>
              <h2>Aghiles CHAOUCHE</h2>
              <p className="about-role">ServiceOps Creator</p>
              <p className="about-intro">
                Self-employed entrepreneur passionate about digitizing business
                processes. I created ServiceOps to simplify life for field
                technicians across Canada.
              </p>
            </TiltCard>
          </ScrollReveal>

          <div className="about-grid">
            {[
              {
                title: "Our Vision",
                content:
                  "Fully digitize field operations so technicians can focus on serving clients with excellence.",
              },
              {
                title: "Our Mission",
                content:
                  "Provide technical service companies with a simple, reliable, secure platform for real-time field operations management.",
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
   CONTACT PAGE (anti-refresh)
========================================= */
const ContactPage = () => {
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

  // --- VALIDATION ---
  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return EMAIL_REGEX.test(value) ? "" : "Invalid email format";
      case "phone":
        return PHONE_REGEX.test(value) ? "" : "Invalid phone format";
      case "name":
      case "company":
        return value.trim().length >= 2 ? "" : "Must be at least 2 characters";
      default:
        return "";
    }
  };

  // --- HANDLERS ---
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (type !== "checkbox" && value) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }, []);

  // Empêche Enter de soumettre (sauf textarea)
  const blockEnterSubmit = useCallback((e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
    }
  }, []);

  // Garde-fou: empêche toute navigation via liens # dans la carte
  const stopHashLinkNav = useCallback((e) => {
    const a = e.target.closest("a");
    if (a && a.getAttribute("href") === "#") {
      e.preventDefault();
      e.stopPropagation();
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
        setStatus({ type: "error", message: "Please accept to be contacted." });
        return;
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setStatus({ type: "error", message: "Please fix the errors above." });
        return;
      }

      setStatus({ type: "loading", message: "Sending..." });

      // Simulation d'appel API — remplace par fetch/axios si besoin
      setTimeout(() => {
        setStatus({
          type: "success",
          message: "Thank you! We'll contact you within 24 hours.",
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
    },
    [formData]
  );

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
                Get In Touch
              </h1>
              <p className="page-subtitle">Let's discuss your project</p>
            </div>
          </ScrollReveal>

          <div className="contact-grid">
            <ScrollReveal delay={0.1}>
              <TiltCard className="contact-info">
                <h2>Contact Information</h2>
                <p>Reach out for a personalized demo of ServiceOps.</p>

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
              <TiltCard className="contact-form-card" onClick={stopHashLinkNav}>
                <form
                  className="contact-form"
                  noValidate
                  onSubmit={handleSubmit}
                  onKeyDown={blockEnterSubmit}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
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
                      <label htmlFor="company">Company *</label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company"
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
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.ca"
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
                      <label htmlFor="phone">Phone *</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(514) 123-4567"
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
                    <label htmlFor="sector">Industry *</label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Industry</option>
                      <option value="hvac">HVAC</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="multi">Multi-technical</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your needs..."
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
                      <span>I want a free demonstration</span>
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
                      <span>I accept to be contacted *</span>
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
                      ariaLabel="Send message"
                    >
                      <Send size={20} aria-hidden="true" />
                      <span>Send Message</span>
                      <ArrowRight size={18} aria-hidden="true" />
                    </MagneticButton>

                    {/* Bouton utilitaire: ne doit pas soumettre */}
                    <MagneticButton
                      type="button"
                      className="btn btn-secondary full interactive"
                      ariaLabel="Reset form"
                      onClick={() => {
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
                      }}
                    >
                      <span>Reset</span>
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

  return (
    <div className="page-wrapper">
      <section className="section not-found-section">
        <div className="container">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <MagneticButton
              onClick={() => navigate("/")}
              className="btn btn-primary interactive"
              ariaLabel="Go back to home"
            >
              <span>Back to Home</span>
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

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>ServiceOps</h3>
            <p>Digital solution for field technicians across Canada.</p>
            <p className="footer-copyright">
              © {year} Aghiles CHAOUCHE
              <br />
              Self-Employed - Canada
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul role="list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              Email:{" "}
              <a href="mailto:contact@serviceops.ca">contact@serviceops.ca</a>
              <br />
              Hosting: Canada
            </p>
          </div>

          <div className="footer-col">
            <h4>Compliance</h4>
            <div className="footer-badges">
              <div className="footer-badge">
                <Shield size={16} aria-hidden="true" />
                <span>Privacy</span>
              </div>
              <div className="footer-badge">
                <Lock size={16} aria-hidden="true" />
                <span>SSL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>All rights reserved - ServiceOps by Aghiles CHAOUCHE</p>
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
export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <Shell />
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
