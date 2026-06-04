import React from "react";
import "./_home.scss";
import Typical from "react-typical";
import CurveSVG from "../CurveSVG";
import IntroButton from "../IntroButton";
import { profile } from "../../data/portfolioData";

const Home = () => {
  return (
    <>
      <div className="hero-section px-3">
        <div className="intro">
          <div className="profile-details">
            <div className="social-icons">
              <a href={profile.portfolio}>
                <i className="fa fa-chrome"></i>
              </a>
              <a href={profile.linkedin}>
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="http://www.instagram.com/royal_boy_harshit">
                <i className="fa fa-instagram"></i>
              </a>
              <a href={profile.github}>
                <i className="fa fa-github"></i>
              </a>
            </div>
            <div className="intro-text">I'm {profile.name}</div>
            <div className="skills">
              <Typical
                className="skill-name"
                loop={Infinity}
                steps={[
                  profile.title,
                  1000,
                  profile.subtitle,
                  1000,
                  "React & Next.js Developer",
                  1000,
                  "Full Stack @ Vinove",
                  1000,
                  "4.5+ Years Experience",
                  1000,
                ]}
              />
            </div>
            <IntroButton />
          </div>
        </div>

        <div className="profile-pic">
          <div className="pic">
            <img
              src="/Portofolio/Assets/Images/pic.jpg"
              alt="Profile Pic"
              width="100%"
            />
          </div>
        </div>
      </div>
      <CurveSVG />
    </>
  );
};

export default Home;
