import React from "react";
import styled from "styled-components";
import Mattilsyn from "./Mattilsyn";
import Karakterskala from "./Karakterskala";

function App() {
  return (
    <MattilsynApp>
      <Tittel>BraMat – Appen du treng når du skal ut å ete</Tittel>
      <Karakterskala/>
      <Mattilsyn />
    </MattilsynApp>
  );
}

export default App;

const MattilsynApp = styled.div`
  text-align: center;
`;

const Tittel = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin: 40px 0 0;
`;