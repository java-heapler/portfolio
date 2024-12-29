import React, { useState, useEffect } from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of resources
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="container">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
