import React from "react";
import styled from "styled-components";
import { Col, Row, Container } from "react-bootstrap";
import titleImg from "../../Assets/Projects/title/title1.png";
import gordonIcon from "../../Assets/Projects/icon/Gordon.png";
import candiceIcon from "../../Assets/Projects/icon/Candice.png";
import timIcon from "../../Assets/Projects/icon/Tim.png";

const Title = styled.div`
  text-align: left;
  padding-top: 40px;
  padding-left: 40px;
  background-image: linear-gradient(
    -225deg,
    #ffffff 0%,
    #c18cf9 29%,
    #c46df7 67%,
    #c46df7 100%
  );
  background-size: 200% auto;
  color: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  font-size: 40px !important;
  font-weight: 800;
`;

const Abstract = styled.div`
  text-align: justify;
  padding: 5px;
  color: whitesmoke;
`;

const PersonalName = styled.div`
  color: #6fa9dd;
  font-size: 16px;
  padding-top: 10px;
`;

export default function PowerFitness() {
  return (
    <Container fluid className="project-section">
      <Container>
        <img
          src={titleImg}
          width="60%"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        />
        <Col>
          <Title>GroupMates</Title>
          <div style={{ displa: "flex", justifyContent: "center" }}>
            <Row
              style={{
                justifyContent: "center",
                width: "70%",
              }}
            >
              <Col md={4} className="project-card">
                <img src={gordonIcon} width="50%" />
                <PersonalName>Grodon</PersonalName>
              </Col>

              <Col md={4} className="project-card">
                <img src={candiceIcon} width="60%" />
                <PersonalName>Candice</PersonalName>
              </Col>

              <Col md={4} className="project-card">
                <img src={timIcon} width="50%" />
                <PersonalName>Tim</PersonalName>
              </Col>
            </Row>
          </div>
        </Col>

        <Col>
          <Title style={{ textAlign: "justify" }}>Abstract</Title>
          <Abstract>
            The project intends to build a portable smart fitness application
            that can monitor users in real time and lead standard actions via
            the cameras of a mobile phone or laptop in order to encourage more
            people to exercise. Our system is named Power Fitness. We employ
            neural network based pose estimation models to separate and predict
            the human body's posture, allowing Power Fitness to make intelligent
            decisions and deliver useful recommendations. To create our projects
            and App/Web UI, we used the programming languages JavaScript,
            Python, and TypeScript, as well as loads of free source frameworks.
            Our solutions may be used at any time and in any location to save
            money, time, and get a decent workout.
          </Abstract>
        </Col>
        <Col>
          <Title>Main Objective</Title>
          <Abstract>
            The target of this project is to design and build a fitness training
            mobile application system for the general public, named “Power
            Fitness”. Using advanced image processing technology, the
            application will be able to provide real-time fitness tutorials and
            tailor-made advice which is similar to a real personal fitness
            coach. By recording the user exercising and grading the correctness
            of the user’s posture in-depth, the system would be able to
            incentivize the group who seldom do sports and to achieve a higher
            level of physical health through constant motivations and behaviour
            changes.
          </Abstract>
        </Col>
        <Col>
          <Title> System Diagram for Power Fitness</Title>
          <Abstract>
            A system block diagram is provided in Figure 2, below for a better
            illustration of “Power Fitness”. Our system includes three main
            parts: User Interface, Server and Hardware available (camera).
          </Abstract>
        </Col>
      </Container>
    </Container>
  );
}
