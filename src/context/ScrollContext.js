import react, { createContext, useState, useEffect } from 'react';

export const ScrollContext = createContext();


function ScrollContextProvider(props) {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, [])

    return (
        <ScrollContext.Provider value={offset}>
            {props.children}
        </ScrollContext.Provider>
    )
}

export default ScrollContextProvider
