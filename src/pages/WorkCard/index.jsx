import React from "react";
import { useContext } from "react";
import DarkModeContexte from "../../components/DarkModeContexte";
import ReactMarkdown from "react-markdown";

const WorkCard = (props) => {

    const { darkMode } = useContext(DarkModeContexte)

    return (
        <div className={darkMode ? "work-card bg-dark text-dark" : "work-card bg-light text-light" }>
            <ReactMarkdown>
                {props.content}
            </ReactMarkdown>
        </div>
    )
}

export default WorkCard