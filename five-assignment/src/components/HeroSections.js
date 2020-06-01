import React, { useContext } from "react"
import MainContext from "../context/MainContext"
import AppTheme from "../Colors"

const HeroSections = () => {

    const theme = useContext(MainContext)[0]
    const currentTheme = AppTheme[theme]
    const [themeMode, setThemeMode] = useContext(MainContext);

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center",
            height: "700px"
        }}>
            <h1>Context API theme toggler Assignment</h1>
            <p>This is paragraph</p>
            <button style={{
                backgroundColor: "#26ae60",
                color: "#fff",
                padding: "10px 150px",
                fontSize: "20px",
                border: `${currentTheme.border}`
            }}
                onClick={() => {
                    setThemeMode(themeMode === "light" ? "dark" : "light")
                }}
            > Click me to toggle theme! </button>
        </div>
    )
}

export default HeroSections;