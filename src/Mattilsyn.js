import React from "react";
import styled from "styled-components";

export default class Mattilsyn extends React.Component {
  render() {
    return(
        <div>
            <Knapp>Bergen</Knapp>
            <Knapp>Oslo</Knapp>
        </div>
    )
  }
}

const Knapp = styled.button`
width: 140px;
height: 45px;
margin: 10px;
background-color: white;

color: #467EFF;
font-family: Arial, Helvetica, sans-serif;
font-size: 14pt;
font-weight: bold;

border: 3px solid #C7D8FF; 
border-radius: 6px;

-webkit-transition-duration: 0.2s;
transition-duration: 0.2s;

:hover, .active{
    background-color: #467EFF;
    border: 3px solid #467EFF; 
    border-radius: 6px;
    color: white;
}

:active, button:visited, {
    outline: none;
    border: none;
}
`;