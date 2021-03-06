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
      id="development"
    >
      <Container>
        <Row>
          <br></br>
        </Row>
        <Row className="pt-4 pb-2">
          <Col className="text-center">
            <h1 className="font-weight-bold">Software Development</h1>
            <h3 className="font-weight-light">Projects</h3>
          </Col>
        </Row>
        <Row className="align-items-center pt-4 pb-4">
          <Col lg={5}>
            <img
              src={THM}
              className="img-fluid pb-4 pb-md-0 pb-lg-0"
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
        <Row className=" align-items-center pt-4 pb-4">
          <Col className="col-12 col-md-5 order-md-last">
            <img
              src={DCV}
              className="img-fluid pb-4 pb-md-0 pb-lg-0"
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col className="col-12 col-md-7 order-md-first">
            <h3>Personal Website / Digital Resume </h3>
            <p>
              Created a personal website to create my own brand and showcase my
              design/development ability. Frontend - React - Bootstrap -
              Designed in Figma
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Development;
