import React from 'react'
import * as FiIcons from 'react-icons/fi';
function SideMenu() {
    return (
        
            <sidebar className=" w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5  border-gray-500 border-r-2 border-t-2 ">
                <div className = "w-44">
                <a className="m-3 text-2xl flex flex-col">
                    <span className="font-bold">techlifejournal</span>
                    <span className=" font-bold flex justify-between "><span>.com </span><FiIcons.FiArrowUpRight /></span>
                </a>
                </div>
            </sidebar>

    )
}

export default SideMenu
