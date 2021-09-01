import react, { createContext, useState } from 'react';

export const ScrollContext = createContext();


function ScrollContextProvider(props) {
    const [offset, setOffset] = useState(0);
    window.onscroll = () => {
        setOffset(window.pageYOffset)
    }
    return (
        <ScrollContext.Provider value={offset}>
            {props.children}
        </ScrollContext.Provider>
    )
}

export default ScrollContextProvider
