import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/CookieConsent.css';
import PrivacyPolicy from './PrivacyPolicy';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    } else {
      const { analytics } = JSON.parse(consent);
      setAnalyticsEnabled(analytics);
      if (analytics) {
        enableAnalytics();
      }
    }
  }, []);

  const enableAnalytics = () => {
    // Enable GA4
    window['ga-disable-G-P1RC04G662'] = false;
    // Enable IP anonymization
    if (window.gtag) {
      window.gtag('config', 'G-P1RC04G662', {
        'anonymize_ip': true
      });
    }
  };

  const disableAnalytics = () => {
    // Disable GA4
    window['ga-disable-G-P1RC04G662'] = true;
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ 
      essential: true, 
      analytics: true 
    }));
    setAnalyticsEnabled(true);
    enableAnalytics();
    setShowConsent(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ 
      essential: true, 
      analytics: false 
    }));
    setAnalyticsEnabled(false);
    disableAnalytics();
    setShowConsent(false);
  };

  const handleCustomize = () => {
    setShowPrivacyPolicy(true);
  };

  const handleClosePrivacyPolicy = () => {
    setShowPrivacyPolicy(false);
  };

  if (!showConsent && !showPrivacyPolicy) return null;

  return (
    <>
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={handleClosePrivacyPolicy} />
      )}
      {showConsent && (
        <motion.div 
          className="cookie-consent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="cookie-content">
            <p>
              This website uses cookies to enhance your experience and analyze site usage. 
              We use essential cookies for basic functionality and optional analytics cookies to understand how you use our site.
              <button className="link-button" onClick={handleCustomize}>Learn more</button>
            </p>
            <div className="cookie-buttons">
              <button onClick={handleAcceptEssential} className="secondary-button">
                Essential Only
              </button>
              <button onClick={handleAcceptAll} className="primary-button">
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CookieConsent; 