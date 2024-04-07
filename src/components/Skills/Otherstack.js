import React from "react";
import { Col, Row } from "react-bootstrap";
import ThinkerCard from "../../Assets/OtherAbout/tinkercad.png";
import GameMaker from "../../Assets/OtherAbout/gamemaker.png";
import PremierePro from "../../Assets/OtherAbout/premiere-pro.png";
import CodeBlocks from "../../Assets/OtherAbout/codeblocks.png";
import Designspark from "../../Assets/OtherAbout/designspark.png";
import AndroidStudio from "../../Assets/OtherAbout/androidstudio.png";
import Pictoblox from "../../Assets/OtherAbout/Pictoblox.png";
import Scratch from "../../Assets/OtherAbout/scratch.jpeg";
import TeachableMachine from "../../Assets/OtherAbout/TeachableMachine.png";
import Thunkable from "../../Assets/OtherAbout/thunkable.png";
import ThingSpeak from "../../Assets/OtherAbout/ThingSpeak.jpeg";
import Mindplus from "../../Assets/OtherAbout/mindplus.png";
import AppInventor from "../../Assets/OtherAbout/appInventor.png";
import MakeCode from "../../Assets/OtherAbout/makecode.png";

function Otherstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Tinkercad</div>
        <img src={ThinkerCard} alt="ThinkerCard" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Game Maker</div>
        <img src={GameMaker} alt="GameMaker" width="72px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Premiere Pro</div>
        <img src={PremierePro} alt="PremierePro" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Code Blocks</div>
        <img src={CodeBlocks} alt="CodeBlocks" width="72px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Design Spark</div>
        <img src={Designspark} alt="CodeBlocks" width="72px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Android Studio</div>
        <img
          src={AndroidStudio}
          alt="AndroidStudio"
          width="72px"
          height="50px"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Pictoblox</div>
        <img src={Pictoblox} alt="Pictoblox" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Scratch</div>
        <img src={Scratch} alt="Scratch" width="72px" height="60px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Teachable Machine</div>
        <img
          src={TeachableMachine}
          alt="TeachableMachine"
          width="72px"
          height="70px"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Thunkable</div>
        <img src={Thunkable} alt="Thunkable" width="80px" height="60px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">ThingSpeak</div>
        <img src={ThingSpeak} alt="ThingSpeak" width="100px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Mind +</div>
        <img src={Mindplus} alt="Mindplus" width="100px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">App Inventor</div>
        <img src={AppInventor} alt="AppInventor" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">MakeCode</div>
        <img src={MakeCode} alt="MakeCode" width="100px" height="60px" />
      </Col>
    </Row>
  );
}

export default Otherstack;
