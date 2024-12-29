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
              As a UC Berkeley graduate with degrees in Data Science and Cognitive Science, 
              I bring a unique perspective to software development that combines technical expertise 
              with an understanding of human behavior and cognition.
            </p>
            
            <p>
              My journey in tech has been driven by a fascination with how data structures, 
              particularly heaps, can optimize real-world applications. This interest has led me 
              to develop numerous projects spanning from machine learning applications to 
              full-stack web solutions.
            </p>

            <p>
              When I'm not coding, I enjoy diving deep into heap memory management and optimization, 
              treating each performance challenge like a puzzle waiting to be solved. I'm particularly 
              passionate about creating scalable solutions that make a meaningful impact.
            </p>

            <div className="key-interests">
              <h3>Key Areas of Interest:</h3>
              <ul>
                <li>Machine Learning & AI Applications</li>
                <li>Data Structure Optimization</li>
                <li>Full-Stack Development</li>
                <li>Memory Management & Performance Tuning</li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
