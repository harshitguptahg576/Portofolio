import React from "react";

const ProgressBar = ({no}) => {
  return (
    <div class="progress">
      <div class="barOverflow">
        <div class="bar"></div>
      </div>
      <span>{no}</span>%
    </div>
  );
};

export default ProgressBar;
