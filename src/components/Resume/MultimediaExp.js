import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import banner from "../../Assets/experiences/infoDay2.jpg";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import bluetooth from "../../Assets/experiences/bluetoothSpeaker.jpeg";

export default function MultimediaExp() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 style={styles.title}>有關多媒體活動</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={banner} alt="card-img" />
              <Card.Body>
                <Card.Title>資訊日Banner設計</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p style={styles.titleText}>使用PhotoShop設計</p>
                  <p style={styles.titleText}>公司報價及選購</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={bluetooth} alt="card-img" />
              <Card.Body>
                <Card.Title>藍芽喇叭焊接課程</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p style={styles.titleText}>DT課程教學生焊接與</p>
                  <p style={styles.titleText}>講解電子零件簡單理論</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={banner} alt="card-img" />
              <Card.Body>
                <Card.Title>網頁設計與製作</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p style={styles.titleText}>宗教組網頁設計與製作</p>
                  <p style={styles.titleText}>
                    全港第二屆 AISI 比賽網頁設計與製作
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={banner} alt="card-img" />
              <Card.Body>
                <Card.Title>資訊日Banner設計</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <p style={styles.titleText}>使用PhotoShop設計</p>
                  <p style={styles.titleText}>公司報價及選購</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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
  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    maxWidth: "300px",
    backgroundColor: "#3d348b",
  },

  titleText: {
    color: "#898980",
    fontSize: "16px",
  },
};
