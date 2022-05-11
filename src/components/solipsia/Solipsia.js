import React from "react";
import "./solipsia.css";
import Phone from "./../../img/phone.png";
import Email from "./../../img/email.png";
import Address from "./../../img/address.png";


export const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // emailjs
        // .sendForm(
        //   "service_ixn1itp",
        //   "template_lchoizv",
        //   formRef.current,
        //   "user_Gg49d7CANuuvobHt5eJwl"
        // )
        // .then(
        //   (result) => {
        //     console.log(result.text);
        //     setDone(true)
        //   },
        //   (error) => {
        //     console.log(error.text);
        //   }
        // );
    };
    return (

        <div className="contact" id='solipsia'>
            <div className="c-left">
                <p className="c-desc">
                    <p>SolipsIA was created in March 2022 by <b>Samuel Rochette</b> with the purpose of providing software
                        development services in
                        the whole market.</p>
                    <b> What’s your story?</b> Get in touch. Always available to work with you if the right project
                    comes up.
                </p>
                <form className='formContact' onClick={handleSubmit}>
                    <input className='formInput'
                           type="text"
                           placeholder="Your Name"
                           name="user_name"/>
                    <input className='formInput'
                           type="text"
                           placeholder="Subject"
                           name="user_subject"/>
                    <input className='formInput'
                           type="text"
                           placeholder="Your Email"
                           name="user_email"/>
                    <textarea className='formTextArea'
                              rows="5"
                              placeholder="Write a Message"
                              name="message"/>
                    <button className='btnSend'>Submit</button>
                </form>
            </div>
            {/* fin div-left */}
            <div className="c-right">
                <h1 className="c-title">Get In Touch - SolipsIA</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon"/>
                        +33 7 81 60 75 57 - M Samuel ROCHETTE.
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Email} alt=""/>
                        samuel.rochette06@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Address} alt=""/>
                        6 rue d'armaille 75017 - Paris - France
                    </div>
                </div>
            </div>
            {/* fin div-right*/}

        </div>
    )

}