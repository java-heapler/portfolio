import React, { useState, useEffect } from 'react';
import Header from './Header';
import About from './About';
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
    <div id="top">
      <Header />
      <main className="container">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
