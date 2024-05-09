import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Card from "./Card/Card";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [generations, setGenerations] = useState([]);
  const [types, setTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({ generation: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const itemsPerPage = 20;

  useEffect(() => {
    fetchGenerations();
    fetchTypes();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [currentPage, filters]);

  const fetchGenerations = async () => {
    const response = await fetch("http://localhost:5000/api/generations");
    const data = await response.json();
    setGenerations(data.results || []);
  };

  const fetchTypes = async () => {
    const response = await fetch("http://localhost:5000/api/types");
    const data = await response.json();
    setTypes(data.results || []);
  };

  const fetchPokemons = async () => {
    setIsLoading(true);
    const params = new URLSearchParams({
      offset: currentPage * itemsPerPage,
      limit: itemsPerPage,
      ...filters,
    });

    const response = await fetch(`http://localhost:5000/api/pokemon?${params}`);
    const data = await response.json();
    console.log(data);
    setPokemons(data.results || []);
    setTotalPages(Math.ceil(data.count / itemsPerPage));
    setIsLoading(false);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleFilterChange = (e) => {
    setCurrentPage(0);
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <select
        name="generation"
        value={filters.generation}
        onChange={handleFilterChange}
      >
        <option value="">All Generations</option>
        {generations.map((g) => (
          <option key={g.name} value={g.name}>
            {g.name}
          </option>
        ))}
      </select>
      <select name="type" value={filters.type} onChange={handleFilterChange}>
        <option value="">All Types</option>
        {types.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      <div className="CardList">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default PokemonList;
