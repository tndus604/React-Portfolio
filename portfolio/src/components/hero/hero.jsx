import React from "react";
// SCSS
import "./hero.scss";


const hero = () => (
  <div className="hero text-center" id="hero">
    <div className="wrapper">
          <div className="hero-info">
            <h1 className="animate__animated animate__fadeInDown animate__slower">Hi! I'm <span id="haley">Haley Jeon</span></h1>
            <h2 className="animate__animated animate__fadeInUp animate__slower">
              Full Stack Web Developer
            </h2>
          </div>
    </div>
  </div>
);

export default hero;
