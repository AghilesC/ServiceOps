// FAQItem.jsx — Item de FAQ avec accordéon
import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

export const FAQItem = memo(({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.slice(0, 10)}`}
      >
        <span>{question}</span>
        <ChevronDown className={`faq-icon ${isOpen ? "open" : ""}`} />
      </button>
      <div
        id={`faq-answer-${question.slice(0, 10)}`}
        className={`faq-answer ${isOpen ? "open" : ""}`}
        role="region"
        aria-labelledby={`faq-question-${question.slice(0, 10)}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
});

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

FAQItem.displayName = "FAQItem";

