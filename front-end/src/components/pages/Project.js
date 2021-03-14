import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import retrocam from "../../Assets/Projects/retrocam.jpg";

import console from "../../Assets/Projects/console.jpg";

import farmerboy from "../../Assets/Projects/farmerboy.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={retrocam}
              isBlog={false}
              title="Photography"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={console}
              isBlog={false}
              title="game.io"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farmerboy}
              isBlog={false}
              title="Famer.io"
              description=""
              link=""
            />
          </Col>

         
        </Row>
        
       
      </Container>
    </Container>
  );
}

export default Projects;
