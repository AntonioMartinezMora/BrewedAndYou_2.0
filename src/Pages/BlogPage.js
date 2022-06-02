import React from "react";
import { useParams } from "react-router-dom";
import '../Style/App.css'; 
import KeepReading from "../Components/KeepReading";
import Recommended from "../Components/Recommeded";
import { useGlobalContext } from '../context'

function BlogPage() {
    const {id} = useParams()
    const {coffeeData} = useGlobalContext()

    return (
        <div className="blog__container">
            {coffeeData.map((item)=>{
                if(item.id === id){
                    const {
                        index,
                        image,
                        title,
                        short,
                        descript,
                        date,
                        type
                    } = item
                    return(
                        <div 
                            className="blog__page"
                            key={index}
                        >
                            <div className="blog__body">
                                <h1 className="main__headline left">{title}</h1>
                                <p className="short__info">{short}</p>
                                <small className="blog__date">{date}</small>
                                <img src={image} />
                                <p className="text__information">{descript}</p>
                            </div>
                            <div className="blog__sidebar">
                                <KeepReading 
                                    type={type}
                                />
                            </div>
                        </div>
                    )
                }
            })}
            <h1 className="headline__bg">
            Discover more: </h1>
            <Recommended/>
        </div>
    )
}

export default BlogPage;