import React from "react";

function Card({ pokemon }) {
  return (
    <div className="card">
      {pokemon ? (
        <>
          <img
            src={pokemon.sprites?.front_default}
            alt={pokemon.name || "No Pokémon"}
          />
          <h3>{pokemon.name}</h3>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>
            Types: {pokemon.types?.map((type) => type.type.name).join(", ")}
          </p>
        </>
      ) : (
        <p>Loading Pokémon data...</p>
      )}
    </div>
  );
}

export default Card;
