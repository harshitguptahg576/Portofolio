import React from "react";
import Title from "../Title";
import "./Projects.scss";
import { projects } from "../../data/portfolioData";

const Project = () => {
  return (
    <div className="project my-5">
      <Title
        title="Project Details"
        subTitle="My projects give me motivation!"
      />

      {projects.map((pro, index) => {
        return (
          <div key={index} className="project-box container">
            <div className="project-detail">
              <p className="short">{pro.time}</p>
              <p className="p-title">{pro.title} 🔽</p>
              <span className="p-sub-title">{pro.subTitle}</span>
              <ul className="desc">
                {pro.desc.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="project-pic">
              <div className="p-pic">
                <a
                  href={pro.link}
                  title="View Now"
                  target={pro.link !== "#" ? "_blank" : undefined}
                  rel={pro.link !== "#" ? "noopener noreferrer" : undefined}
                >
                  <img
                    src={pro.imgUrl ? pro.imgUrl : "//unsplash.it/300/300"}
                    alt="project-pic"
                    width={"300px"}
                    height={"300px"}
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
