import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TAMUseal from "../assets/TAMUWhite.png";

function Education() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#500000" }}
      className="text-white pb-4"
      id="education"
    >
      <Container>
        <Row>
          <br></br>
        </Row>
        <Row className="pt-4 pb-2">
          <Col className="text-center">
            <h1 className="font-weight-bold">Education</h1>
          </Col>
        </Row>
        <Row className=" align-items-center pt-4 pb-4">
          <Col lg={3}>
            <img
              src={TAMUseal}
              className="img-fluid pb-4 pb-md-0 pb-lg-0"
              style={{ borderRadius: "10px" }}
              alt="TAMU Seal"
            />
          </Col>
          <Col lg={9}>
            <h3>Texas A&M University - College Station, TX</h3>
            <h4>B.S. Mechanical Engineering</h4>
            <ul>
              <li>1st Place Overall – Formula SAE Lincoln 2018</li>
              <li>
                Spring 2016 - Study Abroad at Hong Kong University of Science
                and Technology
              </li>
              <li>
                Benjamin A. Gillman International Scholar – U.S. Department of
                State
              </li>
              <li>
                Aggie-Challenge Undergraduate Researcher – Studying feasibility
                of autonomous building energy audits via drones and thermal
                image processing
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
