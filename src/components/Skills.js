import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="section skills">
      <Fade bottom>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Python</li>
          <li>Java</li>
          <li>C/C++</li>
          <li>Golang</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>HTML/CSS</li>
          <li>Spring Boot</li>
          <li>Flask</li>
          <li>React</li>
          <li>Docker</li>
          <li>Git</li>
        </ul>
      </Fade>
    </section>
  );
}

export default Skills;
