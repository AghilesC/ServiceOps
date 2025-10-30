// useScrollAnimations.js — GSAP + ScrollTrigger + Accessibilité (safe forms)
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

export const useScrollAnimations = () => {
  // Ref pour empêcher double-init en dev (React StrictMode)
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // === LENIS SYNC (avec cleanup) ===
    let offLenis = null;
    if (window.lenis && typeof window.lenis.on === "function") {
      const onLenis = () => ScrollTrigger.update();
      window.lenis.on("scroll", onLenis);
      offLenis = () => window.lenis.off("scroll", onLenis);
    }

    // === Refresh stable sans window 'load' ===
    // rAF + timeout pour laisser le layout se stabiliser
    const refreshOnce = () => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 60);
      });
    };
    refreshOnce();

    // ===============================
    // SECTION PINNÉE (data-pin)
    // ===============================
    let pinTrigger = null;
    if (!prefersReduced) {
      const track = document.querySelector("[data-pin]");
      // On évite de pinner si la section contient des champs de formulaire
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
          // ⚠️ Ne pas déranger l’UI si un champ est focus
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

    // ===============================
    // PARALLAX
    // ===============================
    const parallaxTriggers = [];
    if (!prefersReduced) {
      const parallaxEls = gsap.utils.toArray("[data-parallax]");

      parallaxEls.forEach((el) => {
        // Skip si l’élément (ou ses enfants) contient des champs de formulaire
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
              // ⚠️ Si saisie en cours, ne pas rafraîchir la position
              onUpdate: () => {
                if (isFormElementFocused()) {
                  // fige la valeur courante en “overwriting” sans recalcul
                  gsap.killTweensOf(el);
                }
              },
            },
          }
        );
        parallaxTriggers.push(trig);
      });
    }

    // ===============================
    // CLEANUP
    // ===============================
    return () => {
      // Empêche ré-init en cas d’unmount/mount (HMR/StrictMode)
      startedRef.current = false;

      // Kill tous les ScrollTriggers créés par ce hook
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // Kill tweens potentiels
      gsap.globalTimeline.clear();

      // Detach Lenis listener
      if (typeof offLenis === "function") offLenis();
    };
  }, []);
};

/* =========================
   Hooks utilitaires GSAP
   (inchangés, mais avec kill propre)
========================= */

const useAnimationConfig = (options = {}) => {
  const { delay = 0, threshold = 0.85, duration = 0.8, once = true } = options;
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

export const useFadeIn = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;
    const config = useAnimationConfig(options);
    const { distance = 40 } = options;

    const anim = gsap.fromTo(
      ref.current,
      { opacity: 0, y: config.prefersReduced ? 0 : distance },
      {
        opacity: 1,
        y: 0,
        duration: config.duration,
        delay: config.delay,
        ease: "power2.out",
        paused: true,
      }
    );

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: `top ${Math.floor(config.threshold * 100)}%`,
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
  }, [ref, options]);
};

export const useScaleIn = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;
    const config = useAnimationConfig(options);

    const anim = gsap.fromTo(
      ref.current,
      { opacity: 0, scale: config.prefersReduced ? 1 : 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: config.duration,
        delay: config.delay,
        ease: "back.out(1.2)",
        paused: true,
      }
    );

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: `top ${Math.floor(config.threshold * 100)}%`,
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
  }, [ref, options]);
};

export const useSlideIn = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;
    const config = useAnimationConfig(options);
    const { direction = "up", distance = 60 } = options;

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
        ease: "power3.out",
        paused: true,
      }
    );

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: `top ${Math.floor(config.threshold * 100)}%`,
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
  }, [ref, options]);
};

export const useRotateIn = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return;
    const config = useAnimationConfig(options);

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

    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: `top ${Math.floor(config.threshold * 100)}%`,
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
  }, [ref, options]);
};

export const useStaggerReveal = (containerRef, options = {}) => {
  useEffect(() => {
    if (!containerRef.current) return;
    const config = useAnimationConfig(options);
    const { stagger = 0.1, childSelector = "> *" } = options;

    const children = containerRef.current.querySelectorAll(childSelector);
    if (!children.length) return;

    const anim = gsap.fromTo(
      children,
      { opacity: 0, y: config.prefersReduced ? 0 : 30 },
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
      start: `top ${Math.floor(config.threshold * 100)}%`,
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
  }, [containerRef, options]);
};
