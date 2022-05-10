import React from "react";
import './home.css';


export const Home = () => {
    return (
        <div className="intro" id="home">
            <div className="left">
                <div className="i-bg"></div>
                {/* <div className="imgContainer">
        <img src={Me} alt="Big Boss"/>
        </div> */}
            </div>
            {/* fin div Classname = "intro-left" */}
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm hungry</h2>
                    <h2>Could you serve me some croquettes?</h2>

                </div>
                {/* fin div Classname = "intro-right" */}
                <a href="#portfolio">
                    <img src="icon/iconsJAVA240.png" alt=""/>
                    <img src="icon/iconHTML240.png" alt=""/>
                    <img src="icon/iconJS240.png" alt=""/>
                    <img src="icon/iconREACT240.png" alt=""/>
                    <img src="icon/iconPHP240.png" alt=""/>
                    <img src="icon/iconSQL240.png" alt=""/>
                </a>
            </div>
        </div>

    )

}