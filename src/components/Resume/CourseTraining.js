import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MITCert from "../../Assets/experiences/MITCert.png";
import ictHKACEworkshop from "../../Assets/experiences/ictHKACEworkshop.jpg";
import HKCUAIOnSite from "../../Assets/experiences/HKCUAIOnSite.jpg";
import basicAICourse from "../../Assets/experiences/basicAICourse.png";

export default function CourseTraining() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Container fluid className="project-section">
      <h1 style={styles.title}>進修課程</h1>
      <div style={styles.gridContainer}>
        {/* --------------------------------training course-------------------------------- */}
        <div style={styles.container}>
          <img
            src={MITCert}
            alt="MIT Node 運算思維App Inventor 混合式學習課程"
            style={{ ...styles.img, cursor: "pointer" }}
            onClick={() => handleImageClick(MITCert)}
          />
          <div style={styles.content}>
            <h5>MIT Node 運算思維 App Inventor 混合式學習課程</h5>
          </div>
        </div>
        {/* --------------------------------training course-------------------------------- */}
        <div style={styles.container}>
          <img
            src={ictHKACEworkshop}
            alt="HKEAA x HKACE ICT考試擬題工作坊"
            style={{ ...styles.img, cursor: "pointer" }}
            onClick={() => handleImageClick(ictHKACEworkshop)}
          />
          <div style={styles.content}>
            <h5>HKEAA x HKACE ICT考試擬題工作坊</h5>
          </div>
        </div>
        {/* --------------------------------training course-------------------------------- */}
        <div style={styles.container}>
          <img
            src={HKCUAIOnSite}
            alt="CUHK JC AI for Future Project - Onsite Teacher Workshop"
            style={{ ...styles.img, cursor: "pointer" }}
            onClick={() => handleImageClick(HKCUAIOnSite)}
          />
          <div style={styles.content}>
            <h4>CUHK JC AI for Future Project - Onsite Teacher Workshop</h4>
          </div>
        </div>
      </div>
      <div style={styles.gridContainer}>
        <div style={styles.container}>
          <img
            src={basicAICourse}
            alt="人工智能初中教育介紹"
            style={{ ...styles.img, cursor: "pointer" }}
            onClick={() => handleImageClick(basicAICourse)}
          />
          <div style={styles.content}>
            <h5>
              人工智能初中教育介紹：人工智能技術知識與課程規劃研討會及人工智能編程工作坊
            </h5>
          </div>
        </div>
      </div>

      {/* Modal for zoomed image */}
      {selectedImage && (
        <div style={styles.modal} onClick={handleCloseModal}>
          <div style={styles.modalContent}>
            <img
              src={selectedImage}
              alt="Zoomed"
              style={styles.zoomedImg}
              onClick={handleCloseModal}
            />
            <button style={styles.closeButton} onClick={handleCloseModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}

const styles = {
  title: {
    paddingBottom: "30px",
    paddingTop: "30px",
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

  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "20px",
  },

  container: {
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    overflow: "hidden",
  },

  img: {
    verticalAlign: "middle",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    position: "absolute",
    bottom: 0,
    background: "rgb(0, 0, 0)",
    background: "rgba(0, 0, 0, 0.5)",
    color: " #f1f1f1",
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },

  // Modal styles
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  modalContent: {
    position: "relative",
    maxWidth: "90vw",
    maxHeight: "90vh",
  },

  zoomedImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },

  closeButton: {
    position: "absolute",
    top: "-40px",
    right: 0,
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "36px",
    cursor: "pointer",
    padding: 0,
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
  },
};
