import React from "react";
import { Container } from "react-bootstrap";
import MITCert from "../../Assets/experiences/MITCert.png";
import ictHKACEworkshop from "../../Assets/experiences/ictHKACEworkshop.jpg";
import HKCUAIOnSite from "../../Assets/experiences/HKCUAIOnSite.jpg";
import basicAICourse from "../../Assets/experiences/basicAICourse.png";

export default function CourseTraining() {
  return (
    <Container style={styles.containerStyle}>
      <h1 style={styles.title}>進修課程</h1>
      {/* --------------------------------training course-------------------------------- */}
      <div style={styles.container}>
        <img src={MITCert} alt="Notebook" width="800px" style={styles.img} />
        <div style={styles.content}>
          <h3>MIT Node 運算思維App Inventor 混合式學習課程</h3>
          {/* <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei.
          </p> */}
        </div>
      </div>
      {/* --------------------------------training course-------------------------------- */}
      <div style={styles.container}>
        <img
          src={ictHKACEworkshop}
          alt="Notebook"
          width="800px"
          style={styles.img}
        />
        <div style={styles.content}>
          <h3>HKEAA x HKACE ICT考試擬題工作坊</h3>
          {/* <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei.
          </p> */}
        </div>
      </div>
      {/* --------------------------------training course-------------------------------- */}
      <div style={styles.container}>
        <img
          src={HKCUAIOnSite}
          alt="Notebook"
          width="800px"
          style={styles.img}
        />
        <div style={styles.content}>
          <h3>CUHK JC AI for Future Project - Onsite Teacher Workshop</h3>
        </div>
      </div>
      <div style={styles.container}>
        <img
          src={basicAICourse}
          alt="Notebook"
          width="800px"
          style={styles.img}
        />
        <div style={styles.content}>
          <h3>
            人工智能初中教育介紹：人工智能技術知識與課程規劃研討會及人工智能編程工作坊
          </h3>
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
  containerStyle: {
    boxSizing: "border-box",
    position: "center",
  },

  // body: {
  //   font-family: Arial,
  //   font-size: 17px;
  // },

  container: {
    position: "relative",
    maxWidth: "800px",
    margin: "20px auto",
  },

  img: { verticalAlign: "middle" },

  content: {
    position: "absolute",
    bottom: 0,
    background: "rgb(0, 0, 0)",
    background: "rgba(0, 0, 0, 0.5)",
    color: " #f1f1f1",
    width: "100%",
    padding: "20px",
  },
};
