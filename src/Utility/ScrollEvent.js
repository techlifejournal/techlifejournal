import React, { useEffect, useState } from 'react'

export const useScroll = () => {
    const [offset, setOffset] = useState(0);
    window.onscroll = () => {
        setOffset(window.pageYOffset)
    }
    return (
        offset
    )
}


