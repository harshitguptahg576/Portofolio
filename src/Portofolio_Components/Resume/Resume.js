import React, { useEffect, useState } from "react";
import "./Resume.scss";
import Title from "../Title";
import Tabs from "../Tabs";

const Resume = () => {
  const [activeTab, setTab] = useState("tab-1");
  const [act,setAct]=useState("active")
  useEffect(() => {    
    console.log("Changed", activeTab)
  }, [activeTab]);

  return (
    <div className="resume-box container my-5">
      <Title title="Resume" subTitle="My Formal Bio Details" />
      <div className="resume">
        <ul id="tabs">
          <li className="edu-tab">
            <a
              href="#tab-1"
              name="tab-1"
              title="Education Details"
              onClick={e=>setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">🎓</span>
              <p className={activeTab==="tab-1"?"resume-tab active": "resume-tab"}>Education</p>
            </a>
          </li>
          <li className="work-tab">
            <a
              href="#tab-2"
              name="tab-2"
              title="Work History"
              onClick={e=>setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">💼</span>
              <p className={activeTab==="tab-2"?"resume-tab active": "resume-tab"}>Work History</p>
            </a>
          </li>
          <li className="skill-tab">
            <a
              href="#tab-3"
              name="tab-3"
              title="Skills"
              onClick={e=>setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">💻</span>
              <p className={activeTab==="tab-3"?"resume-tab active": "resume-tab"}>Skills</p>
            </a>
          </li>
          <li className="pro-tab">
            <a
              href="#tab-4"
              name="tab-4"
              title="Projects"
              onClick={e=>setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">📊</span>
              <p className={activeTab==="tab-4"?"resume-tab active": "resume-tab"}>Projects Details</p>
            </a>
          </li>
          <li className="int-tab">
            <a
              href="#tab-5"
              name="tab-5"
              title="Interests"
              onClick={e=>setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">🎭</span>
              <p className={activeTab==="tab-5"?"resume-tab active": "resume-tab"}>My Interests</p>
            </a>
          </li>
        </ul>
        <div className="section">
          <Tabs tabNo={activeTab}/>
        </div>
      </div>
    </div>
  );
};

export default Resume;
