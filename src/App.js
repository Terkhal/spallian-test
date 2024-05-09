import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDisplay from "./Component/Pokedex/PokemonDisplay";
import PokemonList from "./Component/PokemonList/PokemonList";
import Nav from "./Component/Nav/Nav";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Pokedex Arthur Asselin</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<PokemonDisplay />} />
          <Route path="/PokemonList" element={<PokemonList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
