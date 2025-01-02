import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://github.com/java-heapler"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joe-heupler/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:joeheupler@berkeley.edu"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Joe Heupler. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 