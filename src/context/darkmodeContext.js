import react, { createContext, useState, useEffect } from 'react';
export const DarkLightContext = createContext();

export default function DarkLightTheme(props) {

    const [isDark, setDark] = useState(null);
    useEffect(() => {
        setDark(localStorage.getItem('darkMode') === "true" ? true : false)
       
    }, [])
    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark')
            document.body.classList.add('bg-dark')
            localStorage.setItem('darkMode', "true")
        } else {
            document.body.classList.remove('dark')
            document.body.classList.remove('bg-dark')
            localStorage.setItem('darkMode', "false")
        }
       
    }, [isDark])
    
    return (
        <DarkLightContext.Provider value={[isDark, setDark]}>
            {props.children}
        </DarkLightContext.Provider>
    )
}


