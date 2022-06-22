import React from "react";
import { NavLink } from "react-router-dom";

const IntroButton = () => {
  return (
    <div className="intro-btn">
      <NavLink to="/contact">
        <button className="hire-btn m-2">Hire Me</button>
      </NavLink>
      <a href="Assets/Harshit Gupta.pdf" download>
        <button className="resume-btn m-2">My Resume</button>
      </a>
    </div>
  );
};

export default IntroButton;
