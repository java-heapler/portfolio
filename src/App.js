import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Privacy from './components/Privacy';
import './styles/App.css';
import './styles/theme.css';
import './styles/animations.css';
import { initGA } from './utils/analytics';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ErrorBoundary from './components/ErrorBoundary';
const Header = lazy(() => import('./components/Header'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ThemeToggle = lazy(() => import('./components/ThemeToggle'));
const BackToTop = lazy(() => import('./components/BackToTop'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ErrorBoundary>
          <div className="app">
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </div>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
}

export default App; 