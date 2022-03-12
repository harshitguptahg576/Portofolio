import React from "react";

import About from "./Portofolio_Components/About/About";
import Contact from "./Portofolio_Components/Contact/Contact";
import Home from "./Portofolio_Components/Home/Home";
import Projects from "./Portofolio_Components/Projects/Projects";
import Resume from "./Portofolio_Components/Resume/Resume";

const Portofolio = () => {
  return (
    <>
      <Home />
      <About />
      <div style={{height:"20px"}} />
      <Resume />
    </>
  );
};
export default Portofolio;
