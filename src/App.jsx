import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Pokemons } from './components/Pokemons'
import PokeInfo from './PokeInfo'
import Searchbar from './components/Searchbar'
<<<<<<< HEAD
import { Link } from 'react-router-dom'

function App() {
  const [pokes, setPokes] = useState(Pokemons); 
  const [pokemonListFiltered, setPokemonListFiltered] = useState(Pokemons)


  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Searchbar pokes={pokes} setPokes={setPokes} pokemonListFiltered={pokemonListFiltered} setPokemonList={setPokemonListFiltered}/>
        <PokeInfo pokes={pokes} setPokes={setPokes} />
     </div>
=======



function App() {

  const [pokemonListFiltered, setPokemonListFiltered] = useState(Pokemons)
  const [pokes, setPokes] = useState(Pokemons);
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Searchbar pokes={pokes} setPokes={setPokes} pokemonListFiltered={pokemonListFiltered} setPokemonList={setPokemonListFiltered} />
        <PokeInfo pokes={pokes} setPokes={setPokes} />
      </div>
>>>>>>> d659710b0fba6248bad4b5afe7ffa6cceda993b4
    </div>
  )}


  export default App









        {/* <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/PokeInfo' element={<PokeInfo/>}/>
            <Route path="/ThisPokemon" element={<ThisPokemon/>}/>
          </Routes>
        </Router> */}
     
 
