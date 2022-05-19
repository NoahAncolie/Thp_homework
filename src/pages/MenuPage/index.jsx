import DarkModeContexte from "../../components/DarkModeContexte";
import React, { useContext } from "react"
import ReactMarkdown from "react-markdown";
import WorkCard from "../WorkCard";
import { Link, Routes, Route } from "react-router-dom";

const MenuPage = (props) => {

    const { darkMode } = useContext(DarkModeContexte)
    const { works, content } = props

    return (
        <div className={darkMode ? "bg-dark" : "bg-light"}>
            <ReactMarkdown className={darkMode ? "text-dark" : "text-light"}>
                {content}
            </ReactMarkdown>
            {works ? works.map(elem =>
                    <Link to={`/works/${elem.name}`}  className={darkMode? "a-dark enterprise" : "a-light enterprise"}>{`${elem.name}`}<br/></Link>
                ) : <></>}
            <Routes>
                {works ? works.map(elem =>
                    <Route path={`/${elem.name}`} element={<WorkCard content={elem.content} key={elem.id} />} />
                ) : <></>}
            </Routes>
        </div>
    )
}

export default MenuPage