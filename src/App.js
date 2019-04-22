import React from "react";
import styled from "styled-components";
import Mattilsyn from "./Mattilsyn";
import Karakterskala from "./Karakterskala";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Tittel>BraMat – Appen du treng når du skal ut å ete</Tittel>
      <Karakterskala/>
      <Mattilsyn />
    </div>
  );
}

export default App;

const Tittel = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin: 40px 0 0;
`;