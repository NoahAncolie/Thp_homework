import { createContext } from "react";

const newLocal = null;
const DarkModeContexte = localStorage.darkMode ? createContext({ darkMode: JSON.parse(localStorage.darkMode), changeContexte: newLocal}) :  createContext({ darkMode: JSON.parse(localStorage.darkMode = "false"), changeContexte: newLocal})

export default DarkModeContexte