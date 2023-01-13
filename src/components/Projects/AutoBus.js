import React from "react";
import styled from "styled-components";
import { Row, Container } from "react-bootstrap";
import titleImg from "../../Assets/Projects/title/title3.png";

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
  font-size: 50px !important;
  font-weight: 800;
`;

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
