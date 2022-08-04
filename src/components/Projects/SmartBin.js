import React from "react";
import styled from "styled-components";
import { Col, Container } from "react-bootstrap";
import titleImg from "../../Assets/Projects/title/title2.png";
import circuit1 from "../../Assets/Projects/project2_circuit1.png";
import circuit2 from "../../Assets/Projects/project2_circuit2.png";
import programChart from "../../Assets/Projects/project2_programChart.png";

const Title = styled.div`
  text-align: left;
  padding-top: 40px;
  padding-left: 40px;
  background-image: linear-gradient(
    -225deg,
    #ffffff 0%,
    #c18cf9 29%,
    #c46df7 67%,
    #c46df7 100%
  );
  background-size: 200% auto;
  color: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  font-size: 50px !important;
  font-weight: 800;
`;

const SubTitle = styled.div`
  text-align: left;
  padding: 10px;
  font-size: 20px;
`;

const Abstract = styled.div`
  text-align: justify;
  padding-left: 60px;
  padding: 0 0 0 40px;
  color: whitesmoke;
  width: 90%;
`;

export default function SmartBin() {
  return (
    <Container fluid className="project-section">
      <Container>
        <img src={titleImg} width="60%" />
        <div className="project-heading">
          EEE4218 Internet-of-Things Engineering - Mini Project
        </div>

        <Col>
          <Title>Introduction</Title>
          <Abstract>
            Mainly considering the issue of environmental protection and the
            waste levy imposed by the Hong Kong government, the theme we have
            chosen is the smart garbage bin. Of course, our projects are mainly
            used as household products. Our products are mainly capacity
            monitoring, air prime number monitoring these two major functions.
            Capacity monitoring can make it easy for home and the government to
            know the amount of household waste generated. Automatically
            calculate the amount of garbage per month, and the home can be more
            improved with this data. The government can also roughly calculate
            the monthly levy of each household and avoid the act of evading it.
            Air quality monitoring can check whether the lid of the bin is open,
            avoid the leakage of garbage odors and the spread of bacteria, and
            monitor the air quality of families to create a good environment for
            the health of their families. Our products are also equipped with
            two infrared sensors. To prevent non-active sexual behavior from
            affecting the sensor. Also, it avoids pets falling or play with the
            garbage bin. When used, all two infrared sensors need to be sensed
            before the lid can be opened. Our products also have the prevention
            of garbage dumping. We use a horizontal sensor, and if the trash can
            is dumped, the buzzer will sound an alarm and the lid of the bin
            will be locked that prevent the garbage from being poured out. It
            can reduce odor and spread of bacteria.
          </Abstract>
        </Col>

        <Col>
          <Title>Flow Chart of Circuit</Title>
          <img src={circuit1} width="40%" />
        </Col>

        <Col>
          <Title>Flow Chart of Hardware</Title>
          <img src={circuit2} width="50%" />
        </Col>
        <Col>
          <Title>Feasibility Study</Title>
          <Abstract>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There is not yet a universal
            definition of Smart City. Some definitions put particular emphasis
            on leveraging Information and Communications Technology to enhance
            the efficiency of a city’s systems, operations and services. We
            think that the definition of Smart City should be wider. Apart from
            ICT, a smart city should also leverage human and social capital to
            facilitate the sustainable growth of society and increase quality of
            living. This project will help improve the standard infrastructure
            of green cities and human settlements in Hong Kong. One of the
            typical problems and the most potential obstacles to making Hong
            Kong more environmentally friendly is the increasing number of waste
            problems. The ordinary garbage bins we already have on the road are
            not smart enough to solve the garbage levy problem. The Environment
            Bureau will submit a draft to the Legislative Council on the 14th of
            this month, and it is expected that the municipal solid waste levy
            will be implemented by the end of 2020. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For many years, the garbage levy only
            heard the stairs ringing, and many people still hope that the
            government has not submitted the bill. As of last Wednesday (October
            31), the Environmental Protection Agency announced the bag levy
            plan, but the long-standing implementation issues of the society did
            not seem to have a satisfactory answer. The Bureau's report pointed
            out that the residential buildings in cities such as New York are
            also multistorey buildings, and it is difficult to implement the
            volume-based fees. Therefore, no plans have been implemented. To
            some extent, our smart garbage bin can make it easier for the
            government to control the garbage of residents. Kitchen waste refers
            to waste residues from fresh or semi-finished products used in food
            processing and cooking, and finished products (cooked food),
            including: cooked kitchen waste, such as leftovers, leftovers, etc.;
            raw kitchen waste, including vegetables and fruits Rotten leaves,
            epidermis, residual roots, eggshells, tea residue, etc. Also
            included are used disposable kitchen utensils, food packaging
            materials, and the like.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In general, many foods sold in the
            market are not cleaned, with a lot of harmful substances such as
            bacteria; the water content of kitchen waste itself is as high as
            74%, and the salt (sodium chloride) is also high, which is easy to
            cause pollution and damage to the domestic environment. health.
            Foreign authoritative microbiology laboratories have tested
            microorganisms in food waste. The results show that there are
            Salmonella, Shigella, Staphylococcus aureus, Mycobacterium
            tuberculosis, etc. in the water. These bacteria are highly
            infectious. If the bacteria are not wrapped in a timely manner or
            brought out outdoors in time, the gas that is emitted after the
            corruption will remain in the room and cause serious pollution.
            There are many pathogenic microorganisms in the kitchen waste, which
            are often the “nutrition kitchen” of mosquitoes, flies, cockroaches,
            and mice. When mosquitoes bite human skin, saliva is injected into
            the human body to spread diseases such as malaria, filariasis, and
            Japanese encephalitis. The body of the fly can adhere to more than
            17 million bacteria, and there are more bacteria in the body. It can
            spread more than 30 diseases such as dysentery, typhoid, hepatitis,
            cholera, tuberculosis, diphtheria, trachoma, and mites. The
            cockroach can carry a variety of germs and will produce odorous
            secretions, destroying the taste of family food. In addition to
            spoiling food and destroying items, rats can also spread the plague,
            typhus, forest encephalitis, and hemorrhagic fever. For those who
            have low immunity, such as elderly people, children, and allergic
            people, indirect contact with food or dust contaminated with
            cockroaches, mosquitoes, etc. may cause bacteria to take advantage
            of it, or allergic reactions may occur. Human health poses a great
            threat. Our project is equipped with an air quality check function
            to prevent bacterial volatilization in a timely manner.
          </Abstract>
        </Col>
        <Col>
          <Title>Flow Chart of Hardware</Title>
          <img src={programChart} width="40%" />
        </Col>

        <Col>
          <Title>Functions</Title>
          <Abstract>
            <li>Infrared sensor switch</li>
            <li>Gas sensor to check the cover </li>
            <li>Tilt Switch to check the garbage bin to slope</li>
            <li>Ultrasonic sensor (check capacity)</li>
            <li>RBG(showing accumulated garbage)</li>
            <li>Buzzer to reminder</li>
          </Abstract>
        </Col>
      </Container>
    </Container>
  );
}
