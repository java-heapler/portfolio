import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="section skills">
      <Fade bottom>
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo" />
            <span>Python</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java Logo" />
            <span>Java</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C/C++ Logo" />
            <span>C/C++</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" alt="Golang Logo" />
            <span>Golang</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" />
            <span>JavaScript</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL Logo" />
            <span>SQL</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML/CSS Logo" />
            <span>HTML/CSS</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" alt="Spring Boot Logo" />
            <span>Spring Boot</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" alt="Flask Logo" />
            <span>Flask</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
            <span>React</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" alt="Docker Logo" />
            <span>Docker</span>
          </li>
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git Logo" />
            <span>Git</span>
          </li>
        </ul>
      </Fade>
    </section>
  );
}

export default Skills;
