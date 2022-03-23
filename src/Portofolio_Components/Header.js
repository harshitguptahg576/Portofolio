import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [showStyle, setShowStyle] = useState({ display: "none" });
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbarcollapse d-flex justify-content-around">
            <NavLink to="/Portofolio">
              <div className="logo d-flex align-items-center">
                <img
                  src="Portofolio/Assets/Images/H Logo.png"
                  width={"50"}
                  alt="H-Coder"
                />
                <span className="logo-text px-3 fs-2">
                  Portofolio
                </span>
              </div>
            </NavLink>
            <button
              className="menu-btn pt-1"
              onClick={() =>
                setShowStyle((p) =>
                  p.display === "none"
                    ? { display: "block" }
                    : { display: "none" }
                )
              }
            >
              🔽
            </button>
          </div>
          <div className="menubar" style={showStyle}>
            <ul>
              <li className="menu">
                <NavLink to="/Portofolio">Home</NavLink>
              </li>
              <li className="menu">
                <NavLink to="/about">AboutMe</NavLink>
              </li>
              <li className="menu">
                <NavLink to="/resume">Resume</NavLink>
              </li>
              <li className="menu">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li className="menu">
                <NavLink to="/contact">ContactMe</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
