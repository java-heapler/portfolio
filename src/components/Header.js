import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Joe Heupler Logo" className="logo" />
      <h1>Joe Heupler</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
