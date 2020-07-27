import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";
import Resume from "./Resume.pdf"



const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={4} lg={1} className="contact__social">
        <a href="https://github.com/tndus604" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
        </Col>
        <Col xs={4} lg={1} className="contact__social">
        <a href="https://www.linkedin.com/in/haley-jeon-54ba66197/" target="_blank">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        </Col>
        <Col xs={4} lg={1} className="contact__social">
        <a href={Resume} target="_blank">
          <i class="fas fa-file fa-2x"></i>
        </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
