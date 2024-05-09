import React, { useState } from "react";
import LeftPanel from "./leftpanel/LeftPanel";
import RightPanel from "./rightpanel/RightPanel"; // Adjust path as necessary

function PokemonDisplay() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (name) => {
    try {
      const lowerCaseName = name.toLowerCase();
      const response = await fetch(
        `http://localhost:5000/api/pokemon/${lowerCaseName}`
      );
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error pokemon not found or does not exist");
      setPokemon(null);
    }
  };

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleSearchClick = () => {
    if (pokemonName.trim() === "") {
      return;
    }
    fetchPokemon(pokemonName);
  };

  return (
    <div>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
          height="100%"
          alt="logo"
        />
      </div>
      <div className="search-container">
        <input
          id="name-input"
          type="text"
          placeholder="Name / id"
          value={pokemonName}
          onChange={handleInputChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSearchClick();
            }
          }}
        />

        <div
          id="search-btn"
          className="ball-container"
          onClick={handleSearchClick}
        >
          <div className="upper-half-ball"></div>
          <div className="bottom-half-ball"></div>
          <div className="center-ball"></div>
          <div className="center-line"></div>
        </div>
      </div>

      <div id="pokedex">
        <LeftPanel pokemon={pokemon} />
        <RightPanel pokemon={pokemon} />
      </div>
    </div>
  );
}

export default PokemonDisplay;
