import React from "react";

function LeftPanel({ pokemon }) {
  return (
    <div id="left-panel">
      <div className="left-top-container">
        <div className="lights-container">
          <div className="big-light-boarder">
            <div className="big-light blue">
              <div className="big-dot light-blue"></div>
            </div>
          </div>
          <div className="small-lights-container">
            <div className="small-light red">
              <div className="dot light-red"></div>
            </div>
            <div className="small-light yellow">
              <div className="dot light-yellow"></div>
            </div>
            <div className="small-light green">
              <div className="dot light-green"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="screen-container">
        <div className="screen">
          <div className="top-screen-lights">
            <div className="mini-light red"></div>
            <div className="mini-light red"></div>
          </div>
          <div id="main-screen">
            <img
              src={pokemon?.sprites?.front_default}
              alt={pokemon?.name || "No Pokémon"}
            />
          </div>
          <div className="bottom-screen-lights">
            <div className="small-light red">
              <div className="dot light-red"></div>
            </div>
            <div className="burger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <div className="upper-buttons-container">
          <div className="big-button"></div>
          <div className="long-buttons-container">
            <div className="long-button red"></div>
            <div className="long-button light-blue"></div>
          </div>
        </div>
        <div className="nav-buttons-container">
          <div className="dots-container">
            <div>.</div>
            <div>.</div>
          </div>
          <div className="green-screen">
            <span id="name-screen">
              {pokemon
                ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                : "Search a Pokémon"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
