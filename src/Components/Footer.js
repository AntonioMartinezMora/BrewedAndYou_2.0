import React from "react";
import {Link} from "react-router-dom"
import '../Style/App.css'; 
import SocialLinks from "../Components/SocialLinks"
import { useGlobalContext } from '../context'

const Footer = () => {
    const {handleClick} = useGlobalContext()

    const year = new Date().getFullYear()

    return (
        <footer>
            <div className="footer__container">
            <div className="footer__left">
                <div className="footer__pages">
                    <Link
                        to={"/about"}
                        className="footer__page--link"
                        onClick={handleClick}
                    >
                        About
                    </Link>
                    <Link
                        to={"/terms"}
                        className="footer__page--link"
                        onClick={handleClick}
                    >
                        Terms
                    </Link>
                    <Link
                        to={"/contact"}
                        className="footer__page--link"
                        onClick={handleClick}
                    >
                        Contact
                    </Link>
                </div>
            </div>

            <div className="footer__center">
                Keep up with us 
                <SocialLinks/>
                 
            </div>

            <div className="footer__right">
                &copy; {year} BrewedAndYou  
            </div>
        </div>
        </footer>
    )
}

export default Footer;