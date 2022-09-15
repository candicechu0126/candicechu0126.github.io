import React from "react";
import { Container } from "react-bootstrap";

function About2() {
  return (
    <Container>
      <Container>
        <h1 style={styles.title}>Education</h1>
        <ul
          style={{
            textAlign: "initial",
            justifyContent: "space-around",
            marginBottom: "1rem",
          }}
        >
          <h4>Bachelor in Electronic Engineering</h4>
          <div style={styles.textName}>
            Hong Kong University of Science and Technolog
          </div>
          <li>Anticipated graduation year: 2022</li>
        </ul>
      </Container>
      <Container>
        <h1 style={styles.title}>Experience</h1>
        <div style={styles.rowWork}>
          <div style={styles.exp}>
            <ul
              style={{
                textAlign: "initial",
                justifyContent: "space-around",
                marginBottom: "1rem",
              }}
            >
              <h4>Computer Engineering Intern - Programmer</h4>
              <div style={styles.textName}>
                mSolution Consultants Limited (Dec 2018 – Apr 2019)
              </div>
              <li>Analysis the problem from the CCTV situation of the site</li>
              <li>
                Conducted research bases on python method tocompare two image
                similarity
              </li>
              <li>Design program and virtual database</li>
            </ul>
          </div>
          <div style={styles.exp}>
            <ul
              style={{
                textAlign: "initial",
                justifyContent: "space-around",
                marginBottom: "1rem",
              }}
            >
              <h4>Quality Analyst- Web/Mobile Application Intern</h4>
              <div style={styles.textName}>
                JoyAether Limited (Dec 23, 2020 – Feby 3, 2021)
              </div>
              <li>Business Information Collection</li>
              <li>Web / Mobile Application Testing</li>
              <li>Business Analysis</li>
            </ul>
          </div>
          <div style={styles.exp}>
            <ul
              style={{
                textAlign: "initial",
                justifyContent: "space-around",
                marginBottom: "1rem",
              }}
            >
              <h4>STEM Assistant Coordinator Intern</h4>
              <div style={styles.textName}>
                Youth Global Network (Jun 1, 2021-Present)
              </div>
              <li>Support of software platform and design recommendation</li>
              <li>Test ICT curricula for education platform</li>
              <li>
                Develop solution to the problems and implementation of STEM
                curriculum
              </li>
            </ul>
          </div>
          <div style={styles.exp}>
            <ul
              style={{
                textAlign: "initial",
                justifyContent: "space-around",
                marginBottom: "1rem",
              }}
            >
              <h4>Research and Teacher Assistant</h4>
              <div style={styles.textName}>
                Youth Global Network (Sept 1, 2021-Present)
              </div>
              <li>Assist in software maintenance of youCodia products</li>
              <li>
                Contribute to the design and development of new features in
                youCodia system
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <h1 style={styles.title}>Honor & Awards</h1>
        <ul style={{ textAlign: "initial", justifyContent: "space-around" }}>
          <li>Pearson LCCI Certificate (HKVEP)</li>
          <li>Outstanding academic achievement</li>
          <li>Leadership and commitment Gold certificate</li>
          <li>IVElite sharing on student Learning Outcomes</li>
          <li>American Women’s Association Scholarship</li>
          <li>Rotary club of Channel Islands Scholarship</li>
        </ul>
      </Container>
      <Container>
        <h1 style={styles.title}>Activity</h1>
        <ul style={{ textAlign: "initial", justifyContent: "space-around" }}>
          <li>Environmental Ambassador Volunteer</li>
          <li>Red Cross Health Management Volunteer</li>
          <li>The InnoCarnival of Hong Kong Science Park helper</li>
          <li>
            Electronic and Computer engineering Students’ Society member
            (Position: Internal Vice-Chairperson)
          </li>
        </ul>
      </Container>
    </Container>
  );
}

export default About2;

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
};
