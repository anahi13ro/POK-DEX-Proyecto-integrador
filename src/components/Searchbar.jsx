import React from 'react'
<<<<<<< HEAD
import { Pokemons } from './Pokemons'
import './Searchbar.css'
=======
import { useState } from 'react'
import { Pokemons } from './Pokemons'
import './Searchbar.css'

function Searchbar(props) {

    const [pokemonListFiltered, setPokemonListFiltered] = useState(Pokemons)


>>>>>>> d659710b0fba6248bad4b5afe7ffa6cceda993b4

function Searchbar(props) {
    
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
<<<<<<< HEAD
            < input className='searchinput' onChange={filterFunction} placeholder='Buscar Pokemon' />
=======
            <input className='searchinput' onChange={filterFunction} placeholder='Buscar Pokemon' ></input>
>>>>>>> d659710b0fba6248bad4b5afe7ffa6cceda993b4
        </div>
    )
}
export default Searchbar