import { useState } from 'react'
import './header.css'
import cart from './image/cart.png'
import lupa from './image/lupa.png'
import menu_h from './image/menu.png'

export function Header() {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
    }

    return (
        <header className="header">
            <div 
                className="header-menu"
                onClick={handleClick}
            >
                <img src={menu_h} alt="menu"></img>
            </div>

            <h1 className="header-h1">
                <a href="#" className="header-a">
                    E-Laboyanos
                </a>
            </h1>

            {menu && (
            <nav className="header-nav">
                <ul className="header-ul">
                    <li className="header-li">
                        <a href="#" className="header-a">
                            Ofertas
                        </a>
                    </li>
                    <li className="header-li">
                        <a href="#" className="header-a">
                            Productos
                        </a>
                    </li>
                </ul>
            </nav>)}

            <div className="header-lupa">
            <img src={lupa} alt="buscador" />
            </div>

            <div className="header-cart">
                <img src={cart} alt="cart" />
            </div>
        </header>
    )
}
