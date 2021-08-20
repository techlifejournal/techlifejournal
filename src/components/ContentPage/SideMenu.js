import { Category } from '@material-ui/icons';
import React, { useState } from 'react'
import { FiArrowUpRight, FiMinus, FiPlus } from 'react-icons/fi';
import { BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs';
import styled from 'styled-components'
function SideMenu() {
    const [Category, setCategoty] = useState(true);
    return (

        <sidebar className=" w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5   border-gray-500 border-r-2 border-t-2 ">
            <div className="w-44">
                <a className="m-3 text-2xl flex flex-col">
                    <span className="font-bold">techlifejournal</span>
                    <span className=" font-bold flex justify-between "><span>.com </span><FiArrowUpRight /></span>
                </a>
            </div>
            <div className="m-5">
                <button onClick={() => { setCategoty(!Category) }}
                    className="flex items-center text-lg font-semib cursor-pointer">
                    {Category?<><BsFillCaretDownFill/>  <FiMinus/> </> :<><BsFillCaretRightFill/> <FiPlus /> </>}
                    Category
                </button>
                {Category && <DropDown className="uppercase font-semibold text-gray-700 hover:text-gray-500 grid grid-cols-2">
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


        </sidebar>

    )
}

export default SideMenu
const DropDown = styled.div`
a:hover {
    color: black;
    cursor: pointer;
}
`