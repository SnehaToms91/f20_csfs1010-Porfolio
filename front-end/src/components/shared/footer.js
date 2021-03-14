import React from "react";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sneha Mathew</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SM</h3>
        </Col>
        <Col md="4" className="footer-body">
        <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/snehavava/"
      
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/SnehaToms91"
               
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                 <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sneha-mathew-b739a7141/"
                  
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:snehatoms91@gmail.com"
                 
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                 <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
