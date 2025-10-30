import React, { useRef, memo } from "react";
import PropTypes from "prop-types";
import {
  useFadeIn,
  useScaleIn,
  useSlideIn,
  useRotateIn,
} from "../hooks/useScrollAnimations";

/**
 * ScrollReveal Component
 *
 * Révèle les éléments avec des animations au scroll.
 * Respecte automatiquement `prefers-reduced-motion`.
 *
 * @component
 * @example
 * // Fade-in simple
 * <ScrollReveal>
 *   <Card />
 * </ScrollReveal>
 *
 * @example
 * // Scale-in avec délai
 * <ScrollReveal type="scale" delay={0.2}>
 *   <Card />
 * </ScrollReveal>
 *
 * @example
 * // Slide-in depuis la gauche
 * <ScrollReveal type="slide" direction="left" threshold={0.5}>
 *   <Card />
 * </ScrollReveal>
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

    // Si désactivé, retourne juste les enfants sans animation
    if (disabled) {
      return <div className={className}>{children}</div>;
    }

    // Sélectionne le bon hook selon le type d'animation
    switch (type) {
      case "scale":
        useScaleIn(ref, {
          delay,
          threshold,
          duration,
          once,
        });
        break;

      case "slide":
        useSlideIn(ref, {
          delay,
          threshold,
          duration,
          direction,
          distance,
          once,
        });
        break;

      case "rotate":
        useRotateIn(ref, {
          delay,
          threshold,
          duration,
          once,
        });
        break;

      case "fade":
      default:
        useFadeIn(ref, {
          delay,
          threshold,
          duration,
          distance,
          once,
        });
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
  /** Contenu à animer */
  children: PropTypes.node.isRequired,

  /** Type d'animation: 'fade', 'scale', 'slide', 'rotate' */
  type: PropTypes.oneOf(["fade", "scale", "slide", "rotate"]),

  /** Délai avant l'animation (en secondes) */
  delay: PropTypes.number,

  /** Seuil d'intersection (0-1) pour déclencher l'animation */
  threshold: PropTypes.number,

  /** Durée de l'animation (en secondes) */
  duration: PropTypes.number,

  /** Direction pour les animations 'slide': 'up', 'down', 'left', 'right' */
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),

  /** Distance du mouvement (en pixels) */
  distance: PropTypes.number,

  /** Classes CSS additionnelles */
  className: PropTypes.string,

  /** Désactive complètement l'animation */
  disabled: PropTypes.bool,

  /** L'animation ne se joue qu'une fois (true) ou à chaque scroll (false) */
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
 * ScrollRevealGroup Component
 *
 * Révèle plusieurs éléments avec un délai progressif.
 * Utile pour créer des animations en cascade.
 *
 * @component
 * @example
 * <ScrollRevealGroup stagger={0.1}>
 *   <Card />
 *   <Card />
 *   <Card />
 * </ScrollRevealGroup>
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
  /** Éléments enfants à animer */
  children: PropTypes.node.isRequired,

  /** Type d'animation */
  type: PropTypes.oneOf(["fade", "scale", "slide", "rotate"]),

  /** Délai entre chaque élément (en secondes) */
  stagger: PropTypes.number,

  /** Seuil d'intersection */
  threshold: PropTypes.number,

  /** Durée de l'animation */
  duration: PropTypes.number,

  /** Classes CSS additionnelles */
  className: PropTypes.string,

  /** Désactive les animations */
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
