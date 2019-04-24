import React from "react";

export default class StortSmilefjes extends React.Component {
  render() {
    var color = this.props.color || "#f1d817";
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30" height="30" viewBox="0 0 24 24">
        <g class="nc-icon-wrapper" fill="#f1d817">
          <path fill="none" id="Frame_-_24px" d="M0 0h24v24H0z" />
          <path
            fill={color}
            d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.478-10-10-10zm2 5h2v4h-2V7zM8 7h2v4H8V7zm9 10H7v-2h10v2z"
            id="Filled_Icons"
          />
        </g>
      </svg>
    );
  }
}
