import React from "react";
import Discodata from '../Discover.json';
import {Link} from "react-router-dom";
import '../Style/App.css'
import { useGlobalContext } from '../context'

const Discover = () => {
    const {handleClick} = useGlobalContext()

return (
    <div className="discover">
        <h1 className="main__headline">Discover New Coffees</h1>
        <p className="discover__text">Travel the globe without leaving your home and learn new ways how coffee is enjoyed.</p>
        <div className="discover__container">
            {Discodata.map((discovery)=>{
                const {
                    index,
                    headline,
                    quote,
                    img,
                    category
                } = discovery
                return <div
                    key={index}
                >
                    <div 
                        className="discovery__link"
                        style={{ backgroundImage:`url(${img})` }}
                    >
                        <h3>{headline}</h3>
                        <p>{quote}</p>
                        <Link
                            to={`/discovery/${category}`}
                            onClick={handleClick}
                            className="discovery__link--btn"
                        >
                            explore
                        </Link>
                    </div>
                </div>
            })}
        </div>
    </div>
)
}

export default Discover