import { Category } from '@material-ui/icons';
import React, { useState } from 'react'
import { FiArrowUpRight, FiMinus, FiPlus } from 'react-icons/fi';
import { BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs';
import styled from 'styled-components'
function SideMenu() {
    const [Category, setCategoty] = useState(true);
    return (

        <>
            <button onClick={() => { setCategoty(!Category) }}
                className="flex items-center hover:bg-sidehover_lt dark:hover:bg-black px-2 py-3 md:p-4 gap-2">
                {Category ? <><BsFillCaretDownFill />  </> : <><BsFillCaretRightFill /> </>}
                <span>Category</span>
            </button>
            {Category && <DropDown className=" text-sm font-b px-2 py-3 md:p-4    grid grid-cols-2">
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