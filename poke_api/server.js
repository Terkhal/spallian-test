const path = require("path");

const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/api/pokemon/:name", async (req, res) => {
  const pokemonName = req.params.name;
  if (!pokemonName) {
    res.status(400).send("Pokemon name is required");
    return;
  }

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    res.send(response.data);
  } catch (error) {
    res.status(404).send("Pokemon not found");
  }
});
app.get("/api/pokemon", async (req, res) => {
  const { generation, type, offset = 0, limit = 20 } = req.query;

  try {
    let filteredPokemonUrls = [];

    if (generation) {
      const genResponse = await axios.get(
        `https://pokeapi.co/api/v2/generation/${generation}`
      );
      const speciesUrls = genResponse.data.pokemon_species.map((species) =>
        species.url.replace("pokemon-species", "pokemon")
      );
      filteredPokemonUrls.push(...speciesUrls);
    }

    if (type) {
      const typeResponse = await axios.get(
        `https://pokeapi.co/api/v2/type/${type}`
      );
      const typePokemonUrls = typeResponse.data.pokemon.map(
        (p) => p.pokemon.url
      );
      if (filteredPokemonUrls.length > 0) {
        filteredPokemonUrls = filteredPokemonUrls.filter((url) =>
          typePokemonUrls.includes(url)
        );
      } else {
        filteredPokemonUrls.push(...typePokemonUrls);
      }
    }

    if (filteredPokemonUrls.length > 0) {
      const paginatedUrls = filteredPokemonUrls.slice(
        offset,
        parseInt(offset) + parseInt(limit)
      );
      const pokemons = await Promise.all(
        paginatedUrls.map((url) => axios.get(url))
      );
      res.send({
        results: pokemons.map((pokemon) => pokemon.data),
        count: filteredPokemonUrls.length,
      });
    } else {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
      const response = await axios.get(url);
      const pokemonBasicInfo = response.data.results;
      const pokemons = await Promise.all(
        pokemonBasicInfo.map((pokemon) => axios.get(pokemon.url))
      );
      res.send({
        results: pokemons.map((pokemon) => pokemon.data),
        count: response.data.count,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch Pokémon");
  }
});

app.get("/api/generations", async (req, res) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/generation`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch Pokémon generations");
  }
});

app.get("/api/generations/:generation", async (req, res) => {
  const generation = req.params.generation;
  if (!generation) {
    res.status(400).send("Generation is required");
    return;
  }

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/generation/${generation}`
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(404).send("Generation not found");
  }
});

app.get("/api/types", async (req, res) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch Pokémon types");
  }
});

app.get("/api/types/:type", async (req, res) => {
  const type = req.params.type;
  if (!type) {
    res.status(400).send("Type is required");
    return;
  }

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(404).send("Type not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
