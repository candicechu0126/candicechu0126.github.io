import React from "react";
import { Container } from "react-bootstrap";
import Activity from "./Activity";
import MultimediaExp from "./MultimediaExp";
import CourseTraining from "./CourseTraining";
import TeachingExperience from "./TeachingExperience";

export default function WorkExperiences() {
  return (
    <Container fluid className="about-section">
      {/* <Container> */}
      <TeachingExperience />
      <CourseTraining />
      <Activity />
      <MultimediaExp />
      {/* </Container> */}
    </Container>
  );
}
