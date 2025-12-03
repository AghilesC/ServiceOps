// OptimizedImage.jsx — Composant image avec lazy loading
import React, { useState, useCallback, memo } from "react";
import PropTypes from "prop-types";

export const OptimizedImage = memo(({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  decoding = "async",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(false);
  }, []);

  return (
    <div className={`image-wrapper ${className}`} style={{ width, height }}>
      {!isLoaded && !hasError && (
        <div className="image-skeleton" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
        {...props}
      />
      {hasError && (
        <div className="image-error" role="img" aria-label={alt}>
          <span>Image non disponible</span>
        </div>
      )}
    </div>
  );
});

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  decoding: PropTypes.oneOf(["async", "sync", "auto"]),
};

OptimizedImage.displayName = "OptimizedImage";

