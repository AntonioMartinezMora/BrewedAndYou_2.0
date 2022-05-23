import React from "react"
import { FaInstagramSquare,FaTwitterSquare  } from "react-icons/fa";
import '../Style/App.css'; 

const SocialLinks = () => {
    return(
        <div className="social__icons__cont">
        <a 
            href={"https://twitter.com/BrewedAndYou"}
            target="_blank"
            className="footer__social--link"
        >
            <FaTwitterSquare />
        </a>
        <a 
            href={"https://instagram.com/brewedandyou"}
            target="_blank"
            className="footer__social--link"
        >
            <FaInstagramSquare/>
        </a>
        </div>
    )
}

export default SocialLinks;