import React from "react";
import { AiOutlineTwitter, AiOutlineFileDone } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../Style/App.css'; 

const  ShareSocial = props =>{
    const pageUrl = window.location.href
    const message = `Just discovered ${props.name} on BrewedAndYou! ${pageUrl}`

    const twitterApi = `https://twitter.com/intent/tweet?text=${message}`
    const facebookApi = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`


    return <div className="share__container">
        <h4>Share {props.name}</h4>
        <div className="social__btns--container">
        <button className="social__btn">
            <a 
                href={twitterApi}
                target="_blank"
                className="share__card"
            >
                <AiOutlineTwitter />
            </a>
        </button>
        <button className="social__btn">
            <a 
                href={facebookApi}
                target="_blank"
            >
                <FaFacebookF />
            </a>
        </button>
        <CopyToClipboard
            text={pageUrl}
        >
        <button className="social__btn copy__btn">
            <FaLink />
        </button>
        </CopyToClipboard>
        </div>
        
    </div>
}

export default ShareSocial;