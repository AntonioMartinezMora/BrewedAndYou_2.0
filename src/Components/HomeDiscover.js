import React from "react"
import { Link } from "react-router-dom"
import '../Style/App.css'
import { BiWorld } from "react-icons/bi";
import { useGlobalContext } from '../context'

const HomeDiscover= props =>{
    const {handleClick} = useGlobalContext()

    return (
        <div className="home__discovery">
            <h1
            className="main__headline"
            >Discover coffees from around the world</h1>
            <p className="discover__text">Travel the globe without leaving your home and learn new ways how coffee is enjoyed.</p>
            <Link
                to={"/discover"}
                className="link__btn"
                onClick={handleClick}
            >
                Discover Coffees
            </Link>
            { <div className="home__page">
            {props.homeData.map((item)=>{
                if(item.hero === 'discover'){
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
                        className='world__link'
                        to={`/coffee/${id}`}
                        onClick={handleClick}
                    >
                        <img src={image}/>
                        <h6 className="world__list--link">
                            <BiWorld className="world__icon"/> {country}
                        </h6>
                        <div className="world__link--info">
                            <h3>
                                {title}
                            </h3>
                            <p>
                                {short}
                            </p>
                        </div>
                    </Link>
                }         
                }
            )}
            </div> }

        </div>

    )
}

export default HomeDiscover;