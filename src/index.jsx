import React, { useState } from 'react'
import './styles/style.scss'
import { createRoot } from 'react-dom/client';
import Router from './components/Routeur/index'
import DarkModeContexte from './components/DarkModeContexte/index'
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {

    const [mode, setMode] = useState(JSON.parse(localStorage.darkMode))

   

    const changeContexte = () => {
        setMode(!mode)
        localStorage.darkMode = JSON.stringify(!mode)
    }

    return (
            <DarkModeContexte.Provider value={{ darkMode: mode, changeContexte }}>
                <DarkModeToggle />
                <Router />
            </DarkModeContexte.Provider>
    )
}

//ReactDom.render(document.getElementsByTagName('body')[0], <App />)

createRoot(document.getElementById('root')).render(<App />)