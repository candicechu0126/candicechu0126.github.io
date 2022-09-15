import React from "react";
import styled from "styled-components";
import { Col, Container } from "react-bootstrap";
import titleImg from "../../Assets/Projects/title/title6.png";
import img1 from "../../Assets/Projects/pj6_img1.png";

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

export default function PetCarrier() {
  return (
    <Container fluid className="project-section">
      <Container>
        <img src={titleImg} width="60%" />
        <div className="project-heading">HKUST ELEC3300 Final Project 2022</div>
      </Container>

      <Col>
        <Title>System Diagram</Title>
        <img src={img1} width="60%" />
      </Col>

      {/* <Col>
        <Title>Project Video Demostration</Title>
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/59R84YLEDeg`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            muted
            voice="none"
          />
        </div>
      </Col> */}

      <Col>
        <Title>Project Summary</Title>
        <Abstract>
          <li>
            Modification of duty cycle by receiving signal from USART receiver
            or STM32 LCD touchpad to move food box (0°/90°/180°) using two SG90
            servo motors.
          </li>
          <li>
            Bluetooth module (HC-05) connect to Android app for food box control
            and the app receives data then displays it to the user within the
            app via Bluetooth (USART)
          </li>
          <li>
            A STM32f103 board installed in the front of carrier, which is
            responsible for show information on LCD, also can control food box
            via LCD touchpad (FSMC)
          </li>
          <li>
            Using temperature sensor (LM35) to detect temperature and generate
            corresponding PWM signal to the motor driver (L298N) then adjust the
            speed of the DC motor with fan
          </li>
          <li>
            Digital Tilt sensor to detect the tilted state of the carrier and
            when the state is tilted, the food box cannot be controlled to
            prevent the food from being poured out and Buzzer warn user via PWM
          </li>
          <li>
            Detect food capacity with Ultrasonic sensor (HC-SR04) via Polling,
            EXTI and Timer
          </li>
          <li>
            Control the state of the corresponding pin (GPIO) of the LED
            according to the food capacity state, and display green, yellow and
            red colors
          </li>
          <li>MQ-135 Gas sensor detect air quality inside the pet carrier</li>
        </Abstract>
      </Col>
    </Container>
  );
}
