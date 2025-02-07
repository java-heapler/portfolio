import React, { useEffect, Suspense } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Navigation from './Navigation';
import Footer from './Footer';
import '../styles/App.css';
import '../styles/theme.css';
import { initGA } from '../utils/analytics';

function App() {
  useEffect(() => {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        initGA();
      });
    } else {
      setTimeout(() => {
        initGA();
      }, 2000);
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Navigation />
        <Suspense fallback={<div>Loading content...</div>}>
          <main className="container">
            <Header />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ThemeToggle />
          <BackToTop />
          <CookieConsent />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

const Header = React.lazy(() => import('./Header'));
const About = React.lazy(() => import('./About'));
const Projects = React.lazy(() => import('./Projects'));
const Contact = React.lazy(() => import('./Contact'));
const ThemeToggle = React.lazy(() => import('./ThemeToggle'));
const BackToTop = React.lazy(() => import('./BackToTop'));
const CookieConsent = React.lazy(() => import('./CookieConsent'));

export default App;
