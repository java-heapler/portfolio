import React, { useState } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyPress = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`navigation ${isOpen ? 'open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <button 
        className="menu-toggle"
        onClick={toggleMenu}
        onKeyPress={(e) => handleKeyPress(e, toggleMenu)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="menu-icon"></span>
      </button>

      <ul className="nav-links" role="menubar">
        {['about', 'projects', 'contact'].map((section) => (
          <li key={section} role="none">
            <button
              onClick={() => scrollToSection(section)}
              onKeyPress={(e) => handleKeyPress(e, () => scrollToSection(section))}
              role="menuitem"
              tabIndex={0}
              aria-label={`Navigate to ${section} section`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation; 