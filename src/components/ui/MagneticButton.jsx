// MagneticButton.jsx — Bouton avec effet magnétique
import React, { useRef, useEffect, useCallback, memo } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export const MagneticButton = memo(
  ({ children, onClick, className = "", type = "button", ariaLabel, disabled = false }) => {
    const btnRef = useRef(null);
    const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
    const prefersReducedMotion = usePrefersReducedMotion();
    const rafRef = useRef(null);

    useEffect(() => {
      if (!isDesktop || prefersReducedMotion) return;

      const btn = btnRef.current;
      if (!btn) return;

      const onMove = (e) => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        
        rafRef.current = requestAnimationFrame(() => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
      };

      const onLeave = () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        btn.style.transform = "translate(0,0)";
      };

      btn.addEventListener("mousemove", onMove, { passive: true });
      btn.addEventListener("mouseleave", onLeave);

      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
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

