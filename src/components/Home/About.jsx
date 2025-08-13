import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />I have two years of experience in full-stack development
              with a focus on modern web technologies. I am currently working
              with the following stacks:
              <ul className="about-ul">
                <li>
                  <b className="yellow">Next-Js</b>
                </li>
                <li>
                  <b className="yellow">Typescript</b>
                </li>
                <li>
                  <b className="yellow">Tailwind CSS</b>
                </li>
                <li>
                  <b className="yellow">tRPC</b>
                </li>
                <li>
                  <b className="yellow">Recoil</b>
                </li>
                <li>
                  <b className="yellow">Firebase</b>
                </li>
              </ul>
              <br />I am currently employed at{" "}
              <a href="https://www.darthwares.com/" className="yellow">
                Darthwares
              </a>
              , where I work on developing innovative web solutions. I have
              learned a lot from my team at Darthwares, building numerous UI
              components to improve user experience and continuously fixing
              bugs.
              <br />
              <br />
              <b className="yellow">Key Projects:</b>
              <br />
              <br />
              <b className="yellow">LeetCV.com</b> - AI-powered Resume Builder
              <ul className="about-ul">
                <li>
                  Revamped UI components for improved responsiveness and
                  performance
                </li>
                <li>
                  Built Leet Link, a custom Linktree-style module for portfolio
                  sharing
                </li>
                <li>
                  Optimized application performance through legacy code
                  refactoring
                </li>
              </ul>
              <br />
              <b className="yellow">LeetCampus.com</b> - AI-powered College
              Academic Platform
              <ul className="about-ul">
                <li>
                  Developed and enforced role-based access control, supporting
                  admins, professors, and students
                </li>
                <li>
                  Designed and implemented Leet Tutor, an AI-powered slide
                  creation and presentation module with voice navigation and AI
                  interaction
                </li>
                <li>
                  Created dynamic role onboarding forms tailored for college
                  users based on access level and workflow requirements
                </li>
                <li>
                  Integrated Firebase automation for email/SMS communications
                </li>
                <li>
                  Created dynamic portfolio generator with customizable themes
                </li>
              </ul>
              <br />I am passionate about{" "}
              <b className="yellow">AI integration</b> and{" "}
              <b className="yellow">modern web technologies</b>, constantly
              expanding my skillset to deliver exceptional user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <b className="yellow">connect.</b>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Prabakara-N"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prabakaran-m-105289219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/swag__55__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
