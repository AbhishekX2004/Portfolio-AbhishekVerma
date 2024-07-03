import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const resumeURL = "https://drive.google.com/file/d/1eUPE63Txs3QzKhJ2zZFdpdWNr1X3X8g6/view?usp=sharing";

function Header(props) {
  return (
    <nav className="header-nav">
      <Link to="/"><img src="AIcon3.png" height="90px" alt="A logo" className="header-logo" /></Link>
      <div className="header-right">
        <HashLink smooth to='/#aboutMe' className="flat-button" style={{marginRight:0}}>About Me</HashLink>
        <a href={resumeURL} target="_blank" rel="noopener noreferrer" className="flat-button">Resume</a>
        <Link to="/contactMe" className="contact-link">Contact Me</Link>
      </div>
    </nav>
  );
}

export default Header;
