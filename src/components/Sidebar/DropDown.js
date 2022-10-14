import React, { useState } from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs';
import styled from 'styled-components'
function SideMenu() {
    const [category, setCategory] = useState(true);
    return (
        <>
            <button onClick={() => setCategory(p => !p)}
                className="flex items-center hover:bg-gray-500 hover:bg-opacity-20 dark:hover:bg-opacity-20 dark:hover:bg-white px-2 py-3 md:p-4 gap-2">
                <BsFillCaretDownFill className={`transition-transform transform ${category ? '' : '-rotate-90'}`} />
                <span>Category</span>
            </button>
            {category && <DropDown className=" text-sm font-b px-2 py-3 md:p-4    grid grid-cols-2">
                <a>Python</a>
                <a>JavaScript</a>
                <a>C++</a>
                <a>C</a>
                <a>C#</a>
                <a>Java</a>
                <a>Rust</a>
                <a>Go</a>
                <a>Kotlin</a>
                <a>TypeScript</a>
            </DropDown>}
        </>

    )
}

export default SideMenu
const DropDown = styled.div`
a:hover {
    cursor: pointer;
    text-decoration : underline;
}
`