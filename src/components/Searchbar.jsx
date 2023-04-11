import React from 'react'
import { useState } from 'react'
import { Pokemons } from './pokemon'

function Searchbar() {

    /*  const pokemonTest = [
         { name: 'Charmander', type: "Fire" },
         { name: 'Squirtle', type: 'Water' }
     ] */

    /*     const [searchInput, setSearchInput] = useState(''); */
    const [pokemonListFiltered, setPokemonListFiltered] = useState(Pokemons)

    /*     const changeInput = (event) => {
        setSearchInput(event.target.value);
    } */

    const filterFunction = (event) => {
        const query = event.target.value;
        let pokemonListNew = [...Pokemons];
        pokemonListNew = pokemonListNew.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;

        })
        setPokemonListFiltered(pokemonListNew)
    }



    return (
        <div>
            <input onChange={filterFunction} ></input>
            {pokemonListFiltered.map((pokemon, i) =>
                <div key={i}>
                    <p>{pokemon.name} es tipo {pokemon.tips} {pokemon.tips2} </p>
                </div>
            )}
        </div>
    )
}
export default Searchbar