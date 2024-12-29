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
        <div className="header-main">
          <div className="header-text">
            <Fade bottom delay={200}>
              <h1>
                <span className="greeting">Hello, I'm</span>
                <span className="name">Joseph Heupler</span>
              </h1>
            </Fade>
            
            <Fade bottom delay={400}>
              <h2 className="title">Software Engineer & ML Enthusiast</h2>
            </Fade>
            
            <Fade bottom delay={600}>
              <p className="description">
                UC Berkeley graduate in Data Science & Cognitive Science, passionate about 
                developing innovative solutions in machine learning and full-stack development. 
                Specialized in Java, Python, and C/C++.
              </p>
            </Fade>

            <Fade bottom delay={800}>
              <div className="cta-buttons">
                <a href="#projects" className="primary-btn">View Projects</a>
                <a href="#contact" className="secondary-btn">Get in Touch</a>
              </div>
            </Fade>

            <Fade bottom delay={1000}>
              <div className="social-links">
                <a href="https://github.com/java-heapler" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/joseph-heupler/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:jheupler@berkeley.edu">
                  <FaEnvelope />
                </a>
              </div>
            </Fade>
          </div>

          <div className="header-image">
            <Fade right delay={600}>
              <img src="/path/to/your/profile-photo.jpg" alt="Joseph Heupler" className="profile-image" />
            </Fade>
          </div>
        </div>
      </div>
      
      <div className="header-background">
        <div className="animated-gradient"></div>
      </div>
    </header>
  );
}

export default Header;
