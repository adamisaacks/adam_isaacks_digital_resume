import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#FFFFFF", color: "#515151" }}
      className="pb-4"
      id="contact"
    >
      <Container>
        <Row>
          <br></br>
        </Row>
        <Row className="pt-4 pb-2">
          <Col className="text-center">
            <h1 className="font-weight-bold">Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h2>Adam Isaacks</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h4>Houston, TX</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <span>SOCIAL MEDIA</span>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a href="mailto:adamisaacks@gmail.com" id="fontAwesomeFooter">
              <i className="fas fa-at"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adamisaacks/"
              target="_blank"
              rel="noreferrer"
              id="fontAwesomeFooter"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/adam.isaacks"
              target="_blank"
              rel="noreferrer"
              id="fontAwesomeFooter"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/iswcks/?hl=en"
              target="_blank"
              rel="noreferrer"
              id="fontAwesomeFooter"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <br />
            <span>&copy; 2021 Adam Isaacks All rights reserved.</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
