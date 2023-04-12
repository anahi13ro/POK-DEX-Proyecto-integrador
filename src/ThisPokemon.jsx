import React from "react";
import { Pokemons } from "./components/Pokemons";
import Weight from "../assets/weight.svg";
import Height from "../assets/Height.svg";
import { useParams, Link } from "react-router-dom";
import "./pokemonDetails.css";
import arrowLeft from "../assets/arrow-left.svg";
import frame from "../assets/Frame.svg";
import pokebolaBG from "../assets/pokebola.jpg";

function getNextPokemonId(id) {
   const pokemonIndex = pokes.findIndex((Pokemons) => Pokemons.id === id);
   const nextPokemonIndex = (pokemonIndex + 1) % pokes.length;
   const nextPokemonId = pokes[nextPokemonIndex].id;
   return nextPokemonId;
 }
 
 function getPreviousPokemonId(id) {
   const pokemonIndex = pokes.findIndex((Pokemons) => Pokemons.id === id);
   const previousPokemonIndex =
     pokemonIndex === 0 ? pokes.length - 1 : pokemonIndex - 1;
   const previousPokemonId = pokes[previousPokemonIndex].id;
   return previousPokemonId;
 }
 
 function PokemonDetails() {
   const { id } = useParams();
   const pokemon = pokes.find((Pokemons) => Pokemons.id === id);
   const nextPokemonId = getNextPokemonId(id);
   const previousPokemonId = getPreviousPokemonId(id);
 
   return (
     <div className="pokemonCard" style={{ backgroundColor: pokemon.color }}>
       <div className="details">
         <img src={pokebolaBG} className="bgPokeball" alt="Pokeball" />
         <Link to="/">
           <img className="flecha" src={arrowLeft} alt="Arrow Left" />
         </Link>
         <h2>{pokemon.name}</h2>
         <p>#{pokemon.id}</p>
         <div className="arrows">
           <Link to={`/pokemon/${previousPokemonId}`}>
             <img className="atrasFlechita" src={frame} alt="left" />
           </Link>
           <Link to={`/pokemon/${nextPokemonId}`}>
             <img className="flechita" src={frame} alt="right" />
           </Link>
         </div>
       </div>
       <div className="pokemonValues">
         <div className="typeContainer">
           <span className="pokemonImage">
             <img src={pokemon.image} alt="Pokemon's image" />
           </span>
           <p className="type" style={{ backgroundColor: pokemon.color }}>
             {pokemon.type}{" "}
           </p>
           <p
             className="type"
             style={{ backgroundColor: pokemon.secondaryColor }}
           >
             {pokemon.type2}
           </p>
         </div>
         <h4 style={{ color: pokemon.color }}>About</h4>
         <div className="mainValues">
           <div className="size">
             <div className="iconSize">
               <img src={Weight} alt="weight" />
               <h5>{pokemon.weight}</h5>
             </div>
             <p className="parrafo">Weigth</p>
           </div>
           <div className="size barra">
             <div className="iconSize">
               <img src={Height} alt="height" />
               <h5>{pokemon.height}</h5>
             </div>
             <p className="parrafo">Height</p>
           </div>
           <div className="size">
             <h6>{pokemon.type}</h6>
             <h6>{pokemon.type2}</h6>
             <p className="parrafo">Moves</p>
           </div>
         </div>
 <p className="description">{pokemon.description}</p>
         <h4 style={{ color: pokemon.color }}>Base Stats</h4>
         <section className="containerStats">
           <div className="stats">
             <label style={{ color: pokemon.color }} for="file">
               HP
             </label>
             <p>{pokemon.stats.HP}</p>
             <progress
               style={{
                 border: "none",
                 borderRadius: "5px",
                 color: pokemon.color,
               }}
               id="file"
               max="200"
               value={pokemon.stats.HP}
             >
               {pokemon.stats.HP}
             </progress>
           </div>
           <div className="stats">
             <label style={{ color: pokemon.color }} for="file">
               ATK
             </label>
             <p>{pokemon.stats.ATK}</p>
             <progress id="file" max="200" value={pokemon.stats.ATK}>
               {pokemon.stats.ATK}
             </progress>
           </div>
           <div className="stats">
             <label style={{ color: pokemon.color }} for="file">
               DEF
             </label>
             <p>{pokemon.stats.DEF}</p>
             <progress id="file" max="200" value={pokemon.stats.DEF}>
               {pokemon.stats.DEF}
             </progress>
           </div>
           <div className="stats">
             <label style={{ color: pokemon.color }} for="file">
               SATK
             </label>
             <p>{pokemon.stats.SATK}</p>
             <progress id="file" max="200" value={pokemon.stats.SATK}>
               {pokemon.stats.SATK}
             </progress>
           </div>
           <div className="stats">
             <label style={{ color: pokemon.color }} for="file">
               SDEF
             </label>
             <p>{pokemon.stats.SDEF}</p>
             <progress id="file" max="200" value={pokemon.stats.SDEF}>
               {pokemon.stats.SDEF}
             </progress>
           </div>
           <div className="stats">
             <label style={{ color: pokemon.color }} for="file">
               SPD
             </label>
             <p>{pokemon.stats.SPD}</p>
             <progress id="file" max="200" value={pokemon.stats.SPD}>
               {pokemon.stats.SPD}
             </progress>
           </div>
         </section>
       </div>
     </div>
   );
 }
 
 export default PokemonDetails;