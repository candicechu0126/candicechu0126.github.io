import React from "react";
import styled from "styled-components";
import { Row, Container } from "react-bootstrap";
import titleImg from "../../Assets/projectTitle/title3.png";

export default function AutoBus() {
  return (
    <Container fluid className="project-section">
      <Container>
        <img
          src={titleImg}
          width="60%"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        />
        <h1 className="project-heading">
          <strong className="purple">Auto Driving Shuttle Bus</strong>
        </h1>
      </Container>
    </Container>
  );
}
