import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/App.css'
import { useGlobalContext } from '../context'

const News = () => {
    const {handleClick, data} = useGlobalContext()

    return (
        <div className="list__page">
            {data.map((item) =>{
                if(item.type === 'news'){
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
                        to={`/news/${id}`}
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

export default News;