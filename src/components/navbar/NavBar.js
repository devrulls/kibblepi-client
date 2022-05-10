import React from "react";
import "./Navbar.css";
import {Mail} from "@material-ui/icons";


export const NavBar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='tb-left'>
                    <a href='#home' className='logo'>KIBBLEPI</a>
                    <div className="itemContainer">
                        {/*<Person className='tb-icon'/> */}
                        {/*<img src={Me} alt='yo' className='tb-imgRj'/>*/}

                        <span className=''>Concepteur Développeur d’applications</span>
                    </div>
                </div>
                <div className='tb-right'>
                    <div className="itemContainer">
                        <Mail className='tb-icon animate__animated animate__backInRight'/>
                        <span className='tb-mrigth'>devrulls@gmail.com</span>
                    </div>
                    <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>);

}