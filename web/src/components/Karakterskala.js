import React from "react";
import styled from "styled-components";
import StortSmil from "./StortSmilefjes";
import StrekSmil from "./StrekSmilefjes";
import SurtSmil from "./SurtSmilefjes";

export default class Mattilsyn extends React.Component {
  render() {
    return (
      <Karakterskala>
        <p>Karakterskala</p>
        <div className="list">
          <ul>
            <li>
              <div className="gradeFace" alt="stort smil" width="30">
                <StortSmil color="lawngreen" />
                <p>0 = Ingen brudd på regelverket funnet.</p>
              </div>
            </li>
            <li>
              <div className="gradeFace" alt="stort smil" width="30">
                <StortSmil />
                <p>1 = Mindre brudd på regelverket som ikke krever oppfølging.</p>
              </div>
            </li>
            <li>
              <div className="gradeFace" alt="strekfjes" width="30">
                <StrekSmil />
                <p>2 = Brudd på regelverket som krever oppfølging.</p>
              </div>
            </li>
            <li>
              <div className="gradeFace" alt="surt fjes" width="30">
                <SurtSmil />
                <p>3 = Alvorlig brudd på regelverket.</p>
              </div>
            </li>
          </ul>
        </div>
      </Karakterskala>
    );
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
    display: inline-flex;
    vertical-align: middle;
    padding: 5px;

    p {
      font-size: 17px;
      padding-left: 5px;
      margin: auto;
    }
  }
`;
