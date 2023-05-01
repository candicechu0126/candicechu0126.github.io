import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Activity from "./Activity";
import MultimediaExp from "./MultimediaExp";

function WorkExperiences() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Activity />
        <MultimediaExp />
      </Container>
    </Container>
  );
}

export default WorkExperiences;
