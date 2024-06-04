import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="section about">
      <Fade bottom>
        <div className="profile-photo">
          <img src="/profile.jpg" alt="Joe Heupler" />
        </div>
        <h2>About Me</h2>
        <p>
          Hello! I'm Joe Heupler, a recent graduate from UC Berkeley with a degree in Computer Science and Cognitive Science. I love merging the realms of human cognition and technology to create innovative solutions. I'm currently seeking my first full-time opportunity in software engineering.
        </p>
      </Fade>
    </section>
  );
}

export default About;
