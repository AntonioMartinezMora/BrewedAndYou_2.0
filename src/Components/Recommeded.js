import React from 'react';
import { Link } from "react-router-dom";
import '../Style/App.css'; 
import { BiWorld } from "react-icons/bi";
import { useGlobalContext } from '../context'

function Recommended(){
    const {handleClick, data} = useGlobalContext()

    // shuffle data
    const shuffleData = data.sort(() => 0.5 - Math.random());
    // pick 3 items from shuffle data
    const selectedItems = shuffleData.slice(0, 3)

    return (
        <div className="recommended__container">
            {selectedItems.map((item)=>{
                if(item.type === 'discover'){
                    const {
                        id,
                        index,
                        image,
                        title,
                        country,
                        short
                    } = item
                    return<Link
                            key={index}
                            className="list__link"
                            to={`/coffee/${id}`}
                            onClick={handleClick}
                        >   
                            <img src={image}/>
                            <h6 className="country__list--link">
                                <BiWorld className="world__icon"/> {country}
                            </h6>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {short}
                        </p>
                        </Link>
                }
                
            })}
        </div>
    )
}

export default Recommended;