import React, { useState } from 'react';
import { 
  FaYoutube, 
  FaLinkedin, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaMedium, 
  FaGithub 
} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">STRANGER THINGS</div>

      {/* Main Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="https://einzigartige.in/" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </li>
        <li>
          <a href="https://textplay.einzigartige.in/" target="_blank" rel="noopener noreferrer">
            TextPlay
          </a>
        </li>
        <li>
          <a href="https://speak2unlock.einzigartige.in/" target="_blank" rel="noopener noreferrer">
            VoiceUnlock
          </a>
        </li>
        <li>
          <a href="https://loveme.einzigartige.in/" target="_blank" rel="noopener noreferrer">
            LoveMe
          </a>
        </li>
        <li>
          <a href="https://calculator.einzigartige.in/" target="_blank" rel="noopener noreferrer">
            Calculator
          </a>
        </li>
        <li>
          <a href="https://youtube.einzigartige.in/" target="_blank" rel="noopener noreferrer">
            YoutubeClone
          </a>
        </li>
      </ul>

      {/* Social Media Icons */}
      <ul className={`nav-social ${isOpen ? 'active' : ''}`}>
        <li>
          <a href="https://www.youtube.com/@einzigartige_/" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/einzigartige/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/orgs/Einzigartige/repositories/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/einzigartige.it/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/einzigartige/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/einzigartigetec/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://einzigartige.medium.com/" target="_blank" rel="noopener noreferrer">
            <FaMedium />
          </a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="nav-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
