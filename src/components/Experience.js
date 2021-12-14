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
            <h1 className="font-weight-bold">Engineering</h1>
            <h3 className="font-weight-light">Professional Experience</h3>
          </Col>
          <Row>
            <br></br>
          </Row>
        </Row>
        {/* bp Logo Section */}
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <img src={bp} style={{ maxHeight: "10vh" }} alt="bp logo" />
          </Col>
        </Row>
        {/* Job 2 */}
        <Row className="pt-4 pb-2">
          <Col lg={8} className="text-left">
            <h3 className="font-weight-bold">Reliability Engineer - bp</h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h4>Feb 2021 - Dec 2021</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Focused on region-wide reliability improvements and reduction of
              carbon intensity for Gulf of Mexico assets
            </h6>
            <ul>
              <li>
                Developed an action tracking and visualization tool in Palantir
                to automate the calculation of KPIs, while increasing awareness
                of region wide reliability issues
              </li>
              <li>
                Facilitated Root Cause Failure Analysis (RCFA) of major rotating
                equipment via mining data, creating an event timeline,
                generating a cause map, and interviewing subject matter experts
              </li>
              <li>
                Evaluated and identified problematic equipment by analyzing
                SAP/Maximo data for improper maintenance orders, lack of
                preventive maintenance and repeat failures
              </li>
            </ul>
          </Col>
        </Row>
        {/* Job 3 */}
        <Row className="pt-4 pb-2">
          <Col lg={8} className="text-left">
            <h3 className="font-weight-bold">
              Projects Facilities Engineer - bp
            </h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h4>Nov 2019 - Feb 2021</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Delivered the Manuel Project – bringing 20,100 barrels of oil
              production to the Na Kika Offshore Platform
            </h6>
            <ul>
              <li>
                Aligned BP operations, BP projects, BP regulatory and
                engineering contractors to ensure engineering and regulatory
                compliance of offshore equipment while maintaining a record
                delivery schedule
              </li>
              <li>
                Spearheaded agile working for a team of 14 - led trainings as
                well as bi-weekly sprints and retrospectives to drive team
                efficiency, rapid-problem solving, continuous improvement, and
                unified communication
              </li>
              <li>
                Delivered 25 individual project scopes via MoC (management of
                change process) from the engineering contractor to BP
                operations; projects varied across multiple disciplines
                including static mechanical, rotating equipment, electrical,
                process, instrumentation & controls, and structural
              </li>
            </ul>
          </Col>
        </Row>
        {/* Job 4 */}
        <Row className="pt-4 pb-2">
          <Col lg={8} className="text-left">
            <h3 className="font-weight-bold">
              Operations Facilities Engineer - bp
            </h3>
          </Col>
          <Col className="text-lg-right text-left">
            <h4>Aug 2018 - Nov 2019</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Worked both onshore and offshore to support a deep-water oil and
              gas platform in the Gulf of Mexico, delivering safe, efficient,
              and reliable operations via control of work and detailed
              engineering
            </h6>
            <ul>
              <li>
                Supervised installation of 40+ engineering scopes by performing
                successful Pre-Startup Safety Reviews (PSSR) that consists of
                compliance to applicable regulatory agencies, and engineering
                design standards (API, ASME, IEEE)
              </li>
              <li>
                Improved Mean Time Between Failure (MTBF) of Nitrogen
                compressors by 400% through analysis of large datasets with
                Palantir Foundry and subsequently implemented a cost-effective
                engineering solution
              </li>
              <li>
                Led the trial and qualification of new pipe repair technology in
                the Gulf of Mexico which reduced man hours by 40% and costs by
                20% while eliminating the need for high-risk cutting and welding
              </li>
              <li>
                Increased safety and plant reliability by leading continuous
                improvement projects on the facility; projects include hull
                ventilation optimization, pump control of work conformance, high
                criticality engineered valve replacement
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
