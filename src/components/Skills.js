import React from 'react';
import Fade from 'react-reveal/Fade';
import { 
  FaPython, FaJava, FaReact, FaNode, FaDatabase,
  FaAws, FaDocker, FaGitAlt
} from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiPytorch, SiCplusplus, SiSpring, SiFlask, SiMongodb } from 'react-icons/si';
import '../styles/Skills.css';

const skillsData = [
  {
    category: "Core Languages",
    items: [
      { name: "Python", icon: <FaPython />, level: 95 },
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "JavaScript", icon: <FaReact />, level: 85 },
      { name: "C/C++", icon: <SiCplusplus />, level: 80 },
    ]
  },
  {
    category: "Technologies & Frameworks",
    items: [
      { name: "Spring Boot", icon: <SiSpring />, level: 85 },
      { name: "React", icon: <FaReact />, level: 85 },
      { name: "TensorFlow", icon: <SiTensorflow />, level: 90 },
      { name: "Flask", icon: <SiFlask />, level: 85 },
    ]
  },
  {
    category: "Infrastructure & Tools",
    items: [
      { name: "AWS", icon: <FaAws />, level: 80 },
      { name: "Docker", icon: <FaDocker />, level: 85 },
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "MongoDB", icon: <SiMongodb />, level: 85 },
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Fade bottom>
        <h2>Skills & Technologies</h2>
        
        <div className="skills-container">
          {skillsData.map((category, idx) => (
            <Fade bottom delay={idx * 200} key={idx}>
              <div className="skill-category">
                <h3>{category.category}</h3>
                <div className="skills-grid">
                  {category.items.map((skill, index) => (
                    <div className="skill-item" key={index}>
                      <div className="skill-icon">{skill.icon}</div>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Fade>
    </section>
  );
}

export default Skills;
