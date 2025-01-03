import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1>
                <span className="greeting">Hello, I'm</span>
                <span className="name">Joseph Heupler</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="title">Software Engineer</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="description">
                Full-stack developer and UC Berkeley graduate specializing in scalable 
                applications, cloud architecture, and data-driven solutions. 
                Experienced in building robust backend systems and deploying 
                production-ready applications with modern DevOps practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="cta-buttons"
            >
              <a href="#projects" className="primary-btn">View Projects</a>
              <a href="#contact" className="secondary-btn">Get in Touch</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="social-links"
            >
              <a href="https://github.com/java-heapler" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/joseph-heupler/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:jheupler@berkeley.edu">
                <FaEnvelope />
              </a>
            </motion.div>
          </div>

          <div className="header-image">
            <motion.picture>
              <source
                media="(min-width: 1024px)"
                srcSet={`${process.env.PUBLIC_URL}/profile.jpg`}
                sizes="300px"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${process.env.PUBLIC_URL}/profile.jpg`}
                sizes="250px"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${process.env.PUBLIC_URL}/profile.jpg`}
                sizes="200px"
              />
              <motion.img 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                src={`${process.env.PUBLIC_URL}/profile.jpg`} 
                alt="Joseph Heupler" 
                className="profile-image"
                loading="eager"
                width="300"
                height="300"
              />
            </motion.picture>
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
