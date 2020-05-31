import React, { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <div onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light")
        }}>
            <span>{themeMode === "light" ? "Switch to Dark Mode" : "Light Mode"}</span>
        </div>
    )
}

export default ThemeToggler