import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import navs from "./navigations"
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import Sidebar from '../Sidebar';
function Nav() {
    const [search, setSearch] = useState(false);
    return (
        <section id = "navbar" className = "w-full fixed z-10" >
        <div className="px-3  h-16 items-center navfont bg-techlife w-full flex  ">
            {/* Left part of Navbar   */}
            <div id="left" className={`flex-1 text-white items-center   flex gap-2 cursor-pointer`}>      
                    <Sidebar />

                <div className={`titlefont ${search? 'hidden md:block' : 'block ' }  font-semibold`}>
                    <span className="text-gray-300">TECH</span>
                    <span className="text-gray-100">LIFE</span>
                    <span className="text-white">JOURNAL</span>  </div>
            </div>

            {/* Navigations   */}
            <div id="center" className="hidden  md:flex font-medium text-xs    text-white justify-center">
                {navs.map((ele, index) => {
                    return <div className={`   ${index ? "border-l-1 border-opacity-50" : ""} px-5  hover:opacity-70 cursor-pointer `}>
                        <span>{ele.name}</span>
                    </div>
                })}
            </div>

            {/*  Search Icon and UserIcon */}
            <div id="right" className="flex-1 text-white flex items-center gap-2 md:gap-6 justify-end">
                {!search ? <div className=" hover:opacity-70 cursor-pointer" onClick={() => { setSearch(true) }}> <SearchIcon /></div> :
                    <div className="  cursor-pointer"> <div className="pl-2 rounded-md flex items-center gap-1  bg-gray-100 text-black"> <div onClick={() => { setSearch(false) }}><SearchIcon /></div>
                        <input className="focus:outline-none  p-1 bg-transparent w-38 md:w-full" type="text" placeholder="Search.."></input>
                    </div></div>}

                <div className=" hover:opacity-70 cursor-pointer"> <PersonIcon /></div>

            </div>
        </div>
        </section>
    )
}

export default Nav;
