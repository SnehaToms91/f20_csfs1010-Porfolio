import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "../Particle";

import myImg from "../../Assets/avatar2.svg";

import Tilt from "react-parallax-tilt";
import Type from "../Type";

const Home = () => {
    return(
      <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! 
                <span aria-label="Wave" className="wave" role="img">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SNEHA MATHEW</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
           
          </Row>
          
        </Container>
      </Container>
      
    </section>
            
    )
}

export default Home