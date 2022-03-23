import React, { useEffect, useState } from "react";
import "./Resume.scss";
import Title from "../Title";
import ProgressBar from "../ProgressBar";

const Tabs = ({ tabNo }) => {
  // Education Tab
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
  // Work Tab
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
  // Skills Tab
  else if (tabNo === "tab-3") {
    const mySkills = [
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
      { Name: "Pandas", Percent: 75 },
    ];
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Skills 🔽</h1>
          <ul>
            {mySkills.map((skill, index) => (
              <li key={index}>
                <ProgressBar name={skill.Name} no={skill.Percent} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // Projects Tab
  else if (tabNo === "tab-4") {
    const myProjects = [
      { 
        title:
          '"COVID-WARRIOR"',
        subTitle:
          'A LIVE TRACKING DJANGO WEBSITE BY USING DJANGO(PYTHON), HTML, CSS, JAVASCRIPT, CHARTJS, BOOTSTRAP',
        time:"MAY 2021 - AUG 2021",
        desc:[
          "It provides the details of ongoing cases of the covid-19 pandemic in India.",
          "It provides the details state-wise as well as district-wise with the help of official API data. It also provides tabular, graphical, and map visualisation of Covid data.",
          "It is also an E-Commerce platform related to the essential things for covid-19."
        ],
        link:"http://harshitguptahg576.pythonanywhere.com"
      },
      { 
        title:
          '"DESKTOP ASSISTANT"',
        subTitle:
          'CALLED AS JARVIS (JUST A RATHER VERY INTELLIGENT SYSTEM) BY USING PYTHON.',
        time:"AUG 2021 - SEP 2021",
        desc:[
          "The main objective of this project is to make a personal assistant for the user. It's work is to recognise our voice and convert it into query to perform some specific tasks.",
          "It can open Wikipedia, browsers, applications, songs, videos, and sending mails with the help of voice only."
        ],
        link:"#"
      },
      { 
        title:
          '"STUDENT MANAGEMENT"',
        subTitle:
          'BY USING .NET FRAMEWORK WITH C#',
        time:"NOV 2021 - DEC 2021",
        desc:[
          "A window application which provides the users to login & register. It provides various applications like Notepad, Student Management App.",
          "In Student Management System, Authorised user can perform CRUD operations for Student and Faculties."
        ],
        link:"#"
      },
      { 
        title:
          '"HOUSE PRICE PREDICTION"',
        subTitle:
          'BY USING PYTHON, MACHINE LEARNING(LINEAR REGRESSION), PANDAS, MATPLOTLIB, SEABORN',
        time:"SEPT 2021 -OCT 2021",
        desc:[
          "The main objective of this project is to predict the price of the house by using boston dataset and linear Regression model of Sklearn library on the basis of various factors affecting the price of house."
        ],
        link:"#"
      },
      { 
        title:
          '"PREDICTION IRIS DATASET"',
        subTitle:
          'BY USING PYTHON, LOGISTIC REGRESSION (ML), PANDAS, MATPLOTLIB, SEABORN',
        time:"OCT 2021",
        desc:[
          "The main objective of this project is to classify the target variables of iris dataset with the help of Logistic Regression of sklearn library on the basis of sepal/petal length and width."
        ],
        link:"#"
      },
      { 
        title:
          '"AUTOMATED WEBSITE"',
        subTitle:
          'BY USING PYTHON, SELENIUM',
        time:"OCT 2021 - NOV 2021",
        desc:[
          "The main objective of this project is to provide the automation of my website Covid-Warrior. It firstly opens it and displays all the features of this website by the back-end or automatically with the help of Selenium."
        ],
        link:"#"
      },
    ];
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Project Details 🔽</h1>
          <ul className="projects">
          {myProjects.map(pro=>{
            return(
              <li>
              <p className="course">
                {pro.title}, <span className="sub-title">
                  {pro.subTitle}
                </span>
              </p>
              {/* <ul className="desc">
              {pro.desc.map(point=> <li>{point}</li>)}
              </ul> */}
              <p className="date-per">
                <span className="date"> {pro.time}</span>{" "}
                <a href={pro.link} className="link"> View Now</a>
              </p>
            </li>
            );
          })}
          </ul>
        </div>
      </section>
    );
  }
  // Interest Tab
  else if (tabNo === "tab-5") {
    let myInterest = [
      { Name: "Programming" },
      { Name: "Singing" },
      { Name: "Writing" },
      { Name: "Travelling" },
    ];
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">My Interests 🔽</h1>
          <ul>
            {myInterest.map((interest, index) => (
              <li key={index}>
                <span className="px-4">✨</span>
                {interest.Name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
};

const Resume = () => {
  const [activeTab, setTab] = useState("tab-1");

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
