import React from "react";
import "./Resume.scss";
import Title from "../Title";

const Resume = () => {
  return (
    <div className="resume container my-5">
      <Title title="Resume" subTitle="My Formal Bio Details" />
      <div class="tabs d-flex ">
        <ul id="tab-links">
          <li>
            <a href="#tab-1" class="active" title="Education Details">
              🎓
            </a>
          </li>
          <li>
            <a href="#tab-2" title="Work History">
              💼
            </a>
          </li>
          <li>
            <a href="#tab-3" title="Skills">
              💻
            </a>
          </li>
          <li>
            <a href="#tab-4" title="Projects">
              📊
            </a>
          </li>
          <li>
            <a href="#tab-5" title="Interests">
              🎭
            </a>
          </li>
        </ul>
        <div className="section">
          <section id="tab-1" class="active">
            <h3>MCA</h3>
            Master of Computer and Applications GLA University, Mathura Jul 2020
            -Jun 2022 52.25% Intermediate: (PCM with Computer Science) CBSE Apr
            2015 -May 2017 74% High school CBSE Apr 2014 -May 2015
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
