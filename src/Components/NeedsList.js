import React from "react"
import { Link } from "react-router-dom";
import { AiFillCaretRight, AiOutlineFileDone, AiOutlineDoubleRight } from "react-icons/ai";
import '../Style/App.css'; 

const  NeedsList = props =>{
    return (
        <div className="list__container">
            <AiOutlineFileDone
                className="list__card--icon"
            />
            <div className="list__content">
                <h2>Your shopping list:</h2>
                <div className="list__item">
                    <span>
                        <AiFillCaretRight />   
                        <p>{props.needOne}</p>
                    </span>
                    <button className={props.btnOne ? "find__btn" : "find__btn hide"}>
                        <a 
                            href={props.btnOne}
                            target="_blank"
                        >
                        Find it
                        </a>
                    </button>
                </div>
                <div className="list__item">
                    <span>
                        <AiFillCaretRight />   
                        <p>{props.needTwo}</p>
                    </span>
                    <button className={props.btnTwo ? "find__btn" : "find__btn hide"}>
                        <a 
                            href={props.btnTwo}
                            target="_blank"
                        >
                        Find it
                        </a>
                    </button>
                </div>
                <div className="list__item">
                    <span>
                        <AiFillCaretRight />   
                        <p>{props.needThree}</p>
                    </span>
                    <button className={props.btnThree ? "find__btn" : "find__btn hide"}>
                        <a 
                            href={props.btnThree}
                            target="_blank"
                        >
                        Find it
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NeedsList;