import React from "react";
import styled from "styled-components";
import Mattilsyn from "./components/Mattilsyn";
import Karakterskala from "./components/Karakterskala";
import herbs from "./assets/herbs.jpg";
import StaccLogo from "./assets/stacc_logo_bright-bg.png";

function App() {
  return (
    <MattilsynApp>
      <div className="backgroundImage"></div>
      <Tittel>BraMat – Appen du treng når du skal ut å ete</Tittel>
      <Karakterskala/>
      <Mattilsyn />
      <img class="logoStacc" src={StaccLogo} alt="Stacc"></img>
    </MattilsynApp>
  );
}

export default App;

const MattilsynApp = styled.div`
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .logoStacc {
    margin: 50px;
  }
  .content {
    background-color: white;
  }
  .backgroundImage{
    background-image: url(${herbs});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 500px;
  }
`;

const Tittel = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 40px 0 20px 0;
`;