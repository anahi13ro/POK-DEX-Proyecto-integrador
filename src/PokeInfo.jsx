import { Pokemons } from "./components/Pokemons";
import './PokeInfo.css'


function Pokemon(props) {

       return (
        <div className="main" >
            <ul>
                {props.pokes.map((Pokemons) => (
                    <li key={Pokemons.id}>
                    <div className="card">
                        <div className="idPoke">
                        <p>{Pokemons.id}</p>
                        </div>
                        <img className="imgPoke" src={Pokemons.image} alt="imgPokemon"/> 
                        <p>{Pokemons.name}</p>
                        </div>
                        </li>
                        
                ))}
            </ul>
        </div>
    )
}

export default Pokemon;