import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="menu-buttons">
      <Link className="menu-button" to="/pokemonlist">
        PokemonList
      </Link>
      <Link className="menu-button" to="/">
        Pokedex
      </Link>
    </div>
  );
}

export default Nav;
