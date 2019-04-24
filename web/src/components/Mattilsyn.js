import React from "react";
import styled from "styled-components";
import { getReviewsByPostalPlace } from "../Requests";
import StortSmil from "./StortSmilefjes";
import StrekSmil from "./StrekSmilefjes";
import SurtSmil from "./SurtSmilefjes";

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
    getReviewsByPostalPlace(postalCode, result => {
      this.setState({ activeItem: postalCode, hasData: true, places: result });
    });
  }

  getSmily(smilefjes) {
    switch (smilefjes) {
      case "0":
        return (
          <div>
            <StortSmil color="lawngreen" />
          </div>
        );
      case "1":
        return (
          <div>
            <StortSmil />
          </div>
        );
      case "2":
        return (
          <div>
            <StrekSmil />
          </div>
        );
      case "3":
        return (
          <div>
            <SurtSmil />
          </div>
        );
      default:
        break;
    }
  }

  render() {
    let reviews = [];
    if (this.state.hasData) {
      reviews = this.state.places.map(place => {
        return (
          <tr key={`${place.navn}${place.datoForTilsyn}`}>
            <td key="Navn">{place.navn}</td>
            <td key="Dato">{place.datoForTilsyn}</td>
            <td key="TotalKarakter">{this.getSmily(place.smilefjes)}</td>
            <td key="Karakter1">{place.karakterLedelseRuting}</td>
            <td key="Karakter2">{place.karakterLokalerUtstyr}</td>
            <td key="Karakter3">{place.karakterMattilbredningHandtering}</td>
          </tr>
        );
      });
    }
    return (
      <Wrapper>
        <Knapp className={this.isActive("Bergen") ? "active" : ""} onClick={() => this.getPlaceByPostalCode("Bergen")}>
          Bergen
        </Knapp>
        <Knapp className={this.isActive("Oslo") ? "active" : ""} onClick={() => this.getPlaceByPostalCode("Oslo")}>
          Oslo
        </Knapp>
        <Reviews className={!this.state.hasData ? "hide" : ""}>
          <input id="myInput" placeholder="Søk etter resturant..." />
          <Knapp onClick={() => this.setState({ hasData: false, places: [], activeItem: "" })}>Tøm liste</Knapp>
          <table id="myTable">
            <tbody>
              <tr className="header">
                <th style={{ width: "40%" }} key="Matplass">
                  Matplass
                </th>
                <th style={{ width: "20%" }} key="Dato">
                  Dato
                </th>
                <th style={{ width: "10%" }} key="Heilhetskarakter">
                  Heilhetskarakter
                </th>
                <th style={{ width: "10%" }} key="Karakter1">
                  Karakter 1
                </th>
                <th style={{ width: "10%" }} key="Karakter2">
                  Karakter 2
                </th>
                <th style={{ width: "10%" }} key="Karakter3">
                  Karakter 3
                </th>
              </tr>
              {reviews}
            </tbody>
          </table>
        </Reviews>
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

  .hide {
    display: none;
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

const Reviews = styled.div`
  padding: 20px;
  width: 70%;
  height: auto;
  margin: auto;

  #myInput {
    width: 40%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }

  #myTable {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
    font-size: 18px;
  }

  #myTable th,
  #myTable td {
    text-align: left;
    padding: 12px;
  }

  #myTable tr {
    border-bottom: 1px solid #ddd;
  }

  #myTable tr.header,
  #myTable tr:hover {
    background-color: #f1f1f1;
  }

  .gradeFace {
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;
