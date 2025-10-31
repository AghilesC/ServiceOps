import React, { useRef, memo, useMemo } from "react";
import PropTypes from "prop-types";
import {
  useFadeIn,
  useScaleIn,
  useSlideIn,
  useRotateIn,
} from "../hooks/useScrollAnimations";

/**
 * ScrollReveal Component (CORRIGÉ - NO RE-RENDER)
 *
 * Révèle les éléments avec des animations au scroll.
 * Respecte automatiquement `prefers-reduced-motion`.
 */
export const ScrollReveal = memo(
  ({
    children,
    type = "fade",
    delay = 0,
    threshold = 0.85,
    duration = 0.8,
    direction = "up",
    distance = 40,
    className = "",
    disabled = false,
    once = true,
  }) => {
    const ref = useRef(null);

    // 🔥 CRITIQUE : Mémoriser les options pour éviter de recréer l'objet à chaque render
    const animationOptions = useMemo(
      () => ({
        delay,
        threshold,
        duration,
        direction,
        distance,
        once,
      }),
      [delay, threshold, duration, direction, distance, once]
    );

    // Si désactivé, retourne juste les enfants sans animation
    if (disabled) {
      return <div className={className}>{children}</div>;
    }

    // Sélectionne le bon hook selon le type d'animation
    switch (type) {
      case "scale":
        useScaleIn(ref, animationOptions);
        break;

      case "slide":
        useSlideIn(ref, animationOptions);
        break;

      case "rotate":
        useRotateIn(ref, animationOptions);
        break;

      case "fade":
      default:
        useFadeIn(ref, animationOptions);
        break;
    }

    return (
      <div
        ref={ref}
        className={className}
        data-scroll-reveal={type}
        aria-hidden={false}
      >
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = "ScrollReveal";

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["fade", "scale", "slide", "rotate"]),
  delay: PropTypes.number,
  threshold: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  distance: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  once: PropTypes.bool,
};

ScrollReveal.defaultProps = {
  type: "fade",
  delay: 0,
  threshold: 0.85,
  duration: 0.8,
  direction: "up",
  distance: 40,
  className: "",
  disabled: false,
  once: true,
};

/**
 * ScrollRevealGroup Component (CORRIGÉ)
 */
export const ScrollRevealGroup = memo(
  ({
    children,
    type = "fade",
    stagger = 0.1,
    threshold = 0.85,
    duration = 0.8,
    className = "",
    disabled = false,
  }) => {
    const childrenArray = React.Children.toArray(children);

    return (
      <div className={className}>
        {childrenArray.map((child, index) => (
          <ScrollReveal
            key={index}
            type={type}
            delay={index * stagger}
            threshold={threshold}
            duration={duration}
            disabled={disabled}
          >
            {child}
          </ScrollReveal>
        ))}
      </div>
    );
  }
);

ScrollRevealGroup.displayName = "ScrollRevealGroup";

ScrollRevealGroup.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["fade", "scale", "slide", "rotate"]),
  stagger: PropTypes.number,
  threshold: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

ScrollRevealGroup.defaultProps = {
  type: "fade",
  stagger: 0.1,
  threshold: 0.85,
  duration: 0.8,
  className: "",
  disabled: false,
};
