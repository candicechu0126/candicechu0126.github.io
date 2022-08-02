import React from "react";
import styled from "styled-components";
import { Row, Container } from "react-bootstrap";
import titleImg from "../../Assets/projectTitle/title4.png";

export default function StudentKit() {
  return (
    <Container fluid className="project-section">
      <Container>
        <img
          src={titleImg}
          width="50%"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        />
        {/* <h1 className="project-heading">
          <strong className="purple">Student Kit</strong>
        </h1> */}
      </Container>
    </Container>
  );
}
