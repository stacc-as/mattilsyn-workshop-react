import React from "react";
import styled from "styled-components";
import stortSmil from "../assets/stort_smil.png";
import strekFjes from "../assets/strek_fjes.png";
import surt_Fjes from "../assets/surt_fjes.png";

export default class Mattilsyn extends React.Component {
  render() {
    return(
      <Karakterskala>
      <p>Karakterskala</p>
      <div className="list">
        <ul>
          <li>
            <img
              className="gradeFace"
              src={stortSmil}
              alt="stort smil"
              width="30"
            />{" "}
            0 = Ingen brudd på regelverket funnet.
          </li>
          <li>
            <img
              className="gradeFace"
              src={stortSmil}
              alt="stort smil"
              width="30"
            />{" "}
            1 = Mindre brudd på regelverket som ikke krever oppfølging.
          </li>
          <li>
            <img
              className="gradeFace"
              src={strekFjes}
              alt="strekfjes"
              width="30"
            />{" "}
            2 = Brudd på regelverket som krever oppfølging.
          </li>
          <li>
            <img
              className="gradeFace"
              src={surt_Fjes}
              alt="surt fjes"
              width="30"
            />{" "}
            3 = Alvorlig brudd på regelverket.
          </li>
        </ul>
      </div>
    </Karakterskala>
    )
  }
}

const Karakterskala = styled.div`
width: 600px;
text-align: left;
margin: auto;

p {
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  margin: 0;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  display: inline-block;
  margin-top: 20px;
  margin-left: 60px;
}

.gradeFace {
  vertical-align: middle;
  padding: 5px;
}
`;