import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';
import ReactGA from 'react-ga4';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const trackResumeClick = () => {
    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked Resume',
      label: 'Header Resume Button'
    });
  };

  return (
    <nav 
      className={`navigation ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-container">
        <a 
          href="#top" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('top');
          }}
          aria-label="Back to top"
        >
          JH
        </a>

        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          onKeyPress={(e) => handleKeyPress(e, toggleMenu)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className="menu-icon"></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`} role="menubar">
          {['about', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              role="menuitem"
              tabIndex={0}
              onKeyPress={(e) => handleKeyPress(e, () => scrollToSection(section))}
              aria-label={`Navigate to ${section} section`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a 
            href={`${process.env.PUBLIC_URL}/assets/resume/softwareEngineeringResume.pdf`}
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackResumeClick}
            role="menuitem"
            aria-label="Open Resume PDF in new tab"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 