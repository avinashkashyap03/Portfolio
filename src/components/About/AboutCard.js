import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Avinash Kashyap</span>{" "}
            from{" "}
            <span className="purple">Bilaspur, Chhattisgarh, India</span>.
            <br />
            <br />
            I’m a <span className="purple">React Developer</span> and{" "}
            <span className="purple">WordPress Developer</span> Having worked in web development for over 2 years, I have gained experience in building, enhancing, and maintaining web applications across different projects. My focus is on developing efficient, responsive, and scalable frontend solutions while continuously expanding my expertise in React.js and modern web technologies. passionate about
            building responsive, user-friendly, and modern web applications. I
            enjoy creating clean interfaces, developing interactive user
            experiences, and turning ideas into functional digital products.
            <br />
            <br />
            My core skills include{" "}
            <span className="purple">
              React.js, JavaScript, HTML, CSS, WordPress, Elementor Pro,
              WPBakery, and Bootstrap
            </span>
            . I’m continuously learning new technologies and improving my
            frontend development skills.
            <br />
            <br />
            Beyond coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning and Exploring New Web Technologies ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuously Improving My Development Skills 📚
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build websites and applications that create real value
            for users."{" "}
          </p>
          <footer className="blockquote-footer">Avinash Kashyap</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
