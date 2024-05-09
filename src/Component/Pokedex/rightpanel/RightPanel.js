import React from "react";

function RightPanel({ pokemon }) {
  return (
    <div id="right-panel">
      <div className="empty-container"></div>
      <div className="top-screen-container">
        <div id="about-screen" className="right-panel-screen">
          {pokemon
            ? `Height: ${pokemon.height} cm / Weight: ${pokemon.weight} kg`
            : ""}
        </div>
      </div>
      <div className="square-buttons-container">
        <div className="blue-squares-container">
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
          <div className="blue-square"></div>
        </div>
      </div>
      <div className="center-buttons-container">
        <div className="center-left-container">
          <div className="small-reds-container">
            <div className="small-light red">
              <div className="dot light-red"></div>
            </div>
            <div className="small-light red">
              <div className="dot light-red"></div>
            </div>
          </div>
          <div className="white-squares-container">
            <div className="white-square"></div>
            <div className="white-square"></div>
          </div>
        </div>
        <div className="center-right-container">
          <div className="thin-buttons-container">
            <div className="thin-button"></div>
            <div className="thin-button"></div>
          </div>
          <div className="yellow-button yellow">
            <div className="big-dot light-yellow"></div>
          </div>
        </div>
      </div>
      <div className="bottom-screens-container">
        <div id="type-screen" className="right-panel-screen">
          {pokemon?.types.map((type) => (
            <span key={type.type.name}>{type.type.name} </span>
          ))}
        </div>
        <div id="id-screen" className="right-panel-screen">
          {pokemon ? `ID: ${pokemon.id}` : ""}
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
