import React from "react";
import "./_home.scss";
import Typical from "react-typical";
import CurveSVG from "../CurveSVG";
import Aboutme from "../About/About";

const Home = () => {
  return (
    <>
      <div className="hero-section px-3">
        <div className="intro">
          <div className="profile-details">
            <div className="social-icons">
              <a href="http://harshitguptahg576.pythonanywhere.com">
                <i className="fa fa-chrome"></i>
              </a>
              <a href="http://www.linkedin.com/in/harshitofficial">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="http://www.instagram.com/royal_boy_harshit">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="http://www.github.com/harshitguptahg576">
                <i className="fa fa-github"></i>
              </a>
            </div>
            <div className="intro-text">I'm Harshit Gupta</div>
            <div className="skills">
              <Typical
                className="skill-name"
                loop={Infinity}
                steps={[
                  "Python Dev",
                  1000,
                  "Full Stack Dev",
                  1000,
                  "Enthuastic Programmer",
                  1000,
                  "Web Developer",
                  1000,
                  "SDE-1 at ValueCoders",
                  1000,
                ]}
              />
            </div>
            <div className="intro-btn">
              <button className="hire-btn m-2">Hire Me</button>
              <a href="Assets/Harshit-Resume.pdf" download>
                <button className="resume-btn m-2">My Resume</button>
              </a>
            </div>
          </div>
        </div>

        <div className="profile-pic">
          <div className="pic">
            <img src="Assets/Images/pic.jpg" alt="Profile Pic" width="100%" />
          </div>
        </div>
      </div>
      <CurveSVG />
    </>
  );
};

export default Home;
