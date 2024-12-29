import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <Fade bottom>
        <h2>About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              As a software engineer with a unique background in Data Science and Cognitive Science 
              from UC Berkeley, I bring a comprehensive approach to solving complex technical challenges. 
              My expertise spans full-stack development, cloud infrastructure, and data engineering, 
              allowing me to architect end-to-end solutions that scale.
            </p>
            
            <p>
              In backend development, I specialize in building high-performance APIs and 
              microservices using Java Spring Boot and Python Flask. My experience with AWS 
              and Docker enables me to implement robust CI/CD pipelines and maintain scalable 
              cloud infrastructure. I'm particularly passionate about optimizing system 
              performance and implementing efficient data processing pipelines.
            </p>

            <p>
              On the data science front, I've developed and deployed machine learning models 
              for real-world applications, utilizing technologies like TensorFlow and scikit-learn. 
              I combine this with strong software engineering practices to create maintainable, 
              production-ready code that delivers business value.
            </p>

            <div className="key-interests">
              <h3>Technical Focus Areas:</h3>
              <ul>
                <li>Backend Development & API Design</li>
                <li>Cloud Architecture & DevOps</li>
                <li>Data Engineering & Analytics</li>
                <li>Distributed Systems</li>
                <li>Full-Stack Development</li>
                <li>System Optimization</li>
              </ul>
            </div>

            <div className="technical-expertise">
              <h3>Core Technologies:</h3>
              <div className="tech-stack">
                <div className="tech-category">
                  <span className="tech-label">Languages:</span>
                  <span className="tech-items">Java, Python, JavaScript, C/C++</span>
                </div>
                <div className="tech-category">
                  <span className="tech-label">Backend:</span>
                  <span className="tech-items">Spring Boot, Flask, Node.js, RESTful APIs</span>
                </div>
                <div className="tech-category">
                  <span className="tech-label">Frontend:</span>
                  <span className="tech-items">React, HTML5, CSS3, Material-UI</span>
                </div>
                <div className="tech-category">
                  <span className="tech-label">DevOps:</span>
                  <span className="tech-items">AWS, Docker, Git, CI/CD</span>
                </div>
                <div className="tech-category">
                  <span className="tech-label">Data:</span>
                  <span className="tech-items">SQL, MongoDB, Redis, Data Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
