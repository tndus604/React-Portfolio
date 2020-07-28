import React from "react";
// Scss
import "./projectBox.scss";

const projectBox = (props) => (
  <div className="portfolio__box">
    <img src={props.preview} alt="project" />
    <div className="portfolio__hover-info flex-center">
      <div className="text-center">
        <p className="font30 weight800">{props.title}</p>
        <p className="font12 weight500">{props.tag}</p>
        <p className="font11">{props.desc}</p>
        <a href={props.weblink} target="_blank" rel="website"><i class="fas fa-desktop"></i></a>
        <a href={props.gitlink}   target="_blank" rel="github"><i class="fab fa-github fa-lg"></i></a>
      </div>
    </div>
  </div>
);

export default projectBox;
