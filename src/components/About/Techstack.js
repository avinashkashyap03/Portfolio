import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiBootstrap,
  SiElementor,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsBrush } from "react-icons/bs";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Git from "../../Assets/TechIcons/Git.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 fontSize={"24px"} />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 fontSize={"24px"} />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress fontSize={"24px"} />
        <div className="tech-icons-text">WordPress</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap fontSize={"24px"} />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact fontSize={"24px"} />
        <div className="tech-icons-text">React Bootstrap</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElementor fontSize={"24px"} />
        <div className="tech-icons-text">Elementor Pro</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsBrush fontSize={"24px"} />
        <div className="tech-icons-text">WPBakery</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
