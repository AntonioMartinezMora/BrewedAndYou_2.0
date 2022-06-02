import React from "react";
import { useParams } from "react-router-dom";
import CoffeeInfo from "../Components/CoffeeInfo";
import NeedsList from '../Components/NeedsList';
// import ShareSocial from '../Components/ShareSocial';
import ShareSocial from '../Components/ShareSocial'
import Recommended from "../Components/Recommeded";
import '../Style/App.css'; 
import { BiWorld } from "react-icons/bi";
import { useGlobalContext } from '../context'

function Coffee(){
    const {id} = useParams()
    const {coffeeData} = useGlobalContext()

    return (
        <div className="coffee__container">
            {coffeeData.map((item) =>{
                if(item.id === id){
                    const {
                        id,
                        index,
                        image,
                        category,
                        country,
                        title,
                        descript,
                        recipe,
                        needOne,
                        needTwo,
                        needThree,
                        btnOne,
                        btnTwo,
                        btnThree
                    } = item
                    // const newCoffee = {
                    //     id, image, category, country, name, descript, recipe, index, needOne, needTwo, needThree, btnOne, btnTwo, btnThree
                    // }
                    return(
                        <div 
                            className="coffee__page"
                            key={index}
                        >
                            <img src={image}/>
                            <div className="coffee__info">
                                <h1 className="main__headline left">{title}</h1>
                                <div className="small__info">
                                    <small className="country small__info">
                                    <BiWorld className="world__icon"/> 
                                        {country}
                                    </small>
                                    <small className="type small__info">
                                        {category} coffee
                                    </small>
                                </div>
                            </div>
                            <div className="coffee__info--container">   
                                <div className="main__body">
                                <CoffeeInfo 
                                    descript={descript}
                                    recipe={recipe}
                                />
                                <ShareSocial 
                                    name={title}
                                />
                                </div>
                                
                                <div className="side__bar">
                                <NeedsList 
                                    needOne={needOne}
                                    needTwo={needTwo}
                                    needThree={needThree}
                                    btnOne={btnOne}
                                    btnTwo={btnTwo}
                                    btnThree={btnThree}
                                />
                                </div>
                                <h1 className="headline__bg">
                                Discover more:
                            </h1>
                            </div>

                        </div>
                    )
                }
            })}
            <Recommended />
        </div>
        
    )
}

export default Coffee;