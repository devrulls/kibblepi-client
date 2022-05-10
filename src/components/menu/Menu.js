import React from "react";
import './menu.css';

export const Menu = ({menuOpen, setMenuOpen}) => {
  return (
        <div className={"menu " + (menuOpen && 'active')}>
            <ul className='menuHamburguer'>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#home">home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#kibblepi">kibblepi</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#solipsia">solipsia</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#resume">solipsia</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a className='menuLink' href="#contact">contact</a>
                </li>
            </ul>
        </div>
    );
}