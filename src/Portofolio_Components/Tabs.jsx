import React from "react";
import ProgressBar from "./ProgressBar";

const Tabs = ({ tabNo }) => {
  if (tabNo === "tab-1")
    return (
      <section id={tabNo}>
        <div className="education">
          <h1 className="edu-title my-4 text-center">Education Details 🔽</h1>
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
        <div className="education">
          <h1 className="edu-title my-4 text-center">Work History 🔽</h1>
          <ul>
            <li>
              <p className="course">Vinove Software and Services Pvt. Ltd.</p>
              <p className="college">Value Coder, Gurgaon</p>
              <p className="date-per">
                <span className="date"> Jan 2022 - Present</span>{" "}
                <span className="percent"> 
                <a href="https://www.vinove.com/" target="_blank">Know More...</a>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  else if (tabNo === "tab-3")
    return (
      <section id={tabNo}>
       <div className="education">
          <h1 className="edu-title my-4 text-center">Skills 🔽</h1>
          <ul style={{display:"grid", gridTemplateColumns:"auto auto auto"}}>
            <li style={{width:"max-content"}}>
              <p className="course" >Python</p>
            </li>
            <li style={{width:"max-content"}}>
              <p className="course" >Java</p>
            </li>
            <li style={{width:"max-content"}}>
              <p className="course" >HTML-CSS</p>
            </li>
            <li style={{width:"max-content"}}>
              <p className="course" >Django</p>
            </li>
            <li style={{width:"max-content"}}>
              <p className="course" >React</p>
            </li>
            <li style={{width:"max-content"}}>
              <p className="course" >OOP</p>
            </li>
            <li style={{width:"max-content"}}>
              <p className="course" >Machine Learning</p>
            </li>
            <li style={{width:"max-content"}}>
              <p className="course" >JavaScript</p>
            </li>
            <li style={{width:"max-content"}}>
              <p className="course" >.Net with C#</p>
            </li>
            <li style={{width:"max-content"}}>
              <p className="course" >Selenium</p>
            </li>
            <li>
              <p className="course">Pandas</p>
            </li>
          </ul>
        </div>
        {/* <ProgressBar no={20}/> */}
      </section>
    );
  else if (tabNo === "tab-4")
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

export default Tabs;
