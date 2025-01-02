import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          © {new Date().getFullYear()} Joe Heupler. All rights reserved.
        </div>
        <div className="footer-right">
          <Link to="#/privacy" className="footer-link">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 