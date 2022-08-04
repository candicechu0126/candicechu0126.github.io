import React from "react";
import styled from "styled-components";
import { Col, Container } from "react-bootstrap";
import titleImg from "../../Assets/Projects/title/title2.png";

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

export default function SmartBin() {
  return (
    <Container fluid className="project-section">
      <Container>
        <img src={titleImg} width="60%" />
      </Container>

      <Col>
        <Title>Circuit Description</Title>
        <Abstract>
          The existence of surveillance system is not just about monitoring
          people's behavior. Some companies use surveillance system to
          understand the progress of work. Because the surveillance system is in
          a variety of different environments, it may be subject to human damage
          or physical damage. In order to be able to know these situations, the
          damaged surveillance system is deal with in a timely manner. In order
          to solve this problem, I develop the image abnormal detection for
          surveillance system. Analyze image which is newly from URL whether is
          different with standard reference pictures. Thus, knowing that the
          location of the surveillance system is being changed. It takes less
          the losses of the company. If the monitoring system sends an image
          every hour, the detector will be tested every half hour. The current
          latest image has been processed; it will not be processed. Until there
          are unprocessed image updates. If there is a problem with the detected
          image, this detector will send an email to remind you. The results of
          each test will be saved in the MySQL database and the email records
          will be saved.
        </Abstract>
      </Col>
    </Container>
  );
}
