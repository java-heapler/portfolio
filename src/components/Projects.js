import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <Fade bottom>
        <h2>Projects</h2>
        <ul className="projects-list">
          <li>
            <h3>Data Analysis</h3>
            <p>Developed models using Python and R to analyze and predict educational outcomes.</p>
          </li>
          <li>
            <h3>Community Software</h3>
            <p>Led a project to develop a Java-based community resource management system.</p>
          </li>
        </ul>
      </Fade>
    </section>
  );
}

export default Projects;