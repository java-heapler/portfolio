import React, { useEffect } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import BackToTop from './BackToTop';
import '../styles/App.css';
import '../styles/theme.css';
import { initGA } from '../utils/analytics';

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Navigation />
        <main className="container">
          <Header />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ThemeToggle />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
