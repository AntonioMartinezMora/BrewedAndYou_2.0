import React from "react";
import { Link } from 'react-router-dom'
import '../Style/App.css'
import { useGlobalContext } from '../context'

const Hero = props => {
    const {handleClick} = useGlobalContext()

    return (
        <div className="hero">
            <div className="hero__main">
                {props.homeData.map((item)=>{
                    if(item.hero === 'main'){
                        const {
                            id,
                            type,
                            index,
                            image,
                            title,
                            short
                        } = item
                        return(
                        <Link
                            to={`/${type}/${id}`}
                            key={index}
                            className="hero__main--link"
                            onClick={handleClick}
                        >
                            <img src={image} />
                            <h6
                               className="hero__tag" 
                            >{type}</h6>
                            <h3>{title}</h3>    
                            <p>{short}</p>    
                        </Link> 
                        )
                    }
                })}
            </div>
            <div className="hero__side">
                {props.homeData.map((item)=>{
                    if(item.hero === 'side'){
                        const {
                            id,
                            type,
                            index,
                            image,
                            title,
                            short
                        } = item
                        return(
                        <Link
                            to={`/${type}/${id}`}
                            key={index}
                            className="hero__side--link"
                            onClick={handleClick}
                        >
                            <div 
                                className="img__cont"
                                style={{ backgroundImage:`url(${image})` }}
                            >   
                            </div>

                            <div className="hero__side--info">
                                <h6
                                className="hero__tag" 
                                >{type}</h6>
                                <h3>{title}</h3>    
                                <p>{short}</p>    
                            </div>
                        </Link> 
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Hero;