import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiNodejs } from "react-icons/di";
import {
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSanity,
  SiTrpc,
  SiRecoil,
  SiAxios,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrpc />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRecoil />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSanity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAxios />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
    </Row>
  );
};

export default Techstack;
