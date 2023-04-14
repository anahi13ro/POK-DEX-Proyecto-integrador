import { useState } from 'react'
import './Header.css'
import Pokebola from '/img/Pokeball.png'
import { Pokemons } from './Pokemons';

function Header (props) {

     const [orderPokes, setOrderPokes] = useState('n');


       const order = () => {
          setOrderPokes(orderPokes === 'n' ? 'a' : 'n');
          const order = props.pokes.sort((pokemonA, pokemonB) => {
            if (orderPokes === 'n') {
                // let sortResults = '';
                return pokemonA.id - pokemonB.id;
            } else {
                return (pokemonA.name.localeCompare(pokemonB.name));
            }
            
        })
             props.setPokes(order)
            console.log(props.pokes, orderPokes)
       }
        //  const order = () => {
        //     props.setPokes(
        //         props.pokes.sort((a, b) => {

        //         })
        //     )
        //  }



    return (
        <header>
            <div className='headerPoke'>
                <img className='pokebola' src={Pokebola} alt='pokebola'/>
                <h1>Pokédex</h1>
            </div>
            <button onClick={order}>
            {`${orderPokes === 'a' ? "A" : "#"}`}
            </button>


        </header>
    )
}

export default Header;