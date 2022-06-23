import React from "react";
import Title from "../Title";
import "./Projects.scss";

const Project = () => {
  const myProjects = [
    {
      title: '"COVID-WARRIOR"',
      subTitle:
        "A LIVE TRACKING DJANGO WEBSITE BY USING DJANGO(PYTHON), HTML, CSS, JAVASCRIPT, CHARTJS, BOOTSTRAP",
      time: "MAY 2021 - AUG 2021",
      desc: [
        "It provides the details of ongoing cases of the covid-19 pandemic in India.",
        "It provides the details state-wise as well as district-wise with the help of official API data. It also provides tabular, graphical, and map visualisation of Covid data.",
        "It is also an E-Commerce platform related to the essential things for covid-19.",
      ],
      imgUrl:"Assets/ProjectImg/covidWarrior.jpg",
      link: "http://harshitguptahg576.pythonanywhere.com",
    },
    {
      title: '"DESKTOP ASSISTANT"',
      subTitle:
        "CALLED AS JARVIS (JUST A RATHER VERY INTELLIGENT SYSTEM) BY USING PYTHON.",
      time: "AUG 2021 - SEP 2021",
      desc: [
        "The main objective of this project is to make a personal assistant for the user. It's work is to recognise our voice and convert it into query to perform some specific tasks.",
        "It can open Wikipedia, browsers, applications, songs, videos, and sending mails with the help of voice only.",
      ],
      imgUrl: "Assets/ProjectImg/desktopAssistant.jpg",
      link: "#",
    },
    {
      title: '"STUDENT MANAGEMENT"',
      subTitle: "BY USING .NET FRAMEWORK WITH C#",
      time: "NOV 2021 - DEC 2021",
      desc: [
        "A window application which provides the users to login & register. It provides various applications like Notepad, Student Management App.",
        "In Student Management System, Authorised user can perform CRUD operations for Student and Faculties.",
      ],
      imgUrl: "Assets/ProjectImg/studentManagement.jpg",
      link: "#",
    },
    {
      title: '"HOUSE PRICE PREDICTION"',
      subTitle:
        "BY USING PYTHON, MACHINE LEARNING(LINEAR REGRESSION), PANDAS, MATPLOTLIB, SEABORN",
      time: "SEPT 2021 -OCT 2021",
      desc: [
        "The main objective of this project is to predict the price of the house by using boston dataset and linear Regression model of Sklearn library on the basis of various factors affecting the price of house.",
      ],
      imgUrl: "Assets/ProjectImg/housePrice.jpg",
      link: "#",
    },
    {
      title: '"PREDICTION IRIS DATASET"',
      subTitle:
        "BY USING PYTHON, LOGISTIC REGRESSION (ML), PANDAS, MATPLOTLIB, SEABORN",
      time: "OCT 2021",
      desc: [
        "The main objective of this project is to classify the target variables of iris dataset with the help of Logistic Regression of sklearn library on the basis of sepal/petal length and width.",
      ],
      imgUrl: "Assets/ProjectImg/predictionIris.jpg",
      link: "#",
    },
    {
      title: '"AUTOMATED WEBSITE"',
      subTitle: "BY USING PYTHON, SELENIUM",
      time: "OCT 2021 - NOV 2021",
      desc: [
        "The main objective of this project is to provide the automation of my website Covid-Warrior. It firstly opens it and displays all the features of this website by the back-end or automatically with the help of Selenium.",
      ],
      imgUrl: "Assets/ProjectImg/automationSelenium.jpg",
      link: "#",
    },
  ];

  return (
    <div className="project my-5">
      <Title
        title="Project Details"
        subTitle="My projects gives me motivation !"
      />

      {myProjects.map((pro, index) => {
        return (
          <div key={index} className="project-box container">
            <div className="project-detail">
              <p className="p-title">{pro.title} 🔽</p>
              <span className="p-sub-title">{pro.subTitle}</span>
              <ul className="desc">
                {pro.desc.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="project-pic">
                <div className="p-pic">
              <a href={pro.link} title={"View Now"}>
                  <img
                    src={pro.imgUrl ? pro.imgUrl : "//unsplash.it/300/300"}
                    alt="project-pic"
                    width={"300px"}
                    height={"300px"}
                  />
              </a>
                </div>
            </div>
            {/* <div className="project-btn">
              <a href={pro.link}>View Now</a>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Project;
