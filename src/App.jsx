import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {Pokemons} from './components/Pokemons'
import PokeInfo from './PokeInfo'

function App() {

  const [pokes, setPokes] = useState(Pokemons); 

  return (
    <div className="App">
      <Header/>
      <PokeInfo pokes={pokes} setPokes={setPokes} />
    </div>
  )
}

export default App
