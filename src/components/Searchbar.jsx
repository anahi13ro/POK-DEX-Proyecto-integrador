import React from 'react'
import { useState } from 'react'
import { Pokemons } from './Pokemons'
import './Searchbar.css'

function Searchbar(props) {

    const [pokemonListFiltered, setPokemonListFiltered] = useState(Pokemons)



    const filterFunction = (event) => {
        const query = event.target.value;
        let pokemonListNew = [...Pokemons];
        pokemonListNew = pokemonListNew.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;

        })
        props.setPokes(pokemonListNew)
    }



    return (
        <div className='searchdiv'>
            <input className='searchinput' onChange={filterFunction} placeholder='Buscar Pokemon' ></input>
        </div>
    )
}
export default Searchbar