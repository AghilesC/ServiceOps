// Counter.jsx — Compteur animé avec Intersection Observer
import React, { useState, useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export const Counter = memo(({ end, duration = 2000, suffix = "" }) => {
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

