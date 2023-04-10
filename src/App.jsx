import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pokemons from './components/Pokemons'

function App() {

  return (
    <div className="App">
      <Header/>
      <Pokemons/>
    </div>
  )
}

export default App
