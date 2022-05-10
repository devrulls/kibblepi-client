import React, {useState} from "react";
import './App.css';
import {NavBar} from "./components/navbar/NavBar";
import {Menu} from "./components/menu/Menu";
import {Home} from "./components/home/Home";
import {Kibblepi} from "./components/kibblepi/Kibblepi";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Home/>
                <Kibblepi/>
            </div>
        </div>
    );
}

export default App;
