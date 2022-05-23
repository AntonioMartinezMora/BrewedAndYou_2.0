import React from "react";
import '../Style/App.css'; 

const CoffeeInfo = props =>{
    return (
        <div className="coffee__information">
            <p className="text__information">{props.descript}</p>
            <h3 className="info__headline">Recipe</h3>
            <p className="text__information">{props.recipe}</p>
        </div>
    )
}

export default CoffeeInfo;