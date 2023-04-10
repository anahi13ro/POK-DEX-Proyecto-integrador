import './Header.css'
import Pokebola from '../assets/Iconos e imagenes/Pokeball.png'

function Header () {

    return (
        <header>
            <div className='headerPoke'>
                <img className='pokebola' src={Pokebola} alt='pokebola'/>
                <h1>Pokédex</h1>
            </div>
            <button>Filtros</button>
            
            
        </header>
    )
}

export default Header; 