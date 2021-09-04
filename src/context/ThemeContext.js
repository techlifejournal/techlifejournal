import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [theme, SetTheme] = useState([{ from: "#84fae6", to: "#81cff7" }, { from: "#667eea", to: "#764ba2" }])
    const LightThemes = [
        { from: "#bffddd", to: "#78ffd6" },
        { from: "#fbc2eb", to: "#a6c1ee" },
        { from: "#fccb90", to: "#d57eeb" },
        { from: "#a18cd1", to: "#fbc2eb" },
        { from: "#eecda3", to: "#ef629f" },
        { from: "#02aab0", to: "#00cdac" },
        { from: "#d4fc79", to: "#96e6a1" },

    ]
    const DarkThemes = [
        { from: "#667eea", to: "#764ba2" },
        { from: "#667eea", to: "#764ba2" },
        { from: "#667eea", to: "#764ba2" },
    ]
    const changeTheme = () => {
        SetTheme([random(LightThemes), random(DarkThemes)])
    }
    const random = (arr) => {
        return arr[Math.floor((Math.random() * arr.length))];
    }
    return (
        <ThemeContext.Provider value={[theme, changeTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
