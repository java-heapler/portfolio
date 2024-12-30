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

  const skillCategories = {
    'Core Technologies': {
      description: 'Primary technologies I use in production environments',
      skills: [
        { name: 'Python', icon: 'python.svg' },
        { name: 'Java', icon: 'java.svg' },
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'React', icon: 'react.svg' }
      ]
    },
    'Data & Machine Learning': {
      description: 'Technologies I use for data processing and ML applications',
      skills: [
        { name: 'TensorFlow', icon: 'tensorflow.svg' },
        { name: 'PyTorch', icon: 'pytorch.svg' },
        { name: 'scikit-learn', icon: 'scikitlearn.svg' },
        { name: 'SQL', icon: 'sql.svg' }
      ]
    },
    'Infrastructure & DevOps': {
      description: 'Tools I use for deployment and scalability',
      skills: [
        { name: 'AWS', icon: 'aws.svg' },
        { name: 'Docker', icon: 'docker.svg' },
        { name: 'Kubernetes', icon: 'kubernetes.svg' },
        { name: 'Git', icon: 'git.svg' }
      ]
    }
  };

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-content">
        <h2 className="fade-in-element">About Me</h2>
        
        <div className="about-text">
          <p className="fade-in-element">
            As a UC Berkeley graduate with a unique background in Data Science and Cognitive Science, 
            I bring a comprehensive approach to solving complex technical challenges. My expertise spans 
            full-stack development, machine learning, and augmented reality, allowing me to architect 
            end-to-end solutions that scale.
          </p>
          
          <p className="fade-in-element">
            In my recent role at NavAR, I specialized in building indoor navigation systems using 
            cutting-edge AR technologies, while implementing robust CI/CD pipelines that accelerated 
            deployments by 40%. My experience with AWS and containerization enables me to develop 
            and maintain scalable cloud infrastructure, with a particular focus on optimizing 
            system performance.
          </p>

          <p className="fade-in-element">
            On the data science front, I've developed and deployed various machine learning models, 
            from sentiment analysis to neural networks for digit classification. I combine strong 
            software engineering practices with data science expertise to create maintainable, 
            production-ready solutions that deliver real business value.
          </p>
        </div>

        <div className="technical-expertise fade-in-element">
          <h3>Technical Expertise</h3>
          {Object.entries(skillCategories).map(([category, { description, skills }]) => (
            <div key={category} className="expertise-category">
              <h4>{category}</h4>
              <p className="category-description">{description}</p>
              <div className="skills-list">
                {skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <img 
                      src={`${process.env.PUBLIC_URL}/assets/icons/${skill.icon}`}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

        <div className="resume-section fade-in-element">
          <h3>Resume</h3>
          <p>For a detailed overview of my experience and qualifications, please download my resume:</p>
          <a 
            href={`${process.env.PUBLIC_URL}/assets/resume/softwareEngineeringResume.pdf`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-button"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
