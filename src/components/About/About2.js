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
        <h1 style={styles.title}>Working Experience 工作經驗</h1>
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
                JoyAether Limited (Dec 23, 2020 – Feb 3, 2021)
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
                Youth Global Network (Jun 1, 2021 - Aug 29, 2022)
              </div>
              <li>Support of software platform and design recommendation</li>
              <li>Test ICT curricula for education platform</li>
              <li>
                Develop solution to the problems and implementation of STEM
                curriculum
              </li>
              <li>Teach students learn html, css, javascript</li>
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
                Youth Global Network (Sept 1, 2021 - Aug 29, 2022)
              </div>
              <li>Assist in software maintenance of youCodia products</li>
              <li>
                Contribute to the design and development of new features in
                youCodia system
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
              <h4>ICT & MATH Teacher Assistant I</h4>
              <div style={styles.textName}>
                Caritas Fanling Chan Chun Ha Secondary School (Sept 1, 2022 -
                Aug 30, 2023)
              </div>
              <li>
                Co-teach the major of Information and Communications Technology
                (ICT S6)
              </li>
              <li>Co-teach the major of Innovative Technology (S1-S3)</li>
              <li>
                The junior form curriculum involves Artificiaj-lntelligence
                Application and Drone Application.
              </li>
              <li>In charge of the 3D printing workshop</li>
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
              <h4>GM Teacher - 資訊及通訊科技科 & 創新科技科</h4>
              <div style={styles.textName}>
                Caritas Fanling Chan Chun Ha Secondary School (Sept 1, 2023 -
                Present)
              </div>
              <li>高中 DSE ICT課程</li>
              <li>初中創新科技科 Panel Head</li>
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <h1 style={styles.title}>Scholarship 獎學金</h1>
        <ul style={{ textAlign: "initial", justifyContent: "space-around" }}>
          <li>American Women’s Association Scholarship</li>
          <li>Rotary club of Channel Islands Scholarship</li>
        </ul>
      </Container>
      <Container>
        <h1 style={styles.title}>Honor & Awards 獎項</h1>
        <ul style={{ textAlign: "initial", justifyContent: "space-around" }}>
          <li>Pearson LCCI Certificate (HKVEP)</li>
          <li>Outstanding academic achievement</li>
          <li>Leadership and commitment Gold certificate</li>
          <li>IVElite sharing on student Learning Outcomes</li>
          <li>American Women’s Association Scholarship</li>
          <li>Rotary club of Channel Islands Scholarship</li>
          <li>
            Certificate of Participation on successful completion of
            Introduction to Python by STEMpedia
          </li>
          <li>
            Certificate of Completion in International Bootcamp on Coding,
            Artificial Intelligence & Robotics for Educators by STEMpedia
          </li>
          <li>
            Certificate of Completion in CSS Essential Training from LinkedIn
            Learning
          </li>
          <li>
            Certificate of Completion in HTML Essential Training from LinkedIn
            Learning
          </li>
          <li>
            Certificate of Completion in Learning Python by LinkedIn Learning
          </li>
          <li>Passed LinkedIn Skill Assessment in JavaScript</li>
          <li>
            Passed LinkedIn Skill Assessment in Python (Programming Language)
          </li>
          <li>
            Certificate of Completion in 2-hours Mentoring Training Program
          </li>
          <li>
            Certificate of Completion in Professional Development for
            Computational Thinking and App Inventor by MIT HONG KONG INNOVATION
            NODE
          </li>
          <li>
            Certificate of Completion 4 half-day workshop on Catering for
            Diverse Learning Needs for TAs Working in Ordinary Schools by The
            Education University of Hong Kong
          </li>
          <li>2022/23 HKU Teacher Award SDL- STEAM學習設計獎 </li>
          <li>2023/24 HKU 教育應用科技獎 - 最佳應用電子學習平台獎 </li>
          <li>2024/25 HKU CITE Teacher Award - Silver Awardee in the STEAM & Computational Thinking Education stream of the Outstanding e-Learning Awards</li>
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
          <li>HKACE及政府資訊科技辦公室主辦 T.E.A.C.H. 編程教育教師聯盟成員</li>
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
    fontSize: "2.3em",
    fontWeight: 500,
    justifyContent: "center",
    color: "#a0afff",
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
