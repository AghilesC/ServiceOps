// useScrollAnimations.js — CORRIGÉ - NO RE-RENDER sur interaction formulaire
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Utilitaire : savoir si un élément contient des champs de formulaire
const containsFormControls = (el) =>
  !!el &&
  el.querySelector &&
  el.querySelector("input, textarea, select, button");

const isFormElementFocused = () => {
  const ae = document.activeElement;
  if (!ae) return false;
  const tag = ae.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
};

// Throttle pour éviter trop de rafraîchissements
let refreshTimeout = null;
const throttledRefresh = () => {
  if (refreshTimeout) return;
  refreshTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
    refreshTimeout = null;
  }, 100);
};

export const useScrollAnimations = () => {
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // === LENIS SYNC ===
    let offLenis = null;
    if (window.lenis && typeof window.lenis.on === "function") {
      const onLenis = () => ScrollTrigger.update();
      window.lenis.on("scroll", onLenis);
      offLenis = () => window.lenis.off("scroll", onLenis);
    }

    // === Refresh stable (optimisé) ===
    const refreshOnce = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });
    };
    refreshOnce();
    
    // Refresh optimisé sur resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        throttledRefresh();
      }, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // === SECTION PINNÉE ===
    let pinTrigger = null;
    if (!prefersReduced) {
      const track = document.querySelector("[data-pin]");
      if (track && !containsFormControls(track)) {
        const steps = gsap.utils.toArray(".pin-step");
        const visuals = gsap.utils.toArray(".pin-visual-item");

        gsap.set(steps, { opacity: 0.35 });
        gsap.set(visuals, { autoAlpha: 0, y: 20, scale: 0.98 });
        if (visuals[0]) gsap.set(visuals[0], { autoAlpha: 1, y: 0, scale: 1 });

        const highlightStep = (activeIdx) => {
          steps.forEach((el, i) => {
            gsap.to(el, {
              opacity: i === activeIdx ? 1 : 0.35,
              duration: 0.2,
              overwrite: "auto",
              ease: "power2.out",
            });
          });
        };

        const swapVisual = (activeIdx) => {
          visuals.forEach((el, i) => {
            gsap.to(el, {
              autoAlpha: i === activeIdx ? 1 : 0,
              y: i === activeIdx ? 0 : 20,
              scale: i === activeIdx ? 1 : 0.98,
              duration: i === activeIdx ? 0.35 : 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          });
        };

        pinTrigger = ScrollTrigger.create({
          trigger: track,
          start: "top top+=80",
          end: window.innerWidth < 768 ? "+=160%" : "+=250%",
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          onUpdate: (self) => {
            if (isFormElementFocused()) return;
            const idx = Math.min(
              Math.max(0, steps.length - 1),
              Math.floor(self.progress * steps.length)
            );
            highlightStep(idx);
            swapVisual(idx);
          },
        });
      }
    }

    // === PARALLAX ===
    const parallaxTriggers = [];
    if (!prefersReduced) {
      const parallaxEls = gsap.utils.toArray("[data-parallax]");

      parallaxEls.forEach((el) => {
        if (containsFormControls(el)) return;

        const speed = parseFloat(el.getAttribute("data-speed") || "0.2");
        const trig = gsap.fromTo(
          el,
          { y: () => (window.innerHeight * speed) / -2 },
          {
            y: () => (window.innerHeight * speed) / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              onUpdate: () => {
                if (isFormElementFocused()) {
                  gsap.killTweensOf(el);
                }
              },
            },
          }
        );
        parallaxTriggers.push(trig);
      });
    }

    // === CLEANUP ===
    return () => {
      startedRef.current = false;
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      if (refreshTimeout) {
        clearTimeout(refreshTimeout);
        refreshTimeout = null;
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.globalTimeline.clear();
      if (typeof offLenis === "function") offLenis();
    };
  }, []); // ✅ Dépendances vides - s'exécute une seule fois
};

/* =========================
   Hooks utilitaires GSAP (CORRIGÉS)
========================= */

const useAnimationConfig = (options = {}) => {
  const { delay = 0, threshold = 0.4, duration = 0.3, once = true } = options;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return {
    delay,
    threshold,
    duration: prefersReduced ? 0 : duration,
    once,
    prefersReduced,
  };
};

// 🔥 CORRECTION : Utiliser un objet JSON stable comme clé de dépendance
const useStableOptions = (options) => {
  const optionsRef = useRef(options);
  const stableKeyRef = useRef(JSON.stringify(options));

  const currentKey = JSON.stringify(options);
  
  if (currentKey !== stableKeyRef.current) {
    optionsRef.current = options;
    stableKeyRef.current = currentKey;
  }

  return optionsRef.current;
};

export const useFadeIn = (ref, options = {}) => {
  const stableOptions = useStableOptions(options);

  useEffect(() => {
    if (!ref.current) return;
    const config = useAnimationConfig(stableOptions);
    const { distance = 20 } = stableOptions;

    // Vérifier si l'élément est déjà visible au chargement
    const checkInitialVisibility = () => {
      if (!ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Vérifier si l'élément est déjà dans la zone visible (85% du viewport)
      return rect.top < windowHeight * 0.85;
    };

    const anim = gsap.fromTo(
      ref.current,
      { opacity: 0, y: config.prefersReduced ? 0 : distance },
      {
        opacity: 1,
        y: 0,
        duration: config.duration,
        delay: config.delay,
        ease: "power3.out", // Plus fluide que power2.out
        paused: true,
      }
    );

    // Fonction pour révéler l'élément s'il est déjà visible
    const revealIfVisible = () => {
      if (checkInitialVisibility() && config.once && anim.progress() < 1) {
        anim.progress(1);
      }
    };

    // Vérifier immédiatement et avec plusieurs délais pour capturer les éléments qui se chargent à différents moments
    revealIfVisible();
    setTimeout(revealIfVisible, 50);
    setTimeout(revealIfVisible, 150);
    setTimeout(revealIfVisible, 300);
    setTimeout(revealIfVisible, 500);
    
    // Fallback : forcer l'affichage après 2 secondes si l'animation ne s'est pas déclenchée
    const fallbackTimeout = setTimeout(() => {
      if (anim.progress() < 0.1 && ref.current) {
        // Si l'animation n'a pas démarré, forcer l'affichage
        anim.progress(1);
      }
    }, 2000);

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: config.once,
      onEnter: () => {
        if (anim.progress() < 1) anim.play();
      },
      onEnterBack: () => {
        if (!config.once && anim.progress() < 1) anim.play();
      },
      onLeaveBack: () => {
        if (!config.once) anim.reverse();
      },
      onRefresh: () => {
        // Vérifier à nouveau après refresh
        revealIfVisible();
      },
    });

    return () => {
      clearTimeout(fallbackTimeout);
      st.kill();
      anim.kill();
    };
  }, [ref, stableOptions]); // ✅ stableOptions ne change que si les valeurs changent vraiment
};

export const useScaleIn = (ref, options = {}) => {
  const stableOptions = useStableOptions(options);

  useEffect(() => {
    if (!ref.current) return;
    const config = useAnimationConfig(stableOptions);

    // Vérifier si l'élément est déjà visible au chargement
    const checkInitialVisibility = () => {
      if (!ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < windowHeight * 0.85;
    };

    const anim = gsap.fromTo(
      ref.current,
      { opacity: 0, scale: config.prefersReduced ? 1 : 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: config.duration,
        delay: config.delay,
        ease: "elastic.out(1, 0.5)", // Plus fluide et dynamique
        paused: true,
      }
    );

    // Fonction pour révéler l'élément s'il est déjà visible
    const revealIfVisible = () => {
      if (checkInitialVisibility() && config.once && anim.progress() < 1) {
        anim.progress(1);
      }
    };

    // Vérifier immédiatement et avec plusieurs délais pour capturer les éléments qui se chargent à différents moments
    revealIfVisible();
    setTimeout(revealIfVisible, 50);
    setTimeout(revealIfVisible, 150);
    setTimeout(revealIfVisible, 300);
    setTimeout(revealIfVisible, 500);
    
    // Fallback : forcer l'affichage après 2 secondes si l'animation ne s'est pas déclenchée
    const fallbackTimeout = setTimeout(() => {
      if (anim.progress() < 0.1 && ref.current) {
        // Si l'animation n'a pas démarré, forcer l'affichage
        anim.progress(1);
      }
    }, 2000);

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: config.once,
      onEnter: () => {
        if (anim.progress() < 1) anim.play();
      },
      onEnterBack: () => {
        if (!config.once && anim.progress() < 1) anim.play();
      },
      onLeaveBack: () => {
        if (!config.once) anim.reverse();
      },
      onRefresh: () => {
        // Vérifier à nouveau après refresh
        revealIfVisible();
      },
    });

    return () => {
      clearTimeout(fallbackTimeout);
      st.kill();
      anim.kill();
    };
  }, [ref, stableOptions]);
};

export const useSlideIn = (ref, options = {}) => {
  const stableOptions = useStableOptions(options);

  useEffect(() => {
    if (!ref.current) return;
    const config = useAnimationConfig(stableOptions);
    const { direction = "up", distance = 30 } = stableOptions;

    // Vérifier si l'élément est déjà visible au chargement
    const checkInitialVisibility = () => {
      if (!ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < windowHeight * 0.85;
    };

    const getTransform = () => {
      if (config.prefersReduced) return { x: 0, y: 0 };
      switch (direction) {
        case "up":
          return { x: 0, y: distance };
        case "down":
          return { x: 0, y: -distance };
        case "left":
          return { x: distance, y: 0 };
        case "right":
          return { x: -distance, y: 0 };
        default:
          return { x: 0, y: distance };
      }
    };

    const t = getTransform();

    const anim = gsap.fromTo(
      ref.current,
      { opacity: 0, x: t.x, y: t.y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: config.duration,
        delay: config.delay,
        ease: "power4.out", // Plus fluide pour les slides
        paused: true,
      }
    );

    // Fonction pour révéler l'élément s'il est déjà visible
    const revealIfVisible = () => {
      if (checkInitialVisibility() && config.once && anim.progress() < 1) {
        anim.progress(1);
      }
    };

    // Vérifier immédiatement et avec plusieurs délais pour capturer les éléments qui se chargent à différents moments
    revealIfVisible();
    setTimeout(revealIfVisible, 50);
    setTimeout(revealIfVisible, 150);
    setTimeout(revealIfVisible, 300);
    setTimeout(revealIfVisible, 500);
    
    // Fallback : forcer l'affichage après 2 secondes si l'animation ne s'est pas déclenchée
    const fallbackTimeout = setTimeout(() => {
      if (anim.progress() < 0.1 && ref.current) {
        // Si l'animation n'a pas démarré, forcer l'affichage
        anim.progress(1);
      }
    }, 2000);

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: config.once,
      onEnter: () => {
        if (anim.progress() < 1) anim.play();
      },
      onEnterBack: () => {
        if (!config.once && anim.progress() < 1) anim.play();
      },
      onLeaveBack: () => {
        if (!config.once) anim.reverse();
      },
      onRefresh: () => {
        // Vérifier à nouveau après refresh
        revealIfVisible();
      },
    });

    return () => {
      clearTimeout(fallbackTimeout);
      st.kill();
      anim.kill();
    };
  }, [ref, stableOptions]);
};

export const useRotateIn = (ref, options = {}) => {
  const stableOptions = useStableOptions(options);

  useEffect(() => {
    if (!ref.current) return;
    const config = useAnimationConfig(stableOptions);

    // Vérifier si l'élément est déjà visible au chargement
    const checkInitialVisibility = () => {
      if (!ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < windowHeight * 0.85;
    };

    const anim = gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        rotationY: config.prefersReduced ? 0 : 90,
        transformPerspective: 1000,
      },
      {
        opacity: 1,
        rotationY: 0,
        duration: config.duration,
        delay: config.delay,
        ease: "power2.out",
        paused: true,
      }
    );

    // Fonction pour révéler l'élément s'il est déjà visible
    const revealIfVisible = () => {
      if (checkInitialVisibility() && config.once && anim.progress() < 1) {
        anim.progress(1);
      }
    };

    // Vérifier immédiatement et avec plusieurs délais pour capturer les éléments qui se chargent à différents moments
    revealIfVisible();
    setTimeout(revealIfVisible, 50);
    setTimeout(revealIfVisible, 150);
    setTimeout(revealIfVisible, 300);
    setTimeout(revealIfVisible, 500);
    
    // Fallback : forcer l'affichage après 2 secondes si l'animation ne s'est pas déclenchée
    const fallbackTimeout = setTimeout(() => {
      if (anim.progress() < 0.1 && ref.current) {
        // Si l'animation n'a pas démarré, forcer l'affichage
        anim.progress(1);
      }
    }, 2000);

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: config.once,
      onEnter: () => {
        if (anim.progress() < 1) anim.play();
      },
      onEnterBack: () => {
        if (!config.once && anim.progress() < 1) anim.play();
      },
      onLeaveBack: () => {
        if (!config.once) anim.reverse();
      },
      onRefresh: () => {
        // Vérifier à nouveau après refresh
        revealIfVisible();
      },
    });

    return () => {
      clearTimeout(fallbackTimeout);
      st.kill();
      anim.kill();
    };
  }, [ref, stableOptions]);
};

export const useStaggerReveal = (containerRef, options = {}) => {
  const stableOptions = useStableOptions(options);

  useEffect(() => {
    if (!containerRef.current) return;
    const config = useAnimationConfig(stableOptions);
    const { stagger = 0.1, childSelector = "> *" } = stableOptions;

    const children = containerRef.current.querySelectorAll(childSelector);
    if (!children.length) return;

    const anim = gsap.fromTo(
      children,
      { opacity: 0, y: config.prefersReduced ? 0 : 15 },
      {
        opacity: 1,
        y: 0,
        duration: config.duration,
        stagger: config.prefersReduced ? 0 : stagger,
        ease: "power2.out",
        paused: true,
      }
    );

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 85%",
      once: config.once,
      onEnter: () => anim.play(),
      onLeaveBack: () => {
        if (!config.once) anim.reverse();
      },
    });

    return () => {
      st.kill();
      anim.kill();
    };
  }, [containerRef, stableOptions]);
};
