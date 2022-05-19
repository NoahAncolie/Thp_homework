import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DarkModeContexte from "../DarkModeContexte";

const Navbar = () => {

    const { darkMode } = useContext(DarkModeContexte)

    return (
        <div className={darkMode? "outerNav bg-dark" : "outerNav bg-light"}>
            <nav className={darkMode ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-light bg-light"}>
                <h3 className="navbar-brand">Nice Agency Website</h3>
                <p ><Link className={darkMode? "a-dark" : "a-light"} to="/">Home</Link></p>
                <p ><Link className={darkMode? "a-dark" : "a-light"} to="/works/*">Works</Link></p>
                <p ><Link className={darkMode? "a-dark" : "a-light"} to="/about">About</Link></p>
            </nav>
        </div>
    )
}

export default Navbar