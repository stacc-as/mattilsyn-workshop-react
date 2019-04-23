import React from "react";
import styled from "styled-components";

export default class Mattilsyn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      hasData: false,
      activeItem: ""
    };
    this.isActive = this.isActive.bind(this);
    this.getPlaceByPostalCode = this.getPlaceByPostalCode.bind(this);
  }

  isActive(menuItem) {
    return this.state.activeItem === menuItem;
  }

  getPlaceByPostalCode(postalCode) {
    this.setState({ activeItem: postalCode });
  }

  render() {
    console.log("STATE: ", this.state);
    return (
      <Wrapper>
        <Knapp className={this.isActive("Bergen") ? "active" : ""} onClick={() => this.getPlaceByPostalCode("Bergen")}>
          Bergen
        </Knapp>
        <Knapp className={this.isActive("Oslo") ? "active" : ""} onClick={() => this.getPlaceByPostalCode("Oslo")}>
          Oslo
        </Knapp>
        <div className={this.hasData ? "show" : "hide"}>
            <input id="myInput"/>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .active {
    background-color: #467eff;
    border: 3px solid #467eff;
    border-radius: 6px;
    color: white;

    &:visited {
      outline: none;
      border: none;
    }
  }

  .show{

  } 
  .hide {
      display: none;
  }
  #myInput {
    width: 40%; 
    font-size: 16px; 
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }
`;

const Knapp = styled.button`
  width: 140px;
  height: 45px;
  margin: 10px;
  background-color: white;

  color: #467eff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14pt;
  font-weight: bold;

  border: 3px solid #c7d8ff;
  border-radius: 6px;

  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  &:hover {
    background-color: #467eff;
    border: 3px solid #467eff;
    border-radius: 6px;
    color: white;
  }
`;