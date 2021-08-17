import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import navs from "./navigations"
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

function Nav() {
    const [search, setSearch] = useState(false);
    return (
        <div className="px-3  h-16 items-center navfont bg-techlife w-full flex justify-between ">
            <div id="left" className="text-white flex gap-2 cursor-pointer">
                <MenuIcon />
                <div className="titlefont font-semibold">
                    <span className="text-gray-300">TECH</span>
                    <span className="text-gray-100">LIFE</span>
                    <span className="text-white">JOURNAL</span>  </div>
            </div>
            <div id="center" className="hidden md:flex font-medium text-xs    text-white justify-center">
                {navs.map((ele, index) => {
                    return <div className={`   ${index ? "border-l-1 border-opacity-50" : ""} px-5  hover:opacity-70 cursor-pointer `}>
                        <span>{ele.name}</span>
                    </div>
                })}
            </div>
            <div id="right" className="text-white flex items-center gap-6 justify-evenly">
                {!search ? <div className=" hover:opacity-70 cursor-pointer" onClick={() => { setSearch(true) }}> <SearchIcon /></div> :
                    <div className="  cursor-pointer"> <div className="pl-2 rounded-md flex items-center gap-1  bg-gray-100 text-black"> <div onClick={() => { setSearch(false) }}><SearchIcon /></div>
                        <input className="focus:outline-none  p-1 bg-transparent w-28 md:w-full" type="text" placeholder="Search.."></input>
                    </div></div>}

                <div className=" hover:opacity-70 cursor-pointer"> <PersonIcon /></div>

            </div>
        </div>
    )
}

export default Nav;
