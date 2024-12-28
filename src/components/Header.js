import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <Fade bottom delay={200}>
          <h1>
            <span className="greeting">Hello, I'm</span>
            <span className="name">Your Name</span>
          </h1>
        </Fade>
        
        <Fade bottom delay={400}>
          <h2 className="title">Software Engineer & ML Enthusiast</h2>
        </Fade>
        
        <Fade bottom delay={600}>
          <p className="description">
            I build intelligent solutions using modern technologies,
            specializing in machine learning and full-stack development.
          </p>
        </Fade>

        <Fade bottom delay={800}>
          <div className="cta-buttons">
            <a href="#contact" className="primary-btn">Get in Touch</a>
            <a href="#projects" className="secondary-btn">View Projects</a>
          </div>
        </Fade>

        <Fade bottom delay={1000}>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com">
              <FaEnvelope />
            </a>
          </div>
        </Fade>
      </div>
      
      <div className="header-background">
        <div className="animated-gradient"></div>
      </div>
    </header>
  );
}

export default Header;
