// src/Header.js
import React from 'react';
import { Linkedin, GitHub } from 'react-feather';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="name-and-social">
          <h1>Santiago Cravino</h1>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/santiago-cravino"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/cravinos"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <GitHub />
            </a>
          </div>
        </div>
        <p>
          Ex-Amazon, Ex-Flexport, Volunteer @ CVS Health & RWJ Barnabas Health
        </p>
      </div>
      <div className="header-actions">
        <a href="#about-me" className="nav-link">
          About Me
        </a>
        {/* <a href="Santiago_Cravino_Resume.pdf" download className="nav-link">
          Download Resume
        </a> */}
      </div>
    </header>
  );
}

export default Header;
