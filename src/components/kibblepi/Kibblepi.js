import React from "react";
import './kibblepi.css';

export const Kibblepi = () => {
    return (
        <div className="kibblepi" id="kibblepi">
            <div className="kibblepi-left">left</div>
            <div className="kibblepi-right">
                <h1 className="kibblepi-title">Kibblepi Project - Developed at SolipsIA</h1>
                <p className="kibblepi-sub">
                    Hello my name is Raul HERNANDEZ, This is an internship project developed at SolipsIA to validate the
                    skills acquired in the professional title "Concepteur Développeur d’applications" at the GRETA
                    Littoral - Montpellier.
                </p>
                <p className="kibblepi-desc">
                    This project consists in the creation of a cat kibble distributor, called "Kibblepi", this
                    distributor will allow you to feed your pet whenever you want, through a web application developed
                    with the React framework and server side developed with the micro-framework flask. (Flask is a
                    micro web framework written in Python. It is classified as a microframework because it does not
                    require particular tools or libraries).
                </p>


                <form className='formAboutMe'>
                    <button className='btnKibblepi'>Food service</button>
                    <button className='btnKibblepi'>Documentation</button>
                </form>
            </div>
        </div>
    )
}