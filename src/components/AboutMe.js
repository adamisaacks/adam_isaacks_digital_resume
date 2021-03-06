import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/titlePhoto1.jpg";
import img2 from "../assets/titlePhoto2.jpeg";
import img3 from "../assets/titlePhoto3.jpeg";
import img4 from "../assets/titlePhoto4.jpeg";

function AboutMe() {
  return (
    <Container style={{ color: "#515151" }}>
      <Row className="align-items-center p-3">
        <Col className="col-12 col-md-3 pb-4 pb-md-0 pb-lg-0 order-md-last">
          <img
            src={img1}
            className="img-fluid p-2"
            style={{ borderRadius: "30px" }}
          />
          <img
            src={img2}
            className="img-fluid p-2 d-none d-md-block"
            style={{ borderRadius: "30px" }}
          />
        </Col>
        <Col className="col-12 col-md-3">
          <img
            src={img3}
            className="img-fluid p-2 d-none d-md-block"
            style={{ borderRadius: "30px" }}
          />
          <img
            src={img4}
            className="img-fluid p-2 d-none d-md-block"
            style={{ borderRadius: "30px" }}
          />
        </Col>
        <Col className="text-center text-md-left col-12 col-md-6 order-md-first">
          <h1 style={{ fontSize: "7vh" }} className="font-weight-bold">
            Adam Isaacks
          </h1>
          <br className="d-none d-md-block" />
          <h2 className="font-weight-light">Software Developer</h2>
          <h2 className="font-weight-light">Mechanical Engineer</h2>
          <h2 className="font-weight-light">Traveler</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
