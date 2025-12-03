// PageTransition.jsx — Container pour transitions de page
import PropTypes from "prop-types";

export const PageTransitionContainer = ({ children }) => {
  return (
    <main id="main-content" className="main-content" role="main">
      {children}
    </main>
  );
};

PageTransitionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

