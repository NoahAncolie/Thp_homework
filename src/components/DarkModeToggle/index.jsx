import DarkModeContexte from "../DarkModeContexte";
import React, { useContext } from "react";

const DarkModeToggle = () => {

    const { darkMode, changeContexte } = useContext(DarkModeContexte)

    return (
        <label className="switch">
            <input type="checkbox" onClick={changeContexte} defaultChecked={darkMode}/>
            <span className={darkMode ? "slider switchOn" : "slider switchOf"}></span>
        </label>
    )
}

export default DarkModeToggle