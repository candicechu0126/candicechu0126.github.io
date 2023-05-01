import React from "react";
import { Container } from "react-bootstrap";
import img1 from "../../Assets/experiences/3dFood1.jpg";
import MITCert from "../../Assets/experiences/MITCert.png";
export default function CourseTraining() {
  return (
    <Container style={styles.containerStyle}>
      <h1 style={styles.title}>進修課程</h1>
      <div style={styles.container}>
        <img src={MITCert} alt="Notebook" width="800px" style={styles.img} />
        <div style={styles.content}>
          <h3>MIT Node 運算思維App Inventor 混合式學習課程</h3>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei.
          </p>
        </div>
      </div>
      <div style={styles.container}>
        <img src={img1} alt="Notebook" width="800px" style={styles.img} />
        <div style={styles.content}>
          <h3>HKEAA x HKACE ICT考試擬題工作坊</h3>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei.
          </p>
        </div>
      </div>
      <div style={styles.container}>
        <img src={img1} alt="Notebook" width="800px" style={styles.img} />
        <div style={styles.content}>
          <h3>CUHK JC AI for Future Project - Onsite Teacher Workshop</h3>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei.
          </p>
        </div>
      </div>
      <div style={styles.container}>
        <img src={img1} alt="Notebook" width="800px" style={styles.img} />
        <div style={styles.content}>
          <h3>
            人工智能初中介紹：熱工只能技術知識與課程規劃研討會及人工智能編程工作坊
          </h3>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei.
          </p>
        </div>
      </div>
      <div style={styles.container}>
        <img src={img1} alt="Notebook" width="800px" style={styles.img} />
        <div style={styles.content}>
          <h3>【照顧不同學習需要】普通學校教學助理培訓工作坊</h3>
          <p>
            Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
            phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
            maiestatis persequeris pro, pri ponderum tractatos ei.
          </p>
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
