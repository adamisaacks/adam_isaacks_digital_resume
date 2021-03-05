import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bp from "../assets/bpLogo.png";

function EngineeringResume() {
  return (
    <Container fluid style={{ backgroundColor: "#FFFFCD", color: "#515151" }}>
      <Container>
        {/* Container Title */}
        <Row className="pt-4 pb-2">
          <Col className="text-center">
            <h1 className="font-weight-bold">Engineering</h1>
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
              Projects Engineer, Topsides Facilities - bp
            </h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h3>Nov 2019 - Present</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Worked as a mechanical engineer on a multidisciplinary team to
              deliver new well tie-backs to an existing deepwater oil and gas
              platform. Focused on safe and on time delivery of project work.
            </h6>
            <ul>
              <li>
                Successfully delivered 25 individual project scopes from the
                engineering contractor to BP operations. Project scopes included
                electrical, process, controls and mechanical components.
              </li>
              <li>
                Served as an “Agile Champion” for the team. Lead daily Kan Bans
                to ensure team efficiency, continuous improvement and
                communication.{" "}
              </li>
            </ul>
          </Col>
        </Row>
        {/* Job 2 */}
        <Row className="pt-4 pb-2">
          <Col lg={8} className="text-left">
            <h3 className="font-weight-bold">
              Offshore Site Engineer, Topsides Facilities - bp
            </h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h3>Jan 2019 - Nov 2019</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Worked as a facility engineer on rotation to a deepwater oil and
              gas asset. Focused on the safety and reliability of plant
              operations.
            </h6>
            <ul>
              <li>
                Supported daily operations. (Control of Work, Quality
                Management, Project Management, Contractor Interfaces).
              </li>
              <li>
                Oversaw successful installation of 40+ engineering scopes by
                performing Pre-Startup Safety Reviews (PSSRs). Ensuring all
                proper regulatory bodies (BSEE & USCG) were notified, and
                ensuring that applicable standards were applied to work scopes
                (ASME, API, IEEE).
              </li>
            </ul>
          </Col>
        </Row>
        {/* Job 3 */}
        <Row className="pt-4 pb-2">
          <Col lg={8} className="text-left">
            <h3 className="font-weight-bold">
              Operations Engineer, Topsides Facilities - bp
            </h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h3>Aug 2018 - Jan 2019</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Worked as an operations engineer supporting deepwater oil and gas.
              Focused on the safety and reliability of plant operations.
            </h6>
            <ul>
              <li>
                Lead the trial of new technology in the Gulf of Mexico.
                Eliminated hot-work and safely repairing pipework.
              </li>
              <li>
                Successfully delivered a project to replace 200’+ of piping with
                coated internals to reduce corrosion and decrease maintenance.
              </li>
              <li>
                Specified, ordered, and procured valves for multiple
                applications on the asset.
              </li>
            </ul>
          </Col>
        </Row>
        {/* Job 4 */}
        <Row className="pt-4 pb-2">
          <Col lg={8} className="text-left">
            <h3 className="font-weight-bold">
              Mechanical Engineering Intern, Topsides Facilities - bp
            </h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h3>May 2017 - Aug 2017</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                Illustrated adaptability by executing projects that required
                mechanical, process and controls expertise.
              </li>
              <li>
                Lead a corrosion repair campaign, developing a strategy to fix
                over 100 integrity issues.
              </li>
            </ul>
          </Col>
        </Row>
        {/* Job 5 */}
        <Row className="pt-4 pb-2">
          <Col lg={8} className="text-left">
            <h3 className="font-weight-bold">
              Mechanical Engineering Intern, Topsides Facilities - bp
            </h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h3>May 2016 - Aug 2016</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>
                Worked on long term turnaround strategy for the Mad Dog asset.
                The strategy focused on compartmentalizing systems to reduce the
                impact of maintenance on the during production.
              </li>
              <li>
                Helped create a standardized procedure for the application of
                engineered composite wraps on the deep-water platform Atlantis.
                These wraps were estimated to have saved $500,000 during a
                campaign to slow down corrosion forming under labels.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default EngineeringResume;
