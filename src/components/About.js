import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements that should fade in
    const elements = sectionRef.current.querySelectorAll('.fade-in-element');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-content">
        <h2 className="fade-in-element">About Me</h2>
        
        <div className="profile-photo fade-in-element">
          <img 
            src="/path/to/your-photo.jpg" 
            alt="Your Name - Professional headshot"
            loading="lazy"
            onLoad={(e) => e.target.classList.remove('loading')}
            className="loading"
          />
        </div>

        <div className="about-text">
          <p className="fade-in-element">
            As a software engineer with a unique background in Data Science and Cognitive Science 
            from UC Berkeley, I bring a comprehensive approach to solving complex technical challenges. 
            My expertise spans full-stack development, cloud infrastructure, and data engineering, 
            allowing me to architect end-to-end solutions that scale.
          </p>
          
          <p className="fade-in-element">
            In backend development, I specialize in building high-performance APIs and 
            microservices using Java Spring Boot and Python Flask. My experience with AWS 
            and Docker enables me to implement robust CI/CD pipelines and maintain scalable 
            cloud infrastructure. I'm particularly passionate about optimizing system 
            performance and implementing efficient data processing pipelines.
          </p>

          <p className="fade-in-element">
            On the data science front, I've developed and deployed machine learning models 
            for real-world applications, utilizing technologies like TensorFlow and scikit-learn. 
            I combine this with strong software engineering practices to create maintainable, 
            production-ready code that delivers business value.
          </p>
        </div>

        <div className="key-interests fade-in-element">
          <h3>Key Interests</h3>
          <ul>
            <li>Backend Development & System Architecture</li>
            <li>Cloud Infrastructure & DevOps</li>
            <li>Machine Learning & Data Engineering</li>
            <li>Full-Stack Development</li>
          </ul>
        </div>

        <div className="technical-expertise fade-in-element">
          <h3>Technical Expertise</h3>
          <div className="tech-stack">
            {/* Your tech stack */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
