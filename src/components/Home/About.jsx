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
              Hi, My name is <b className="yellow">Prabakaran </b>
              and I'm from <b className="yellow"> Coimbatore, TamilNadu.</b>
              <br />
              <br />I have one year of experience in frontend development with a
              focus on modern web technologies. I am currently working with the
              following stacks:
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
              bugs. One of my notable projects is{" "}
              <a href="https://www.leetcv.com/" className="yellow">
                LeetCV
              </a>
              , an online resume and portfolio builder website that helps users
              create stunning resumes and portfolios with peer review
              capabilities.
              <br />
              <br />I am passionate about building new{" "}
              <b className="yellow">Web Technologies and Products</b> and
              exploring areas related to{" "}
              <b className="yellow">Artificial Intelligence</b>. I enjoy
              tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am confident in my ability to positively contribute with
              my skills and knowledge. Let's connect and create something
              amazing together!
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
