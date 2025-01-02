import React, { useState, useEffect } from 'react';
import '../styles/Navigation.css';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setIsMenuOpen(false); // Close mobile menu after clicking
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo" onClick={(e) => handleSmoothScroll(e, 'top')}>
          JH
        </a>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
          <a 
            href="/resume.pdf" 
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation; 