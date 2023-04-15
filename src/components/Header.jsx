import { useState } from "react";
import "./Header.css";
import Pokebola from "/img/Pokeball.png";
import { Pokemons } from "./Pokemons";

function Header(props) {
  const [orderPokes, setOrderPokes] = useState("n");

  const order = () => {
    setOrderPokes(orderPokes === "n" ? "a" : "n");
<<<<<<< HEAD
    const order = props.pokes.sort((pokemonA, pokemonB) => {
=======
    const orderedPokes = props.pokes.sort((pokemonA, pokemonB) => {
>>>>>>> 53b7dcf4969d018010f9d6a1d1e98e94eb524351
      if (orderPokes === "n") {
        return pokemonA.id - pokemonB.id;
      } else {
        return pokemonA.name.localeCompare(pokemonB.name);
      }
    });
<<<<<<< HEAD
    props.setPokes([...order]);
    console.log(props.pokes, orderPokes);
  };

  return (
    <header>
      <div className="headerPoke">
        <img className="pokebola" src={Pokebola} alt="pokebola" />
        <h1>Pokédex</h1>
      </div>
      <button onClick={order}>{`${orderPokes === "a" ? "A" : "#"}`}</button>
=======
    props.setPokes([...orderedPokes]);
    console.log(props.pokes, orderPokes);
  };
  return (
    <header>
      <div className="headerPoke">
        <img className="pokebola" src={Pokebola} alt="pokebola" />
        <h1>Pokédex</h1>
      </div>

      <button onClick={order}>{`${orderPokes === "n" ? "#" : "A"}`}</button>
>>>>>>> 53b7dcf4969d018010f9d6a1d1e98e94eb524351
    </header>
  );
}

export default Header;
