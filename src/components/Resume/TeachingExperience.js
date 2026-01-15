import React from "react";
import { Container } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function TeachingExperience() {
  return (
    <div>
      <Container fluid className="resume-section">
        <div style={styles.teachingPhilosophyContainer}>
          <h2 style={styles.teachingPhilosophyTitle}>教學理念</h2>
          <p style={styles.teachingPhilosophyText}>
            在我的資訊及通訊科技科目的教學中，我秉持著一個核心理念：將科技知識與應用技能相結合，培養學生的創新思維和實踐能力。我深信，資訊及通訊科技不僅僅是一門課程，更是當今社會不可或缺的基礎工具。因此，我的教學目標不僅僅是讓學生掌握基本的科技知識，更是要教會他們如何將這些知識運用到實際生活中，解決問題，提升效率。
          </p>
          <p style={styles.teachingPhilosophyText}>
            在教學過程中，我注重培養學生的創新思維。通過引導他們進行項目式學習，鼓勵他們自主探究、發現問題並提出解決方案。這樣的教學方式不僅能激發學生的學習興趣，還能培養他們的問題解決能力和團隊合作精神。此外，我也非常重視實踐環節。我會安排豐富的實驗和項目實踐，讓學生在動手操作的過程中，深化對科技知識的理解，提升他們的實踐操作能力。
          </p>
          <p style={styles.teachingPhilosophyText}>
            總而言之，我的教學理念是將科技知識與應用技能相結合，通過創新思維和實踐能力的培養，為學生打下堅實的科技基礎，為他們在未來的學習和工作中提供有力的支持。
          </p>
        </div>    
      </Container>
    </div>
  );
}

export default TeachingExperience;

const styles = {
  teachingPhilosophyContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "10px",
    padding: "10px",
    margin: "20px 0",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  teachingPhilosophyTitle: {
    color: "white",
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  teachingPhilosophyText: {
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: "1.1em",
    lineHeight: "1.8",
    marginBottom: "20px",
    textAlign: "justify",
  },
};
