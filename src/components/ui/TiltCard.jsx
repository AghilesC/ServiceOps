// TiltCard.jsx — Carte avec effet de tilt au survol
import React, { useRef, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export const TiltCard = memo(({ children, className = "" }) => {
  const cardRef = useRef(null);
  const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
  const prefersReducedMotion = usePrefersReducedMotion();
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    const card = cardRef.current;
    if (!card) return;

    const onMove = (e) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const cx = r.width / 2;
        const cy = r.height / 2;
        const rx = ((y - cy) / cy) * -3;
        const ry = ((x - cx) / cx) * 3;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01,1.01,1.01)`;
      });
    };

    const onLeave = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    };

    card.addEventListener("mousemove", onMove, { passive: true });
    card.addEventListener("mouseleave", onLeave);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
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

