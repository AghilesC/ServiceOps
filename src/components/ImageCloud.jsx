// ImageCloud.jsx - Nuage d'images défilantes pour la section hero
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { OptimizedImage } from "./ui/OptimizedImage";

/**
 * Composant ImageCloud - Affiche un nuage d'images qui défile automatiquement
 * @param {Array} images - Tableau d'objets contenant {src: string, alt: string}
 * @param {number} interval - Intervalle entre chaque changement d'image (ms)
 * @param {boolean} autoPlay - Si true, défile automatiquement
 */
export const ImageCloud = ({ 
  images = [], 
  interval = 5000, 
  autoPlay = true 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Images par défaut si aucune n'est fournie
  const defaultImages = [
    { src: "/construction-engineer-using-mobile-smart-260nw-2461230531.webp", alt: "Ingénieur en construction utilisant un smartphone" },
    { src: "/hands-smartphone-construction-site-texting-260nw-2556694065.webp", alt: "Main tenant un smartphone sur un chantier" },
    { src: "/young-african-american-trainee-safety-260nw-2129328296.webp", alt: "Jeune stagiaire en sécurité" },
  ];

  const imageList = images.length > 0 ? images : defaultImages;

  useEffect(() => {
    if (autoPlay && !isHovered && imageList.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isHovered, interval, imageList.length]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  return (
    <div 
      className="image-cloud-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Nuage d'images"
    >
      {/* Images en superposition avec effet nuage */}
      <div className="image-cloud-wrapper">
        {imageList.map((image, index) => {
          const position = (index - currentIndex + imageList.length) % imageList.length;
          const isActive = position === 0;
          const isNext = position === 1;
          const isPrev = position === imageList.length - 1;

          return (
            <div
              key={`${image.src}-${index}`}
              className={`image-cloud-item ${
                isActive ? "active" : isNext ? "next" : isPrev ? "prev" : "hidden"
              }`}
              style={{
                zIndex: isActive ? 10 : isNext ? 5 : isPrev ? 5 : 1,
              }}
              aria-hidden={!isActive}
            >
              <div className="image-cloud-content">
                <OptimizedImage
                  src={image.src}
                  alt={image.alt || `Image ${index + 1}`}
                  className="image-cloud-img"
                  loading="lazy"
                />
                <div className="image-cloud-overlay" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicateurs de navigation */}
      {imageList.length > 1 && (
        <>
          <div className="image-cloud-indicators">
            {imageList.map((_, index) => (
              <button
                key={index}
                className={`image-cloud-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller à l'image ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>

          {/* Boutons de navigation */}
          <button
            className="image-cloud-nav image-cloud-nav-prev"
            onClick={handlePrev}
            aria-label="Image précédente"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="image-cloud-nav image-cloud-nav-next"
            onClick={handleNext}
            aria-label="Image suivante"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

ImageCloud.defaultProps = {
  images: [],
  interval: 5000,
  autoPlay: true,
};

ImageCloud.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
  interval: PropTypes.number,
  autoPlay: PropTypes.bool,
};

