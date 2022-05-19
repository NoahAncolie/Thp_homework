import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import DarkModeContexte from "../../components/DarkModeContexte";
import Navbar from "../Navbar/index";
import MenuPage from "../../pages/MenuPage";
import works from "../../Datas/studyCases";
import pages from "../../Datas/pages";


const Router = () => {

    const { darkMode } = useContext(DarkModeContexte)
    
    return (
        <div className={darkMode ? "bg-dark background" : "bg-light background"}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MenuPage content={pages.home}/>}/>
                    <Route path="/works/*" element={<MenuPage content={pages.works} works={works}/>}/>
                    <Route path="/about" element={<MenuPage content={pages.about} />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router