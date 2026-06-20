import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a React Developer passionate about building modern,
              responsive, and user-friendly web applications. I enjoy
              transforming ideas into interactive digital experiences and
              creating clean, efficient, and maintainable code.
              <br />
              <br />
              My primary expertise includes
              <i>
                <b className="purple">
                  {" "}
                  React.js, JavaScript, HTML, CSS, and WordPress development{" "}
                </b>
              </i>
              . I also have experience working with modern frontend tools,
              responsive design, and UI development using frameworks such as{" "}
              <b className="purple">Bootstrap</b> and{" "}
              <b className="purple">React Bootstrap</b>.
              <br />
              <br />
              I have worked on developing and customizing websites, building
              reusable components, and creating seamless user experiences
              across desktop and mobile devices.
              <br />
              <br />
              I’m always eager to learn new technologies, improve my development
              skills, and stay updated with the latest trends in frontend
              development. Whenever possible, I enjoy building projects with{" "}
              <b className="purple">React.js</b> and exploring modern web
              technologies to create better user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
