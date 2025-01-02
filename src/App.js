import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CookieConsent from './components/CookieConsent';
import Privacy from './components/Privacy';
import './styles/App.css';
import './styles/theme.css';
import { initGA } from './utils/analytics';

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={
              <main className="container">
                <Header />
                <About />
                <Projects />
                <Contact />
              </main>
            } />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer />
          <ThemeToggle />
          <BackToTop />
          <CookieConsent />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 