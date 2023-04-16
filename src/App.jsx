import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Pokemons } from "./components/Pokemons";
import PokeInfo from "./PokeInfo";
import Searchbar from "./components/Searchbar";

function App() {
  const [pokes, setPokes] = useState(Pokemons);

  return (
    <div className="App">
      <div className="container">
        <Header pokes={pokes} setPokes={setPokes} />
        <Searchbar pokes={pokes} setPokes={setPokes} />
        <PokeInfo pokes={pokes} setPokes={setPokes} />
        <footer>
          <p>
            Programado por Manuel Ventura, Rocio Andrada & Fernando Irrutia.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
