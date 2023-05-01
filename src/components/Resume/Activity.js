import React from "react";
import { Container } from "react-bootstrap";
import {
  AiFillRead,
  AiOutlineAim,
  AiOutlineUser,
  AiOutlineApi,
} from "react-icons/ai";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import fishFarming1 from "../../Assets/experiences/fishFarming1.jpg";
import fishFarming2 from "../../Assets/experiences/fishFarming2.jpeg";
import fishFarming3 from "../../Assets/experiences/fishFarming3.jpg";
import fishFarming4 from "../../Assets/experiences/fishFarming4.jpg";
import G4G2 from "../../Assets/experiences/g4g2.jpeg";
import G4G3 from "../../Assets/experiences/g4g3.jpeg";

export default function Activity() {
  return (
    <Container>
      <h1 style={styles.title}>負責的活動</h1>
      {/* 活動一 */}
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6">
            <Slide>
              <div style={styles.eachSlideEffect}>
                <span>1/2</span>
                <img class="w-100 shadow" src={G4G2} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>2/2</span>
                <img class="w-100 shadow" src={G4G3} />
              </div>
            </Slide>
          </div>
          <div class="col-lg-6">
            <div class="p-1 mt-2">
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
      <hr />
      {/* 活動二 */}
      <div class="container my-8 mt-8">
        <div class="row">
          <div class="col-lg-6">
            <div class="p-1 mt-2">
              <h3>智能漁農工作坊</h3>
              <div style={styles.activityName}>
                <h4>活動內容</h4>
                <p class="lead">
                  <AiFillRead /> 參觀Smart Farming及認識如何運用科技於傳統農業
                </p>
                <h4>擔任角色</h4>
                <p class="lead">
                  <AiOutlineUser /> 負責老師及帶隊老師
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <Slide>
              <div style={styles.eachSlideEffect}>
                <span>1/4</span>
                <img class="w-100 shadow" src={fishFarming1} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>2/4</span>
                <img class="w-100 shadow" src={fishFarming2} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>3/4</span>
                <img class="w-100 shadow" src={fishFarming3} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>4/4</span>
                <img class="w-100 shadow" src={fishFarming4} />
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <hr />
      {/* 活動三 */}
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6">
            <Slide>
              <div style={styles.eachSlideEffect}>
                <span>1/2</span>
                <img class="w-100 shadow" src={G4G2} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>2/2</span>
                <img class="w-100 shadow" src={G4G3} />
              </div>
            </Slide>
          </div>
          <div class="col-lg-6">
            <div class="p-1 mt-2">
              <h3>數碼創新Teen計劃</h3>
              <div style={styles.activityName}>
                <h4>活動內容</h4>
                <p class="lead">
                  <AiFillRead /> 學習GDevelop軟件設計遊戲
                </p>
                <h4>活動目的</h4>
                <p class="lead">
                  <AiOutlineAim />{" "}
                  發掘對遊戲製作及編程的興趣，提升其學習動機，並運用科技來回應社會問題，培育資訊科技人才及推廣社會創新
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
      <hr />
      {/* 活動四 */}
      <div class="container my-8 mt-8">
        <div class="row">
          <div class="col-lg-6">
            <div class="p-1 mt-2">
              <h3>全港青年STEAM比賽暨展覽(由AI到SI)</h3>
              <div style={styles.activityName}>
                <h4>擔任角色</h4>
                <p class="lead">
                  <AiOutlineUser /> Coordinator(統籌)
                </p>
                <h4>工作內容</h4>
                <p class="lead">
                  <AiOutlineApi /> 課程培訓 <AiOutlineApi /> 活動材料設計與選購{" "}
                  <AiOutlineApi /> 與各校老師聯絡溝通，並通知活動內容{" "}
                  <AiOutlineApi /> 場地佈置{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <Slide>
              <div style={styles.eachSlideEffect}>
                <span>1/4</span>
                <img class="w-100 shadow" src={fishFarming1} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>2/4</span>
                <img class="w-100 shadow" src={fishFarming2} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>3/4</span>
                <img class="w-100 shadow" src={fishFarming3} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>4/4</span>
                <img class="w-100 shadow" src={fishFarming4} />
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <hr />
      {/* 活動五 */}
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6">
            <Slide>
              <div style={styles.eachSlideEffect}>
                <span>1/2</span>
                <img class="w-100 shadow" src={G4G2} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>2/2</span>
                <img class="w-100 shadow" src={G4G3} />
              </div>
            </Slide>
          </div>
          <div class="col-lg-6">
            <div class="p-1 mt-2">
              <h3>3D打印及食物模具製作課程</h3>
              <div style={styles.activityName}>
                <h4>活動內容</h4>
                <p class="lead">
                  <AiFillRead />
                  對中三某班學生進行3D模型製作與打印，軟餐模具製作課程培訓
                </p>
                <h4>活動目的</h4>
                <p class="lead">
                  <AiOutlineAim />
                  增加學生對吞嚥困難人士的理解與對軟餐的重要性的認識
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
      <hr />
      {/* 活動六 */}
      <div class="container my-8 mt-8">
        <div class="row">
          <div class="col-lg-6">
            <div class="p-1 mt-2">
              <h3>午間中一 3D printing 體驗工作坊</h3>
              <div style={styles.activityName}>
                <h4>活動內容</h4>
                <p class="lead">
                  <AiFillRead /> 讓中一學生學習操作3D打印機及3D打印原理
                </p>
                <h4>擔任角色</h4>
                <p class="lead">
                  <AiOutlineUser /> 負責老師
                </p>
                <h4>工作內容</h4>
                <p class="lead">
                  <AiOutlineApi />
                  介紹3D打印原理 <AiOutlineApi />
                  教學生操作3D打印機{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <Slide>
              <div style={styles.eachSlideEffect}>
                <span>1/4</span>
                <img class="w-100 shadow" src={fishFarming1} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>2/4</span>
                <img class="w-100 shadow" src={fishFarming2} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>3/4</span>
                <img class="w-100 shadow" src={fishFarming3} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>4/4</span>
                <img class="w-100 shadow" src={fishFarming4} />
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <hr />
      {/* 活動七 */}
      <div class="container my-5">
        <div class="row">
          <div class="col-lg-6">
            <Slide>
              <div style={styles.eachSlideEffect}>
                <span>1/2</span>
                <img class="w-100 shadow" src={G4G2} />
              </div>
              <div style={styles.eachSlideEffect}>
                <span>2/2</span>
                <img class="w-100 shadow" src={G4G3} />
              </div>
            </Slide>
          </div>
          <div class="col-lg-6">
            <div class="p-1 mt-2">
              <h3>中學資訊日</h3>
              <div style={styles.activityName}>
                <h4>活動目的</h4>
                <p class="lead">
                  <AiOutlineAim />
                  教導學生使用Pictoblox，並結合AI（人工智能）技術設計遊戲
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
      <hr />
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
