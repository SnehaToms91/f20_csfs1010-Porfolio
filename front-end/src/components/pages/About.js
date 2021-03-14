import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

import Particle from "../Particle";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Particle />
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I have Masters In Computer application
              <br />
              
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Java,Python and Javascript. </b>
              </i>
              <br />
              <br />
              My current focus is on becoming a &nbsp;
              <i>
                <b className="purple">
                  Front End Developer
                </b>
              </i>
              <br />
              <br />
              Whenever possible, my passion for developing products
              with
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
                &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
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
