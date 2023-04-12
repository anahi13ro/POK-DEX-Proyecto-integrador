import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="pokemon-list">
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.number} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
