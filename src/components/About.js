import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="section about">
      <Fade bottom>
        <div className="profile-photo">
          <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Joe Heupler" />
        </div>
        <h2>About Me</h2>
        <p>
        👋 Hello there! My name is Joe Heupler, and I recently received my dual degree in computer science and cognitive science from UC Berkeley. My technical career started at Pasadena City College, where I developed my engineering and natural science skills and laid the groundwork for my love of coding and problem-solving.
I have experience with a wide range of libraries and frameworks, including Spring Boot, Flask, React, and more. I am skilled in Python, Java, C, C++, and JavaScript. I love getting down and dirty with code, especially when it comes to constructing RESTful APIs or threading in Python, and coming up with meaningful solutions.
Using Python and R, I developed models to predict educational outcomes for one of my favorite projects. Leading a Java-based community resource management system was another highlight that emphasized how technology can be used to strengthen communities.
I'm searching for my first software engineering full-time position right now. Please get in touch if you're enthusiastic about cutting-edge digital solutions and would want to work together. Together, let's create something incredible! 🚀
        </p>
      </Fade>
    </section>
  );
}

export default About;
