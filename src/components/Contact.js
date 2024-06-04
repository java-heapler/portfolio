import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <Fade bottom>
        <h2>Contact Me</h2>
        <form className="contact-form" action="https://formspree.io/f/mjvnqabv" method="POST">
          <label>
            Your email:
            <input type="email" name="email" required />
          </label>
          <label>
            Your message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </Fade>
    </section>
  );
}

export default Contact;
