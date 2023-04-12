import React, { useState } from "react";
import FilterButton from "./FilterButton";
import PokemonList from "./PokemonList";

const pokemonData = [
  { name: "Bulbasaur", number: "001" },
  { name: "Charmander", number: "004" },
  { name: "Squirtle", number: "007" },
  { name: "Pikachu", number: "025" },
  { name: "Ditto", number: "132" },
  { name: "Gastly", number: "092" },
  { name: "Aron", number: "304" },
  { name: "Butterfree", number: "012" },
  { name: "Mew", number: "151" },
];

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState(pokemonData);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  const filterByName = () => {
    const filteredList = pokemonList.filter(pokemon => {
      return ["Aron", "Bulbasaur", "Butterfree", "Charmander", "Ditto", "Gastly", "Mew", "Pikachu", "Squirtle"].includes(pokemon.name);
    });
    setFilteredPokemonList(filteredList);
  };

  const filterByNumber = () => {
    const filteredList = pokemonList.filter(pokemon => {
      return ["001", "004", "007", "012", "025", "092", "132", "151", "304"].includes(pokemon.number);
    });
    setFilteredPokemonList(filteredList);
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <FilterButton filterByName={filterByName} filterByNumber={filterByNumber} />
      {filteredPokemonList.length > 0 ? (
        <PokemonList pokemonList={filteredPokemonList} />
      ) : (
        <PokemonList pokemonList={pokemonList} />
      )}
    </div>
  );
};

export default Pokedex;
