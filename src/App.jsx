import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
  Award,
  Lock,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Zap,
  BarChart3,
  Settings,
} from "lucide-react";

/* -------- Helpers: Scroll to top + Page transition key ---------- */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

/* -------- Hook: Intersection Reveal (adds .is-inview) ---------- */
const useScrollReveal = (rootSelector = "main") => {
  const rootRef = useRef(null);
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const root =
      rootRef.current || document.querySelector(rootSelector) || document.body;
    const els = root.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-inview");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootSelector]);

  return rootRef;
};

/* ------------------------- Home -------------------------- */
const HomePage = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/contact");
  };

  // Parallaxe douce du Hero
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    const onMove = (e) => {
      const cX = (e.clientX / window.innerWidth - 0.5) * 2;
      const cY = (e.clientY / window.innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty("--parallax-x", `${cX}`);
      document.documentElement.style.setProperty("--parallax-y", `${cY}`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        {/* gradient orbs */}
        <div className="hero-orb orb-1" aria-hidden="true" />
        <div className="hero-orb orb-2" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="container">
          <div className="hero-content" data-reveal="fade-up">
            <h1 className="hero-title">
              Dites adieu au papier.
              <span className="hero-subtitle">
                Simplifiez vos interventions.
              </span>
            </h1>
            <p className="hero-description">
              Transformez vos bons de travail papier en rapports numériques
              signés et envoyés automatiquement. Une solution complète pour les
              techniciens sur site : CVC, plomberie, électricité.
            </p>
            <div className="hero-buttons" data-reveal="fade-up">
              <button
                onClick={scrollToContact}
                className="btn btn-primary btn-magnetic"
              >
                <span className="btn-ink" />
                <Send className="icon-sm" />
                Demander une démo
              </button>
              <button
                onClick={scrollToContact}
                className="btn btn-secondary btn-ghost"
              >
                <Phone className="icon-sm" />
                Parler à Aghiles
              </button>
            </div>
            <div className="hero-badges" data-reveal="fade-up">
              <div className="badge glass">
                <CheckCircle className="icon-xs" />
                <span>100% RGPD</span>
              </div>
              <div className="badge glass">
                <Shield className="icon-xs" />
                <span>Données sécurisées</span>
              </div>
              <div className="badge glass">
                <Clock className="icon-xs" />
                <span>Disponible 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title" data-reveal="fade-up">
            Comment ça marche
          </h2>
          <p className="section-subtitle" data-reveal="fade-up">
            Un processus simple en 4 étapes pour digitaliser vos interventions
          </p>
          <div className="process-grid">
            <div className="process-step tilt" data-reveal="fade-up">
              <div className="process-number">1</div>
              <FileText className="process-icon" />
              <h3>Remplir</h3>
              <p>
                Le technicien complète le bon de travail numérique sur tablette
                ou smartphone
              </p>
            </div>
            <div className="process-step tilt" data-reveal="fade-up">
              <div className="process-number">2</div>
              <CheckCircle className="process-icon" />
              <h3>Signer</h3>
              <p>
                Signature électronique du client directement sur l'appareil
                mobile
              </p>
            </div>
            <div className="process-step tilt" data-reveal="fade-up">
              <div className="process-number">3</div>
              <Send className="process-icon" />
              <h3>Envoyer</h3>
              <p>
                Envoi automatique du rapport au client et à votre base de
                données
              </p>
            </div>
            <div className="process-step tilt" data-reveal="fade-up">
              <div className="process-number">4</div>
              <TrendingUp className="process-icon" />
              <h3>Facturer</h3>
              <p>Génération automatique des factures et suivi des paiements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" data-reveal="fade-up">
            Fonctionnalités clés
          </h2>
          <p className="section-subtitle" data-reveal="fade-up">
            Tout ce dont vous avez besoin pour gérer vos interventions terrain
          </p>
          <div className="features-grid">
            <div className="feature-card hover-lift" data-reveal="fade-up">
              <div className="feature-icon-wrapper">
                <FileText className="feature-icon" />
              </div>
              <h3>Bons de travail signés</h3>
              <p>
                Créez et faites signer vos bons de travail électroniquement.
                Fini les papiers perdus ou illisibles.
              </p>
            </div>
            <div className="feature-card hover-lift" data-reveal="fade-up">
              <div className="feature-icon-wrapper">
                <Send className="feature-icon" />
              </div>
              <h3>Envoi automatique temps réel</h3>
              <p>
                Recevez vos bons de travail signés en temps réel, dès que le
                technicien a terminé.
              </p>
            </div>
            <div className="feature-card hover-lift" data-reveal="fade-up">
              <div className="feature-icon-wrapper">
                <Database className="feature-icon" />
              </div>
              <h3>Base d'équipements</h3>
              <p>
                Base d'équipements unifiée : historique, numéros de série,
                interventions, photos.
              </p>
            </div>
            <div className="feature-card hover-lift" data-reveal="fade-up">
              <div className="feature-icon-wrapper">
                <Calendar className="feature-icon" />
              </div>
              <h3>Calendrier intelligent</h3>
              <p>
                Planifiez vos techniciens et synchronisez vos opérations en un
                clin d'œil.
              </p>
            </div>
            <div className="feature-card hover-lift" data-reveal="fade-up">
              <div className="feature-icon-wrapper">
                <BarChart3 className="feature-icon" />
              </div>
              <h3>Historique centralisé</h3>
              <p>
                Accédez à l'historique complet de chaque client et équipement en
                quelques clics.
              </p>
            </div>
            <div className="feature-card hover-lift" data-reveal="fade-up">
              <div className="feature-icon-wrapper">
                <Lock className="feature-icon" />
              </div>
              <h3>Sécurité renforcée</h3>
              <p>
                Données chiffrées et sauvegardées automatiquement. Conformité
                RGPD garantie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="section bg-gradient">
        <div className="container">
          <h2 className="section-title text-white" data-reveal="fade-up">
            Les bénéfices pour votre entreprise
          </h2>
          <p className="section-subtitle text-white-80" data-reveal="fade-up">
            Transformez votre façon de travailler et boostez votre productivité
          </p>
          <div className="benefits-grid">
            <div className="benefit-card stat-card" data-reveal="fade-up">
              <Zap className="benefit-icon" />
              <h3>Gain de temps</h3>
              <p>Économisez 2h par jour en moyenne sur l'administratif</p>
              <div className="benefit-stat">+30%</div>
              <span className="benefit-label">de productivité</span>
            </div>
            <div className="benefit-card stat-card" data-reveal="fade-up">
              <Shield className="benefit-icon" />
              <h3>Zéro erreur</h3>
              <p>Éliminez les erreurs de saisie et les oublis</p>
              <div className="benefit-stat">99%</div>
              <span className="benefit-label">de fiabilité</span>
            </div>
            <div className="benefit-card stat-card" data-reveal="fade-up">
              <Database className="benefit-icon" />
              <h3>Traçabilité totale</h3>
              <p>Retrouvez n'importe quelle intervention en 5 secondes</p>
              <div className="benefit-stat">100%</div>
              <span className="benefit-label">traçable</span>
            </div>
            <div className="benefit-card stat-card" data-reveal="fade-up">
              <Users className="benefit-icon" />
              <h3>Visibilité équipe</h3>
              <p>Suivez vos techniciens en temps réel</p>
              <div className="benefit-stat">24/7</div>
              <span className="benefit-label">disponible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + CTA */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" data-reveal="fade-up">
            Ils nous font confiance
          </h2>
          <p className="section-subtitle" data-reveal="fade-up">
            Une solution éprouvée et certifiée pour votre tranquillité d'esprit
          </p>
          <div className="trust-grid">
            <div className="trust-card" data-reveal="fade-up">
              <Award className="trust-icon" />
              <h4>Qualité garantie</h4>
              <p>
                Solution développée selon les standards les plus élevés de
                l'industrie
              </p>
            </div>
            <div className="trust-card" data-reveal="fade-up">
              <Lock className="trust-icon" />
              <h4>RGPD Compliant</h4>
              <p>Protection totale de vos données et celles de vos clients</p>
            </div>
            <div className="trust-card" data-reveal="fade-up">
              <Clock className="trust-icon" />
              <h4>Disponibilité 99.9%</h4>
              <p>Service accessible 24/7 avec une infrastructure redondante</p>
            </div>
            <div className="trust-card" data-reveal="fade-up">
              <Settings className="trust-icon" />
              <h4>Support dédié</h4>
              <p>Accompagnement personnalisé pour votre réussite</p>
            </div>
          </div>
          <div className="cta-section glass" data-reveal="fade-up">
            <h3>Prêt à transformer votre activité ?</h3>
            <p>
              Découvrez comment ServiceOps peut révolutionner votre gestion des
              interventions
            </p>
            <button
              onClick={scrollToContact}
              className="btn btn-primary btn-lg btn-magnetic"
            >
              <span className="btn-ink" />
              <Calendar className="icon-sm" />
              Planifier une démo gratuite
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

/* ------------------------- About -------------------------- */
const AboutPage = () => {
  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h1 className="page-title" data-reveal="fade-up">
            À propos de ServiceOps
          </h1>

          <div className="about-content">
            <div className="about-section" data-reveal="fade-up">
              <h2>Qui suis-je ?</h2>
              <p className="lead">
                Je suis <strong>Aghiles CHAOUCHE</strong>, auto-entrepreneur et
                créateur de ServiceOps.
              </p>
              <p>
                Fort d'une expérience significative dans la digitalisation des
                processus métiers, j'ai constaté que de nombreux techniciens sur
                le terrain perdent un temps précieux avec la paperasse. C'est
                pourquoi j'ai développé ServiceOps : une solution complète pour
                transformer et automatiser la gestion des interventions terrain.
              </p>
              <p className="highlight-box">
                <strong>Note importante :</strong> Ce site m'appartient en tant
                qu'auto-entrepreneur. Je suis personnellement responsable de la
                qualité du service et de la protection de vos données.
              </p>
            </div>

            <div className="about-section" data-reveal="fade-up">
              <h2>Notre Vision</h2>
              <p>
                Digitaliser complètement les opérations terrain pour que les
                techniciens se concentrent sur l'essentiel : servir leurs
                clients avec excellence.
              </p>
            </div>

            <div className="about-section" data-reveal="fade-up">
              <h2>Notre Mission</h2>
              <p>
                Fournir aux entreprises de services techniques (CVC, plomberie,
                électricité) une plateforme simple, fiable et sécurisée pour
                gérer leurs interventions, leurs équipements et leurs clients en
                temps réel.
              </p>
            </div>

            <div className="about-section" data-reveal="fade-up">
              <h2>Nos Valeurs</h2>
              <div className="values-grid">
                <div className="value-card">
                  <Shield className="value-icon" />
                  <h3>Fiabilité</h3>
                  <p>Un système sur lequel vous pouvez compter 24/7</p>
                </div>
                <div className="value-card">
                  <Zap className="value-icon" />
                  <h3>Simplicité</h3>
                  <p>Une interface intuitive que tout le monde peut utiliser</p>
                </div>
                <div className="value-card">
                  <Lock className="value-icon" />
                  <h3>Sécurité</h3>
                  <p>
                    Vos données sont protégées selon les normes les plus
                    strictes
                  </p>
                </div>
                <div className="value-card">
                  <Clock className="value-icon" />
                  <h3>Temps réel</h3>
                  <p>
                    Des informations instantanées pour des décisions éclairées
                  </p>
                </div>
              </div>
            </div>

            <div className="about-section" data-reveal="fade-up">
              <h2>Responsabilités légales</h2>
              <p>
                En tant qu'auto-entrepreneur, je suis personnellement engagé
                dans la réussite de votre projet de digitalisation. ServiceOps
                est une marque déposée appartenant à Aghiles CHAOUCHE,
                auto-entrepreneur immatriculé en France.
              </p>
              <p>
                Je m'engage à respecter l'ensemble de la réglementation en
                vigueur, notamment en matière de protection des données
                personnelles (RGPD) et de sécurité informatique.
              </p>
            </div>

            <div className="cta-section glass" data-reveal="fade-up">
              <h3>Envie d'en savoir plus ?</h3>
              <p>
                Discutons de vos besoins et voyons comment ServiceOps peut vous
                aider
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                <Mail className="icon-sm" />
                Me contacter directement
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ------------------------- Contact -------------------------- */
const ContactPage = () => {
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

  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptContact) {
      setFormStatus({
        type: "error",
        message: "Veuillez accepter d'être contacté pour continuer.",
      });
      return;
    }
    setFormStatus({ type: "loading", message: "Envoi en cours..." });
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message:
          "Merci pour votre message ! Aghiles vous contactera dans les 24 heures.",
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
    }, 1200);
  };

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h1 className="page-title" data-reveal="fade-up">
            Contactez-nous
          </h1>
          <p className="page-subtitle" data-reveal="fade-up">
            Prêt à digitaliser vos interventions ? Parlons de votre projet !
          </p>

          <div className="contact-content">
            <div className="contact-info glass" data-reveal="fade-up">
              <h2>Parlons de votre projet</h2>
              <p>
                Que vous soyez une petite entreprise ou un grand groupe,
                ServiceOps s'adapte à vos besoins. Contactez-moi pour une
                démonstration personnalisée.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>contact@serviceops.fr</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div>
                    <h4>Téléphone</h4>
                    <p>Sur demande après premier contact</p>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div>
                    <h4>Localisation</h4>
                    <p>France - Service disponible partout</p>
                  </div>
                </div>
              </div>

              <div className="trust-section">
                <h3>Pourquoi nous choisir ?</h3>
                <ul className="trust-list">
                  <li>
                    <CheckCircle className="icon-xs" />
                    Réponse sous 24h garantie
                  </li>
                  <li>
                    <CheckCircle className="icon-xs" />
                    Démonstration gratuite et sans engagement
                  </li>
                  <li>
                    <CheckCircle className="icon-xs" />
                    Accompagnement personnalisé
                  </li>
                  <li>
                    <CheckCircle className="icon-xs" />
                    Solution 100% française
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="contact-form-wrapper hover-lift"
              data-reveal="fade-up"
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Entreprise *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Nom de votre société"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email professionnel *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean.dupont@entreprise.fr"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    placeholder="0612345678"
                    className="form-input"
                  />
                  <small className="form-hint">
                    Format : 10 chiffres sans espaces
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="sector">Secteur d'activité *</label>
                  <select
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Sélectionnez votre secteur</option>
                    <option value="cvc">CVC / Climatisation</option>
                    <option value="plomberie">Plomberie</option>
                    <option value="electricite">Électricité</option>
                    <option value="multi">Multi-technique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Décrivez votre besoin ou posez vos questions..."
                    className="form-input"
                  />
                </div>

                <div className="form-checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="requestDemo"
                      checked={formData.requestDemo}
                      onChange={handleChange}
                    />
                    <span>Je souhaite une démonstration gratuite</span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="acceptContact"
                      checked={formData.acceptContact}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      J'accepte d'être contacté par Aghiles CHAOUCHE *
                    </span>
                  </label>
                </div>

                <div className="rgpd-notice">
                  <Lock className="icon-xs" />
                  <p>
                    <strong>Protection de vos données (RGPD)</strong>
                    <br />
                    Vos informations sont stockées de manière sécurisée et
                    utilisées uniquement pour votre demande.
                  </p>
                </div>

                {formStatus.message && (
                  <div className={`form-status ${formStatus.type}`}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-magnetic"
                >
                  <span className="btn-ink" />
                  <Send className="icon-sm" />
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ---------------------- Navigation ---------------------- */
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileMenuOpen(false), [location.pathname]); // close on route

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("nav-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">ServiceOps</span>
          </Link>

          <div className={`navbar-menu ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <Link
              to="/"
              className={`navbar-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/a-propos"
              className={`navbar-link ${
                location.pathname === "/a-propos" ? "active" : ""
              }`}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className={`navbar-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((s) => !s)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

/* ------------------------- Footer -------------------------- */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ServiceOps</h3>
            <p>La solution de digitalisation pour les techniciens sur site.</p>
            <p className="footer-ownership">
              <strong>© {currentYear} Aghiles CHAOUCHE</strong>
              <br />
              Ce site m'appartient - Auto-entrepreneur
            </p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/a-propos">À propos</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Mentions légales</h4>
            <p>
              Propriétaire : Aghiles CHAOUCHE
              <br />
              Statut : Auto-entrepreneur
              <br />
              Email : contact@serviceops.fr
              <br />
              Hébergement : France
            </p>
          </div>

          <div className="footer-section">
            <h4>Conformité</h4>
            <div className="footer-badges">
              <div className="footer-badge">
                <Shield className="icon-xs" />
                <span>RGPD</span>
              </div>
              <div className="footer-badge">
                <Lock className="icon-xs" />
                <span>SSL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Tous droits réservés - ServiceOps est une marque appartenant à
            Aghiles CHAOUCHE
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ------------------------- App -------------------------- */
function App() {
  // SEO meta updates
  useEffect(() => {
    document.title =
      "ServiceOps - Digitalisation des interventions terrain | Aghiles CHAOUCHE";

    const setMeta = (selector, content) => {
      const el = document.querySelector(selector);
      if (el) el.content = content;
    };
    setMeta(
      'meta[name="description"]',
      "ServiceOps par Aghiles CHAOUCHE : Solution complète de digitalisation pour techniciens. Bons de travail numériques, signatures électroniques, envoi automatique."
    );
    setMeta(
      'meta[property="og:title"]',
      "ServiceOps - Digitalisation des interventions terrain"
    );
    setMeta(
      'meta[property="og:description"]',
      "Transformez vos bons de travail papier en rapports numériques signés. Solution pour CVC, plomberie, électricité."
    );
  }, []);

  const location = useLocation();
  const revealRootRef = useScrollReveal(".main-content");

  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Navigation />
        <main className="main-content" ref={revealRootRef}>
          {/* Page Transition wrapper */}
          <div className="page-transition" key={location.pathname}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
