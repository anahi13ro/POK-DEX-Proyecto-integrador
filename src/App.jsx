import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Pokemons } from "./components/Pokemons";
import PokeInfo from "./PokeInfo";
import Searchbar from "./components/Searchbar";

function App() {
<<<<<<< HEAD
  const [pokes, setPokes] = useState(Pokemons);

=======
  const [pokes, setPokes] = useState(Pokemons); 
  
>>>>>>> 53b7dcf4969d018010f9d6a1d1e98e94eb524351
  return (
    <div className="App">
      <div className="container">
        <Header pokes={pokes} setPokes={setPokes} />
        <Searchbar pokes={pokes} setPokes={setPokes} />
        <PokeInfo pokes={pokes} setPokes={setPokes} />
      </div>
    </div>
  );
}

export default App;
