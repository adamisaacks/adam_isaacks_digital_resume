import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import THM from "../assets/THM.jpg";
import DCV from "../assets/DCV.jpg";

function Development() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#EBBA7A" }}
      className="text-white"
    >
      <Container>
        <Row className="pt-4 pb-2">
          <Col className="text-center">
            <h1 className="font-weight-bold">Development</h1>
            <h3 className="font-weight-light">Projects</h3>
          </Col>
        </Row>
        <Row className="align-items-center pt-4 pb-4">
          <Col lg={5}>
            <img
              src={THM}
              className="img-fluid"
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col lg={7}>
            <h3>Texas Historical Marker Locator</h3>
            <p>
              Created a tool to quickly find Texas Historical Markers nearby.
              Users can create an account, mark favorites and compete for the
              most markers visited.{" "}
            </p>
          </Col>
        </Row>
        <Row className="align-items-center pt-4 pb-4">
          <Col style={{ order: "2" }}>
            <img
              src={DCV}
              className="img-fluid"
              style={{ borderRadius: "10px" }}
            />
            <Col style={{ order: "1" }}>
              <h3>Personal Website / Digital Resume </h3>
              <p>
                Created a personal website to create my own brand and showcase
                my design/development ability. Frontend - React - Bootstrap -
                Designed in Figma
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Development;
