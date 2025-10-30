import { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SmoothScrollProvider Component
 *
 * Fournit un smooth scroll fluide avec Lenis et synchronise avec GSAP ScrollTrigger.
 * Respecte automatiquement `prefers-reduced-motion` et désactive sur mobile pour la performance.
 *
 * @component
 * @example
 * // Utilisation basique
 * <SmoothScrollProvider>
 *   <App />
 * </SmoothScrollProvider>
 *
 * @example
 * // Avec options personnalisées
 * <SmoothScrollProvider
 *   lerp={0.08}
 *   smoothWheel={true}
 *   wheelMultiplier={1.5}
 * >
 *   <App />
 * </SmoothScrollProvider>
 */
const SmoothScrollProvider = memo(
  ({
    children,
    lerp = 0.1,
    duration = 1.1,
    smoothWheel = true,
    smoothTouch = false,
    wheelMultiplier = 1.0,
    touchMultiplier = 1.0,
    infinite = false,
    orientation = "vertical",
    gestureOrientation = "vertical",
    normalizeWheel = false,
    autoResize = true,
    enabled = true,
  }) => {
    const [isReady, setIsReady] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      // Désactive si préférence motion réduite
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced || !enabled) {
        setIsReady(true);
        return;
      }

      // Désactive sur mobile pour performance (optionnel)
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      if (isMobile && !smoothTouch) {
        setIsReady(true);
        return;
      }

      let lenis = null;
      let rafId = null;

      try {
        // Initialise Lenis
        lenis = new Lenis({
          lerp,
          duration,
          smoothWheel,
          smoothTouch,
          wheelMultiplier,
          touchMultiplier,
          infinite,
          orientation,
          gestureOrientation,
          normalizeWheel,
          autoResize,
        });

        // Expose pour debug et accès global
        if (typeof window !== "undefined") {
          window.lenis = lenis;
        }

        // Boucle RAF pour Lenis
        const raf = (time) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Synchronise Lenis avec ScrollTrigger
        lenis.on("scroll", () => {
          ScrollTrigger.update();
        });

        // ScrollerProxy pour que ScrollTrigger utilise Lenis
        ScrollTrigger.scrollerProxy(document.documentElement, {
          scrollTop(value) {
            if (arguments.length) {
              lenis.scrollTo(value, { immediate: true });
            }
            return lenis.scroll;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: "transform",
        });

        // Rafraîchit ScrollTrigger après chargement complet
        const refreshScrollTrigger = () => {
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        };

        window.addEventListener("load", refreshScrollTrigger, { once: true });

        // Rafraîchit au resize
        const handleResize = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);

        // Pause/Resume selon visibilité de l'onglet
        const handleVisibilityChange = () => {
          if (document.hidden) {
            if (rafId) {
              cancelAnimationFrame(rafId);
              rafId = null;
            }
            lenis.stop();
          } else {
            if (!rafId) {
              rafId = requestAnimationFrame(raf);
            }
            lenis.start();
          }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Indique que Lenis est prêt
        setIsReady(true);

        // Cleanup
        return () => {
          window.removeEventListener("load", refreshScrollTrigger);
          window.removeEventListener("resize", handleResize);
          document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange
          );

          if (rafId) {
            cancelAnimationFrame(rafId);
          }

          if (lenis) {
            lenis.destroy();
          }

          ScrollTrigger.killAll();

          if (typeof window !== "undefined") {
            delete window.lenis;
          }
        };
      } catch (err) {
        console.error("Erreur lors de l'initialisation de Lenis:", err);
        setError(err);
        setIsReady(true); // Continue quand même
      }
    }, [
      lerp,
      duration,
      smoothWheel,
      smoothTouch,
      wheelMultiplier,
      touchMultiplier,
      infinite,
      orientation,
      gestureOrientation,
      normalizeWheel,
      autoResize,
      enabled,
    ]);

    // Affiche une erreur en dev si nécessaire
    if (error && process.env.NODE_ENV === "development") {
      console.warn("SmoothScrollProvider failed to initialize:", error);
    }

    // Optionnel : Affiche un loader pendant l'initialisation
    // if (!isReady) {
    //   return <div className="smooth-scroll-loading">Loading...</div>;
    // }

    return children;
  }
);

SmoothScrollProvider.displayName = "SmoothScrollProvider";

SmoothScrollProvider.propTypes = {
  /** Contenu de l'application */
  children: PropTypes.node.isRequired,

  /** Facteur d'interpolation (0-1). Plus bas = plus fluide mais plus lent */
  lerp: PropTypes.number,

  /** Durée du smooth scroll en secondes */
  duration: PropTypes.number,

  /** Active le smooth scroll pour la molette */
  smoothWheel: PropTypes.bool,

  /** Active le smooth scroll pour le touch (mobile) */
  smoothTouch: PropTypes.bool,

  /** Multiplicateur de vitesse de la molette */
  wheelMultiplier: PropTypes.number,

  /** Multiplicateur de vitesse du touch */
  touchMultiplier: PropTypes.number,

  /** Active le scroll infini */
  infinite: PropTypes.bool,

  /** Orientation du scroll: 'vertical' ou 'horizontal' */
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),

  /** Orientation des gestes */
  gestureOrientation: PropTypes.oneOf(["vertical", "horizontal", "both"]),

  /** Normalise les valeurs de la molette */
  normalizeWheel: PropTypes.bool,

  /** Active le resize automatique */
  autoResize: PropTypes.bool,

  /** Active/désactive le smooth scroll */
  enabled: PropTypes.bool,
};

SmoothScrollProvider.defaultProps = {
  lerp: 0.1,
  duration: 1.1,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1.0,
  touchMultiplier: 1.0,
  infinite: false,
  orientation: "vertical",
  gestureOrientation: "vertical",
  normalizeWheel: false,
  autoResize: true,
  enabled: true,
};

export default SmoothScrollProvider;

/**
 * Hook pour accéder à l'instance Lenis
 * @returns {Lenis|null} Instance de Lenis ou null
 *
 * @example
 * const MyComponent = () => {
 *   const lenis = useLenis();
 *
 *   const scrollToTop = () => {
 *     lenis?.scrollTo(0, { duration: 1.5 });
 *   };
 *
 *   return <button onClick={scrollToTop}>Scroll to top</button>;
 * };
 */
export const useLenis = () => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const checkLenis = () => {
      if (typeof window !== "undefined" && window.lenis) {
        setLenis(window.lenis);
      }
    };

    // Vérifie immédiatement
    checkLenis();

    // Vérifie après un court délai au cas où Lenis n'est pas encore init
    const timeout = setTimeout(checkLenis, 100);

    return () => clearTimeout(timeout);
  }, []);

  return lenis;
};

/**
 * Hook pour scroller vers un élément
 * @returns {Function} Fonction scrollTo
 *
 * @example
 * const MyComponent = () => {
 *   const scrollTo = useScrollTo();
 *
 *   return (
 *     <button onClick={() => scrollTo("#section-2", { offset: -100 })}>
 *       Go to section 2
 *     </button>
 *   );
 * };
 */
export const useScrollTo = () => {
  const lenis = useLenis();

  return (target, options = {}) => {
    if (!lenis) {
      // Fallback vers scroll natif
      if (typeof target === "string") {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", ...options });
        }
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
      }
      return;
    }

    lenis.scrollTo(target, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  };
};

/**
 * Hook pour détecter la direction du scroll
 * @returns {Object} { direction: 'up'|'down'|null, scrollY: number }
 *
 * @example
 * const MyComponent = () => {
 *   const { direction, scrollY } = useScrollDirection();
 *
 *   return (
 *     <nav className={direction === 'down' ? 'hidden' : 'visible'}>
 *       Scroll position: {scrollY}
 *     </nav>
 *   );
 * };
 */
export const useScrollDirection = () => {
  const [direction, setDirection] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    let lastScrollY = 0;

    const handleScroll = (e) => {
      const currentScrollY = e.scroll;
      setScrollY(currentScrollY);

      if (currentScrollY > lastScrollY) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  return { direction, scrollY };
};
