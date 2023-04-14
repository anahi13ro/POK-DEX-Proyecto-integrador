import { Pokemons } from "./components/Pokemons";
import './PokeInfo.css'
import { Link } from "react-router-dom";
import React from "react";

function Pokemon(props) {

       return (
        <div className="main" >
            <ul>
                {props.pokes.map((Pokemons) => (
                    <li key={Pokemons.id}>
                         <Link style={{textDecoration: 'none', color:'white'}} to={`/pokemon/${Pokemons.id}`}> 
                        <div className="card" style={{borderColor:`${Pokemons.color}`}}>
                      
                        <div className="idPoke">
                        <p style={{color:`${Pokemons.color}`}} ><b>#{Pokemons.id}</b></p>
                        </div>
                        <img className="imgPoke" src={Pokemons.image} alt="imgPokemon"/>
                        <div className="divName" style={{backgroundColor:`${Pokemons.color}`, width:'100%'}}>
                        <p><b>{Pokemons.name}</b></p>
                        </div>
                        </div>
                        </Link>
                    
                    
                        </li>
                        
                ))}
            </ul>
        </div>
    )
}

export default Pokemon;