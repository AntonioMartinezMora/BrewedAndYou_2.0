import React from "react";
import { Link } from "react-router-dom"

function Error(){
    return (
        <div className="page__container error__container">
            <div className="error__img">
                <img src="https://media.publit.io/file/w_1280/MainImages/error_illustration.jpg"/>
            </div>
            <Link
                className="error__btn"
                to={"/"}
            >
                Back to homepage
            </Link>
        </div>
    )
}

export default Error;