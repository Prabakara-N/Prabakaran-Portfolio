import React from "react";
import { Container } from "react-bootstrap";

import Particle from "../components/Particle";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1
          className="project-heading"
          style={{
            marginBottom: "30px",
          }}
        >
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />

        <h1
          className="project-heading"
          style={{
            marginBottom: "30px",
          }}
        >
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
};

export default Skillset;
