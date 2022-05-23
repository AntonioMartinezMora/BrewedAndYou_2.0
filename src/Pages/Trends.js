import React from 'react'
import { Link } from "react-router-dom";
import '../Style/App.css'
import { useGlobalContext } from '../context'

const Trends = ( ) => {
    const {data, handleClick} = useGlobalContext()

    return (
    <div className="list__page">
        {data.map((item) =>{
            if(item.type === 'trends'){
                // console.log(data)
                const {
                    id,
                    index,
                    image,
                    title,
                    short,
                    date
                } = item
                return<Link
                    key={index}
                    className='list__link'
                    to={`/trends/${id}`}
                    onClick={handleClick}
                >
                    <img src={image}/>
                    <small>
                        {date}
                    </small>
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

export default Trends;