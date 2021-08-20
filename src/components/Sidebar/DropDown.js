import { Category } from '@material-ui/icons';
import React, { useState } from 'react'
import { FiArrowUpRight, FiMinus, FiPlus } from 'react-icons/fi';
import { BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs';
import styled from 'styled-components'
function SideMenu() {
    const [Category, setCategoty] = useState(true);
    return (

            <div className="p-4">
                <button onClick={() => { setCategoty(!Category) }}
                    className="flex items-center text-lg  cursor-pointer">
                    {Category?<><BsFillCaretDownFill/>  <FiMinus/> </> :<><BsFillCaretRightFill/> <FiPlus /> </>}
                    Category
                </button>
                {Category && <DropDown className="uppercase font-semibold text-gray-100 hover:text-gray-500 grid grid-cols-2">
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
            </div>

    )
}

export default SideMenu
const DropDown = styled.div`
a:hover {
    color: white;
    cursor: pointer;
}
`