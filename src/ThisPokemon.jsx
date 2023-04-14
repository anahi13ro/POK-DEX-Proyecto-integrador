import { useParams } from 'react-router-dom';
import { Pokemons } from './components/Pokemons';
import React from 'react';
import { Link } from "react-router-dom";
import frame from "./assets/images/Frame.svg";
import pokebola from '/img/Pokeball.png'
import Weight from './assets/images/Weight.svg'
import Height from './assets/images/Height.svg'
import './ThisPokemon.css';
import arrowLeft from './assets/images/arrow-left.svg'


function PokeDetails () {

   function nextPokes(id) {
      const indexPoke = Pokemons.findIndex((pokemon) => pokemon.id === id);
      const nextIndexPoke = (indexPoke +1) % Pokemons.length;
      const nextIdPoke = Pokemons[nextIndexPoke].id;
      return nextIdPoke;
   }

   function previousPokes(id) {
      const indexPoke = Pokemons.findIndex((pokemon) => pokemon.id === id);
      const previousIndexPoke = indexPoke === 0 ? Pokemons.length - 1 : indexPoke - 1;
      const previousIdPoke = Pokemons[previousIndexPoke].id;
      return previousIdPoke
   }

    const { id } = useParams();
    const pokemon = Pokemons.find((pokemon) => pokemon.id === id);
    const previousIdPoke = previousPokes(id);
    const nextIdPoke = nextPokes(id);

    return (
        <div className='PokeContainer' style={{backgroundColor: pokemon.color}}>
           <div className='detailsHeader'>
              <div className='pokeTitle'>
                 <img src={pokebola} className='PokebolaImg' alt='pokebola'/>
                 <Link to="/">
                  <img className="arrowHome" src={arrowLeft} alt="Arrow Left" />
                 </Link>
                 <h2 className='namePoke'>{pokemon.name}</h2>
                 <p className='idPoke'>#{pokemon.id}</p>
              </div>
              <div className='arrowPokes'>
                 <Link to={`/pokemon/${previousIdPoke}`}>
                 <img className="arrowLeft" src={frame} alt="left" />
                </Link>
                <img  className='ImgPoke' src={pokemon.image} alt='pokeImage'/>
                <Link to={`/pokemon/${nextIdPoke}`}>
                <img className="arrowRight" src={frame} alt="right" />
                </Link>
              </div>
           </div>
           <div className="pokecontainer">
             <div className='pokeName'>
               
                <p className='types' style={{backgroundColor: pokemon.color}}>
                    {pokemon.type}
                </p>
                <p className='types' style={{backgroundColor: pokemon.secondaryColor}}>
                    {pokemon.type2}
                    
                </p>
             </div>
             <h3 className='pAbout' style={{color: pokemon.color}} >About</h3>
             <div className='detailsValues'>
            
                 <div className='pokeWeight'>
                    <div className='sizeWeight'>
                      <img className='sizeImg' src={Weight} alt='imgWeight'/>
                      <h5>{pokemon.weight}</h5>
                    </div>
                  <p className='pSize'>Weight</p>
                 </div>
                 <div className='pokeHeight barra'>
                   <div className='sizeHeight'>
                     <img className='sizeImg' src={Height} alt='imgHeight'/>
                     <h5>{pokemon.height}</h5>
                   </div>
                   <p className='pSize'>Height</p>
                 </div>
                 <div className='abilities'>
                  <div className='sizeDiv'> 
                      <h6>{pokemon.ability}</h6>
                      <h6>{pokemon.ability2}</h6>
                    </div>
                  <p className='pSize'>Moves</p>
                 </div>
              </div>
              <p className='pDescription'>{pokemon.description}</p>
              <h4 style={{color: pokemon.color}}>Base Stats</h4>
              <section className='sectionStats'>
                  <div className='stats'>
                     <label style={{color: pokemon.color}} htmlFor='file'>HP</label>
                     <p>{pokemon.stats.HP}</p>
                     <progress id='file' max="200" 
                         value={pokemon.stats.HP}>
                           
                           {pokemon.stats.HP}
                         </progress>
                  </div>
                  <div className='stats'>
                     <label style={{color: pokemon.color}} htmlFor='file'>ATK</label>
                     <p>{pokemon.stats.ATK}</p>
                     <progress style={{backgroundImage: pokemon.color}} id='file' max="200" value={pokemon.stats.ATK}></progress>
                  </div>
                  <div className='stats'>
                     <label style={{color: pokemon.color}} htmlFor='file'>DEF</label>
                     <p>{pokemon.stats.DEF}</p>
                     <progress id='file' max="200" value={pokemon.stats.DEF}></progress>
                  </div>
                  <div className='stats'>
                     <label style={{color: pokemon.color}} htmlFor='file'>STAK</label>
                     <p>{pokemon.stats.STAK}</p>
                     <progress id='file' max="200" value={pokemon.stats.STAK}></progress>
                  </div>
                  <div className='stats'>
                     <label style={{color: pokemon.color}} htmlFor='file'>SDEF</label>
                     <p>{pokemon.stats.SDEF}</p>
                     <progress id='file' max="200" value={pokemon.stats.SDEF}></progress>
                  </div>
                  <div className='stats'>
                     <label style={{color: pokemon.color}} htmlFor='file'>SPD</label>
                     <p>{pokemon.stats.SPD}</p>
                     <progress id='file' max="200" value={pokemon.stats.SPD}></progress>
                  </div>

              </section>


           </div>
           
           
        </div>
    )
}

export default PokeDetails; 