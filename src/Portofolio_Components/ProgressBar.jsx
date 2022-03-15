import React from "react";
import { keyframes } from "styled-components";

const ProgressBar = ({no,name}) => {

  const perInDeg= (no*1.8 -45);
  var spin= keyframes`
     0% { transform: "rotate(0deg)" }
    100% { transform: "rotate(180deg)" }
    `;
  const rotate={
    transform: `rotate(${perInDeg}deg)`
    // animation: `${spin} 2s linear 1`
  }
  return (
    <div className="skill">
    <span className="skill-progress">
      <div className="barOverflow">
        <div className="bar" style={rotate}></div>
      </div>
      <span className="skill-per">{no}%</span>
    </span>
    <p className="skill-name">{name}</p>
    </div>
  );
};

export default ProgressBar;
