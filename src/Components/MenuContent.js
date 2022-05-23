import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { BiWorld, BiNews, BiCoffeeTogo,BiEnvelope } from "react-icons/bi";
import { FaInstagramSquare,FaTwitterSquare  } from "react-icons/fa";

const MenuContent = () =>{
    const {openMenu, setOpenMenu} = useGlobalContext()

    const closeNav = () => {
        setOpenMenu(false)
        document.body.classList.remove('modal__open')
    }


    return (
        <div 
        className={openMenu ? "menu__content open" : "menu__content"}
        >
            <Link
                to={"/news"}
                className="menu__link"
                onClick={closeNav}
            >
                <BiNews  
                className='menu__link--icon'/>
                Coffee<span className="menu__span">News</span>
            </Link>
            <Link
                to={"/trends"}
                className="menu__link"
                onClick={closeNav}
            >
                <BiCoffeeTogo
                className='menu__link--icon' />
                <span className="menu__span">Trending</span> Coffee Beverages
            </Link>
            <Link
                to={"/discover"}
                className="menu__link"
                onClick={closeNav}
            >
                <BiWorld
                className='menu__link--icon' />
                <span className="menu__span">Discover</span> coffees of the world
            </Link>

            <Link
                to={"/contact"}
                className="menu__link"
                onClick={closeNav}
            >
                <BiEnvelope
                className='menu__link--icon' />
                Contact us
            </Link>

            <div className="menu__social">
                <a 
                    href={"https://instagram.com/brewedandyou"}
                    target="_blank"
                    className="icon__social"
                    onClick={closeNav}
                >
                <FaInstagramSquare/>
                </a>
                <a 
                    href={"https://twitter.com/BrewedAndYou"}
                    target="_blank"
                    className="icon__social"
                    onClick={closeNav}
                >
                <FaTwitterSquare />
                </a>
            </div>

            <div className="menu__info">
                <h3>BrewedAndYou</h3>
                <p>For coffee lovers and people that enjoy a coffee in any way at any time.</p>    
            </div>


        </div>
    )
}

export default MenuContent