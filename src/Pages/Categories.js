import React from "react";
import { Link, useParams } from "react-router-dom";
import '../Style/App.css'; 
import { BiWorld } from "react-icons/bi";
import { useGlobalContext } from '../context'

function Categories(){
    let { category } = useParams()
    const {data, handleClick} = useGlobalContext()

    return (
        <div className="list__page">
            {data.map((item)=>{
                if(item.category === category){
                    const {
                        id,
                        index,
                        image,
                        title,
                        short,
                        country
                    } = item
                    return<Link
                        key={index}
                        className='list__link'
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

export default Categories;