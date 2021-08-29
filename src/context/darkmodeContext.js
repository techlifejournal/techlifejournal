import react, { createContext, useState } from 'react';

export const DarkLightContext = createContext();

export default function DarkLightTheme(props) {
    const [isDark, setDark] = useState(localStorage.getItem('darkMode') ==="true" ? true : false);
    if (isDark) {
        document.body.classList.add('dark')
        document.body.classList.add('bg-dark')
        localStorage.setItem('darkMode' , "true")
    } else {
        document.body.classList.remove('dark')
        document.body.classList.remove('bg-dark')
        localStorage.setItem('darkMode' , "false")
    }
    return (
        <DarkLightContext.Provider value={[isDark, setDark]}>
            {props.children}
        </DarkLightContext.Provider>
    )
}


