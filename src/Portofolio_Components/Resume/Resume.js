import React, { useEffect, useState } from "react";
import "./Resume.scss";
import Title from "../Title";
import ProgressBar from "../ProgressBar";

const Tabs = ({ tabNo }) => {
  if (tabNo === "tab-1")
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Education Details 🔽</h1>
          <ul>
            <li>
              <p className="course">Master of Computer and Applications</p>
              <p className="college">GLA University, Mathura</p>
              <p className="date-per">
                <span className="date"> Jul 2020 - Jun 2022</span>{" "}
                <span className="percent"> 90 %</span>
              </p>
            </li>
            <li>
              <p className="course">Bachelor of Science</p>
              <p className="college">DBRAU, Agra</p>
              <p className="date-per">
                <span className="date"> Aug 2017 -May 2020</span>{" "}
                {/* <span className="percent"> 52.25%</span> */}
              </p>
            </li>
            <li>
              <p className="course">
                Intermediate: (PCM with Computer Science)
              </p>
              <p className="college">CBSE</p>
              <p className="date-per">
                <span className="date"> Apr 2015 -May 2017</span>{" "}
                <span className="percent"> 84 %</span>
              </p>
            </li>
            <li>
              <p className="course">High school</p>
              <p className="college">CBSE</p>
              <p className="date-per">
                <span className="date"> Apr 2014 -May 2015</span>{" "}
                <span className="percent"> 10.0 CGPA</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  else if (tabNo === "tab-2")
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Work History 🔽</h1>
          <ul>
            <li>
              <p className="course">Vinove Software and Services Pvt. Ltd.</p>
              <p className="college">Value Coder, Gurgaon</p>
              <p className="date-per">
                <span className="date"> Jan 2022 - Present</span>{" "}
                <span className="percent">
                  <a href="https://www.vinove.com/" target="_blank">
                    Know More...
                  </a>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  else if (tabNo === "tab-3") {
    let mySkills = [
      { Name: "Python", Percent: 85 },
      { Name: "Java", Percent: 60 },
      { Name: "HTML-CSS", Percent: 90 },
      { Name: "Django", Percent: 60 },
      { Name: "React", Percent: 55 },
      { Name: "Machine Learning", Percent: 60 },
      { Name: "OOP", Percent: 55 },
      { Name: "JavaScript", Percent: 75 },
      { Name: ".Net with C#", Percent: 60 },
      { Name: "Selenium", Percent: 70 },
      { Name: "Pandas", Percent: 75 }
    ];
    console.log(mySkills);
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Skills 🔽</h1>
          <ul>
            {mySkills.map((skill, index) => (
              <li>
                <ProgressBar name={skill.Name} no={skill.Percent} />
              </li>
            ))}
          </ul>
        </div>
        {/* <ProgressBar no={20}/> */}
      </section>
    );
  } else if (tabNo === "tab-4")
    return (
      <section id={tabNo}>
        <h3>MCA4</h3>
        Master of Computer and Applications GLA University, Mathura Jul 2020
        -Jun 2022 52.25% Intermediate: (PCM with Computer Science) CBSE Apr 2015
        -May 2017 74% High school CBSE Apr 2014 -May 2015
      </section>
    );
  else if (tabNo === "tab-5")
    return (
      <section id={tabNo}>
        <h3>MCA5</h3>
        Master of Computer and Applications GLA University, Mathura Jul 2020
        -Jun 2022 52.25% Intermediate: (PCM with Computer Science) CBSE Apr 2015
        -May 2017 74% High school CBSE Apr 2014 -May 2015
      </section>
    );
};

const Resume = () => {
  const [activeTab, setTab] = useState("tab-1");
  useEffect(() => {
    console.log("Changed", activeTab);
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
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">🎓</span>
              <p
                className={
                  activeTab === "tab-1" ? "resume-tab active" : "resume-tab"
                }
              >
                Education
              </p>
            </a>
          </li>
          <li className="work-tab">
            <a
              href="#tab-2"
              name="tab-2"
              title="Work History"
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">💼</span>
              <p
                className={
                  activeTab === "tab-2" ? "resume-tab active" : "resume-tab"
                }
              >
                Work History
              </p>
            </a>
          </li>
          <li className="skill-tab">
            <a
              href="#tab-3"
              name="tab-3"
              title="Skills"
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">💻</span>
              <p
                className={
                  activeTab === "tab-3" ? "resume-tab active" : "resume-tab"
                }
              >
                Skills
              </p>
            </a>
          </li>
          <li className="pro-tab">
            <a
              href="#tab-4"
              name="tab-4"
              title="Projects"
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">📊</span>
              <p
                className={
                  activeTab === "tab-4" ? "resume-tab active" : "resume-tab"
                }
              >
                Projects Details
              </p>
            </a>
          </li>
          <li className="int-tab">
            <a
              href="#tab-5"
              name="tab-5"
              title="Interests"
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">🎭</span>
              <p
                className={
                  activeTab === "tab-5" ? "resume-tab active" : "resume-tab"
                }
              >
                My Interests
              </p>
            </a>
          </li>
        </ul>
        <div className="section">
          <Tabs tabNo={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
