import React, { useState } from "react";
import "./Resume.scss";
import Title from "../Title";
import ProgressBar from "../ProgressBar";
import {
  education,
  workHistory,
  skills,
  projects,
  interests,
  achievements,
  languages,
} from "../../data/portfolioData";

const Tabs = ({ tabNo }) => {
  if (tabNo === "tab-1")
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Education Details 🔽</h1>
          <ul>
            {education.map((item, index) => (
              <li key={index}>
                <p className="course">{item.course}</p>
                <p className="college">{item.college}</p>
                <p className="date-per">
                  <span className="date">{item.date}</span>
                  {item.percent && (
                    <span className="percent"> {item.percent}</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );

  if (tabNo === "tab-2")
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Work History 🔽</h1>
          <ul>
            {workHistory.map((job, index) => (
              <li key={index}>
                <p className="course">{job.role}</p>
                <p className="college">
                  {job.company}, {job.location}
                </p>
                <p className="date-per">
                  <span className="date">{job.date}</span>
                  <span className="percent">
                    <a href={job.link} target="_blank" rel="noopener noreferrer">
                      Know More...
                    </a>
                  </span>
                </p>
                <ul className="work-highlights">
                  {job.highlights.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );

  if (tabNo === "tab-3") {
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Skills 🔽</h1>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <ProgressBar name={skill.Name} no={skill.Percent} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (tabNo === "tab-4") {
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Project Details 🔽</h1>
          <ul className="projects">
            {projects.map((pro, index) => (
              <li key={index}>
                <p className="course">
                  {pro.title},{" "}
                  <span className="sub-title">{pro.subTitle}</span>
                </p>
                <p className="date-per">
                  <span className="date">{pro.time}</span>
                  <a
                    href={pro.link}
                    className="link"
                    target={pro.link !== "#" ? "_blank" : undefined}
                    rel={pro.link !== "#" ? "noopener noreferrer" : undefined}
                  >
                    View Now
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (tabNo === "tab-5") {
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Achievements 🔽</h1>
          <ul>
            {achievements.map((item, index) => (
              <li key={index}>
                <p className="course">{item.title}</p>
                <p className="date-per">
                  <span className="date">{item.date}</span>
                  {item.link && (
                    <span className="percent">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linkLabel}
                      </a>
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (tabNo === "tab-6") {
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">My Interests 🔽</h1>
          <ul>
            {interests.map((interest, index) => (
              <li key={index}>
                <span className="px-4">✨</span>
                {interest.Name}
              </li>
            ))}
          </ul>
          <h2 className="tab-title my-4 text-center">Languages 🔽</h2>
          <ul>
            {languages.map((lang, index) => (
              <li key={index}>
                <span className="px-4">🌐</span>
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return null;
};

const resumeTabs = [
  { id: "tab-1", icon: "🎓", label: "Education", className: "edu-tab" },
  { id: "tab-2", icon: "💼", label: "Work History", className: "work-tab" },
  { id: "tab-3", icon: "💻", label: "Skills", className: "skill-tab" },
  { id: "tab-4", icon: "📊", label: "Projects Details", className: "pro-tab" },
  { id: "tab-5", icon: "🏆", label: "Achievements", className: "ach-tab" },
  { id: "tab-6", icon: "🎭", label: "My Interests", className: "int-tab" },
];

const Resume = () => {
  const [activeTab, setTab] = useState("tab-1");

  return (
    <div className="resume-box container my-5">
      <Title title="Resume" subTitle="My Formal Bio Details" />
      <div className="resume">
        <ul id="tabs">
          {resumeTabs.map((tab) => (
            <li key={tab.id} className={tab.className}>
              <a
                href={`#${tab.id}`}
                name={tab.id}
                title={tab.label}
                onClick={(e) => setTab(e.currentTarget.name)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <p
                  className={
                    activeTab === tab.id ? "resume-tab active" : "resume-tab"
                  }
                >
                  {tab.label}
                </p>
              </a>
            </li>
          ))}
        </ul>
        <div className="section">
          <Tabs tabNo={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
