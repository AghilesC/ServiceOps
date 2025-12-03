// ErrorBoundary.jsx — Boundary de gestion d'erreur
import React from "react";
import PropTypes from "prop-types";
import { AlertTriangle } from "lucide-react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <AlertTriangle size={48} />
            <h1>{this.props.t("error.title")}</h1>
            <p>{this.props.t("error.description")}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              {this.props.t("error.button")}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired,
};

