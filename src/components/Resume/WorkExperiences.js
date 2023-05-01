import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Activity from "./Activity";
import MultimediaExp from "./MultimediaExp";
import CourseTraining from "./CourseTraining";

function WorkExperiences() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Activity />
        <MultimediaExp />
        <CourseTraining />
      </Container>
    </Container>
  );
}

export default WorkExperiences;
