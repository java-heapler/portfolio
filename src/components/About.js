import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';
import { DarkModeToggle, ReadingProgress, ScrollToTop, InteractiveBackground, LoadingAnimation, CookieConsent, SkillProgressBar } from './Features';

const About = () => {
  const [loading, setLoading] = useState(false);
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

  const getDelayClass = (index) => `delay-${index * 2}`;

  const skillCategories = {
    'Core Technologies': {
      description: 'Advanced proficiency in modern development stack',
      skills: [
        { name: 'Python', icon: 'python.svg' },
        { name: 'Java', icon: 'java.svg' },
        { name: 'JavaScript', icon: 'javascript.svg' },
        { name: 'React', icon: 'react.svg' }
      ]
    },
    'Data & Machine Learning': {
      description: 'Expertise in AI/ML frameworks and data processing',
      skills: [
        { name: 'TensorFlow', icon: 'tensorflow.svg' },
        { name: 'PyTorch', icon: 'pytorch.svg' },
        { name: 'scikit-learn', icon: 'scikitlearn.svg' },
        { name: 'SQL', icon: 'sql.svg' }
      ]
    },
    'Infrastructure & DevOps': {
      description: 'Cloud-native development and deployment expertise',
      skills: [
        { name: 'AWS', icon: 'aws.svg' },
        { name: 'Docker', icon: 'docker.svg' },
        { name: 'Kubernetes', icon: 'kubernetes.svg' },
        { name: 'Git', icon: 'git.svg' }
      ]
    }
  };

  const achievements = [
    {
      metric: "40%",
      description: "Deployment speed improvement through CI/CD optimization"
    },
    {
      metric: "99.9%",
      description: "System uptime maintained for critical applications"
    },
    {
      metric: "50+",
      description: "Successfully completed projects"
    }
  ];

  const skillPercentages = {
    'Python': 90,
    'JavaScript': 85,
    'React': 80,
    'Java': 75,
    'AWS': 70,
    'Docker': 80
  };

  return (
    <div className="about-content" ref={sectionRef}>
      <LoadingAnimation isLoading={loading} />
      <ReadingProgress />
      <DarkModeToggle />
      <InteractiveBackground />
      <ScrollToTop />
      
      <h2 className="fade-in-element">About Me</h2>
      
      <div className="about-text">
        <p className="fade-in-element">
          As a UC Berkeley graduate with a unique background in Data Science and Cognitive Science, 
          I bring a comprehensive approach to solving complex technical challenges. My expertise spans 
          full-stack development, machine learning, and augmented reality, allowing me to architect 
          end-to-end solutions that scale.
        </p>
        
        <div className="achievements-grid fade-in-element">
          {achievements.map((achievement, index) => (
            <div key={index} className={`achievement-card ${getDelayClass(index)}`}>
              <h3>{achievement.metric}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>

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
        {Object.entries(skillCategories).map(([category, { description, skills }], categoryIndex) => (
          <div key={category} className={`expertise-category ${getDelayClass(categoryIndex)}`}>
            <h4>{category}</h4>
            <p className="category-description">{description}</p>
            <div className="skills-list">
              {skills.map((skill, skillIndex) => (
                <div key={skill.name} className={`skill-item ${getDelayClass(skillIndex)}`}>
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

      <div className="skills-progress-section fade-in-element">
        <h3>Skill Proficiency</h3>
        {Object.entries(skillPercentages).map(([skill, percentage]) => (
          <SkillProgressBar 
            key={skill} 
            skill={skill} 
            percentage={percentage} 
          />
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

      <CookieConsent />
    </div>
  );
};

export default About;
