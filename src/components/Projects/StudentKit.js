import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Col, Container } from "react-bootstrap";
import titleImg from "../../Assets/Projects/title/title4.png";

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

const SubTitle = styled.div`
  text-align: left;
  padding: 10px;
  font-size: 20px;
`;

const Abstract = styled.div`
  text-align: justify;
  padding-left: 60px;
  padding: 0 0 0 40px;
  color: whitesmoke;
  width: 90%;
`;

export default function StudentKit() {
  return (
    <Container fluid className="project-section">
      <Container>
        <img
          src={titleImg}
          width="50%"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        />
        <Col>
          <Title>Project Video Demostration</Title>
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/xyJluWNxnng`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </Col>
      </Container>
    </Container>
  );
}

StudentKit.propTypes = {
  embedId: PropTypes.string.isRequired,
};
