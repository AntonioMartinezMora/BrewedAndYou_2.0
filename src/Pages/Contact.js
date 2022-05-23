import React from "react";
import '../Style/App.css'; 

const Contact = () => {
    return (
        <div className="page__container">
            <h1 className="page__headline">
                Contact Us
            </h1>
            <div className="contact__container">
                <form 
                    name="contact-form" 
                    method="POST"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="contact-form" />
                    <p>Have a question?, Want to know anything about us?,Can we help you with something and just want to say something? Send us an email!</p>
                    <div className="form__top">
                        <input type="text" name="name" id="name" placeholder="Full Name"/>
                        <input type="email" name="email" id="email" placeholder="Email Address" />
                    </div>
                    
                    <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button type="submit" className="submit__btn">
                        send
                    </button>
                </form>
                <div className="contact__illustration">
                    <img src="https://media.publit.io/file/w_1280/MainImages/contact__iluustration.png" />
                </div>
            </div>
        </div>
    )
}

export default Contact;