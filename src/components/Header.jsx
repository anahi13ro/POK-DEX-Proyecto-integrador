import './Header.css'
import Pokebola from '/img/Pokeball.png'

function Header () {

    return (
        <header>
            <div className='headerPoke'>
                <img className='pokebola' src={Pokebola} alt='pokebola'/>
                <h1>Pokédex</h1>
            </div>
            <button>Fil</button>
            
            
        </header>
    )
}

export default Header; 