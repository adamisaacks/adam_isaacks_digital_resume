import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import bp from "../assets/bpLogo.png";
import Resume from "../assets/Adam Isaacks Resume 2021 Web.pdf";

function EngineeringResume() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#FFFFCD", color: "#515151" }}
      id="engineering"
    >
      <Container>
        <Row>
          <br></br>
        </Row>
        {/* Container Title */}
        <Row className="pt-4 pb-2">
          <Col className="text-center">
            <h1 className="font-weight-bold">Professional Experience</h1>
            <h3 className="font-weight-light">Engineering</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <img src={bp} style={{ maxHeight: "10vh" }} />
          </Col>
        </Row>
        {/* Job 1 */}
        <Row className="pt-4 pb-2">
          <Col lg={8} className="text-left">
            <h3 className="font-weight-bold">
              Projects Facilities Engineer - bp
            </h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h3>Nov 2019 - Present</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Currently working as a mechanical engineer on a multidisciplinary
              team delivering new well tiebacks to existing deep-water oil and
              gas platforms. Focused on safe and on time delivery of project
              work.
            </h6>
            <ul>
              <li>
                Successfully <b>delivered 25 individual project scopes</b> via
                MOC (management of change process) from the engineering
                contractor to BP operations. Major projects scopes include: ACHE
                (Air Cooled Heat Exchanger), chemical injection pumps, safety
                critical valves, 4160V transformer, systems controls upgrades,
                and heavy lifting equipment.
              </li>
              <li>
                Served as an Agile Champion for the team. Leading <b>Kanban</b>{" "}
                and retrospectives to drive team efficiency, continuous
                improvement, and effective communication.
              </li>
            </ul>
          </Col>
        </Row>
        {/* Job 2 */}
        <Row className="pt-4 pb-2">
          <Col lg={8} className="text-left">
            <h3 className="font-weight-bold">
              Operations Facilities Engineer - bp
            </h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h3>Aug 2018 - Nov 2019</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Worked both onshore and offshore supporting a deep-water oil and
              gas platform in the Gulf of Mexico. Focused on delivering safe,
              efficient, and reliable operations via control of work and
              detailed engineering.
            </h6>
            <ul>
              <li>
                Oversaw <b>installation</b> of 40+ engineering scopes by
                performing Pre-Startup Safety Reviews (PSSR). A successful PSSR
                consists of compliance to applicable regulatory agencies, (BSEE,
                USCG), and engineering design standards (API, ASME, IEEE).
              </li>
              <li>
                Single Point of Authority (SPA) for{" "}
                <b>CI (continuous improvement) projects</b> on the platform.
                Projects included: hull ventilation optimization, pump control
                of work conformance, high criticality engineered valve
                replacement.
              </li>
              <li>
                Utilized <b> Palantir Foundry </b> to identify and solve
                reliability issues with plant N2 & air compressors.
              </li>
              <li>
                <b>Lead trial and qualification of new technology </b>in the
                Gulf of Mexico. Eliminated the need for hot-work on piping
                replacement projects up to 8” in diameter.
              </li>
            </ul>
          </Col>
        </Row>
        <Row className=" pb-4">
          <Col className="d-flex align-items-center justify-content-center">
            <Button>
              <Link
                to={Resume}
                target="_blank"
                className="text-white text-decoration-none"
              >
                Download Resume
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default EngineeringResume;
