import React from "react";
import Title from "../Title";
import "./About.scss";
import PhotoGallery from "../PhotoGallery";
import IntroButton from "../IntroButton";
import { profile, technicalSkills } from "../../data/portfolioData";

const Aboutme = () => {
  return (
    <div className="about-me my-5">
      <Title title="About Me" subTitle="Why Choose Me?" />

      <div className="about-box container my-5">
        <PhotoGallery />
        <div className="bio">
          <div className="">
            <p className="bio-short">{profile.handle}</p>
            <h1 className="bio-title">
              {profile.title} | {profile.subtitle}
            </h1>
            <p className="bio-desc my-3">{profile.summary}</p>
          </div>
          <div className="highlights">
            <p className="h-title my-4">HighLights 🔽</p>
            <ul>
              <li>
                <span className="bio-highlights">Programming:</span>{" "}
                {technicalSkills.languages}
              </li>
              <li>
                <span className="bio-highlights">Web:</span>{" "}
                {technicalSkills.web}
              </li>
              <li>
                <span className="bio-highlights">Mobile:</span>{" "}
                {technicalSkills.mobile}
              </li>
              <li>
                <span className="bio-highlights">Databases:</span>{" "}
                {technicalSkills.databases}
              </li>
              <li>
                <span className="bio-highlights">Tools:</span>{" "}
                {technicalSkills.tools}
              </li>
              <li>
                My hobbies are Singing, Programming, Writing, and Travelling.
              </li>
              <li>
                My strength is positive attitude, dedication, and self
                confidence.
              </li>
              <li>
                My weakness is I never feel comfortable until I finish off my
                work in time.
              </li>
            </ul>
          </div>
          <IntroButton />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
