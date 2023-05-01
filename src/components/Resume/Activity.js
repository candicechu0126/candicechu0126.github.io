import React from "react";
import { Container } from "react-bootstrap";
import { AiFillRead, AiOutlineAim, AiOutlineUser } from "react-icons/ai";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import G4G1 from "../../Assets/experiences/g4g1.jpeg";
import G4G2 from "../../Assets/experiences/g4g2.jpeg";
import G4G3 from "../../Assets/experiences/g4g3.jpeg";

export default function Activity() {
  return (
    <Container>
      <h1 style={styles.title}>負責的活動</h1>
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6">
            <Slide>
              <div style={styles.eachSlideEffect}>
                <img class="w-100 shadow" src={G4G1} />
              </div>
              <div style={styles.eachSlideEffect}>
                <img class="w-100 shadow" src={G4G2} />
              </div>
              <div style={styles.eachSlideEffect}>
                <img class="w-100 shadow" src={G4G3} />
              </div>
            </Slide>
          </div>
          <div class="col-lg-6">
            <div class="p-1 mt-1">
              <h3>Coding 101 Taster Tranining</h3>
              <div style={styles.activityName}>
                <h4>活動內容</h4>
                <p class="lead">
                  <AiFillRead /> 學習簡單的python概念，編寫AI Image Generator.
                </p>
                <h4>活動目的</h4>
                <p class="lead">
                  <AiOutlineAim />{" "}
                  讓學生在短時間內體驗編程，了解編程的基本概念和流程，以及培養對編程的興趣和自信。透過簡單易懂的介面和指導，讓初學者能夠快速上手，建立起對編程的認知和興趣，並進一步深入學習編程。
                </p>
                <h4>擔任角色</h4>
                <p class="lead">
                  <AiOutlineUser /> 活動負責老師
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const styles = {
  title: {
    paddingBottom: "30px",
    paddingTop: "50px",
    color: "white",
    fontSize: "2.3em",
    fontWeight: 500,
    justifyContent: "center",
  },

  rowWork: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },

  textName: {
    color: "#89898a",
    fontSize: "18px",
  },

  exp: {
    marginBottom: "20px",
  },

  eachSlideEffect: {
    // display: flex,
    alignItems: "start",
    // justifyContent: center,
    // backgroundSize: cover,
    height: "350px",
  },

  activityName: {
    paddingBottom: "10px",
    paddingTop: "10px",
    fontSize: "24px",
    fontWeight: 500,
    color: "#a0afff",
    textAlign: "start",
  },
};
