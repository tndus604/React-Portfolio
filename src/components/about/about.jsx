import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import profile2 from "../../assets/about/profile2.jpeg";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="About Me" />
      <div className="container">
      <Row>
        <Col xs={6} md={6} lg={3}>
          <i class="fas fa-mobile-alt fa-4x"></i>
          <h3>Responsive</h3>
          <p id="description">My layouts will transition seamlessly from mobile to desktop mediums.</p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <i class="fas fa-laptop-code fa-4x" ></i>
          <h3>Adaptive</h3>
          <p id="description">My code is efficient and clean to make platforms run expediently and responsively.</p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <i class="fas fa-users fa-4x"></i>
          <h3>Customizable</h3>
          <p id="description">I will develop your platform to perfectly suit the vision and the needs of clients.</p>
        </Col>
        <Col xs={6} md={6} lg={3}>
          <i class="fas fa-map-signs fa-4x"></i>
          <h3>Robust</h3>
          <p id="description">My code will be structured in a way to better enable changes in the future.</p>
        </Col>
      </Row>
      </div>
      <Row>
        <Col md={12} lg={6}>
          <TeamBox avatar={profile2} name="Haley Jeon" job="Web Developer" />
        </Col>
        <Col md={12} lg={6}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
