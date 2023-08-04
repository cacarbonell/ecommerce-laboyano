import { useState } from "react"
import './header.css'
import cart from './image/cart.png'
import lupa from './image/lupa.png'
import menu_h from './image/menu.png'

export function Header() {
    const [menu, setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

    return (
        <header className="Header">
            <h1 className="Header-h1">
                <a href="#" className="Header-a">
                    E-Laboyanos
                </a>
            </h1>


            <img src={menu_h} alt="menu"></img>

            <nav className={ `Header-nav ${menu ? 'isActive' : '' }` }>
                <ul className="Header-ul">
                    <li className="Header-li">
                        <a href="#" className="Header-a">
                            Ofertas
                        </a>
                    </li>
                    <li className="Header-li">
                        <a href="#" className="Header-a">
                            Item2
                        </a>
                    </li>
                    <li className="Header-li">
                        <a href="#" className="Header-a">
                            Item3
                        </a>
                    </li>
                    <li className="Header-li">
                        <a href="#" className="Header-a">
                            Item4
                        </a>
                    </li>
                    <li className="Header-li">
                        <a href="#" className="Header-a">
                            Item5
                        </a>
                    </li>
                </ul>
            </nav>


            <img src={lupa} alt="buscador" />


            <img src={cart} alt="cart" />
        </header>
    )
}
