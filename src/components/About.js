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
                <li>Backend Development & System Architecture</li>
                <li>Cloud Infrastructure & DevOps</li>
                <li>Machine Learning & Data Engineering</li>
                <li>Full-Stack Development</li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
