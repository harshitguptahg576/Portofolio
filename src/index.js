import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import "./Portofolio_Components/_Component.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./Portofolio_Components/Header";
import Portofolio from "./Portofolio";
import Footer from "./Portofolio_Components/Footer";

import About from "./Portofolio_Components/About/About";
import Contact from "./Portofolio_Components/Contact/Contact";
// import Home from "./Portofolio_Components/Home/Home";
import Projects from "./Portofolio_Components/Projects/Projects";
import Resume from "./Portofolio_Components/Resume/Resume";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/Portofolio/" element={<Portofolio />} />
      <Route path="/Portofolio/about" element={<About />} />
      <Route path="/Portofolio/contact" element={<Contact />} />
      <Route path="/Portofolio/projects" element={<Projects />} />
      <Route path="/Portofolio/resume" element={<Resume />} />
      <Route path="*" element={<Portofolio />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
