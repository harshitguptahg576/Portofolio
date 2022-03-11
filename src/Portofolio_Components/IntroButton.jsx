import React from "react";

const IntroButton = () => {
  return (
    <div className="intro-btn">
      <button className="hire-btn m-2">Hire Me</button>
      <a href="Assets/Harshit-Resume.pdf" download>
        <button className="resume-btn m-2">My Resume</button>
      </a>
    </div>
  );
};

export default IntroButton;
