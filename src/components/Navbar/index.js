import React, { useState, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import navs from "./navigations"
import PersonIcon from '@material-ui/icons/Person';
import Sidebar from '../Sidebar';
import DarkLightBtn from './DarkLightToggle'
import Style from '../../../styles/Home.module.css'
import { ScrollContext } from '../../context/ScrollContext'
import { AuthContext } from '../../context/authContext'
import Link from 'next/link'
function Nav() {
    const scroll = useContext(ScrollContext);
    const [search, setSearch] = useState(false);
    const { isAuthenticated, isLoading, setAuth } = useContext(AuthContext)
    return (
        <section id="navbar" className="w-full fixed  z-10 shadow-lg" >
            <div className={`px-3 h-14 md:h-16 items-center   ${scroll < 50 ? 'bg-transparent' : "bg-light  dark:bg-dark "} ${Style.navFont}  w-full flex  `}>
                {/* Left part of Navbar   */}
                <div id="left" className={`flex-1 items-center  md:ml-2 flex gap-2 cursor-pointer`}>
                    <Sidebar />
                    <div className={` ${search ? 'hidden md:block' : 'block '} sm:text-xl items-center  ml-2 font-semibold`}>
                        TECHLIFEJOURNAL </div>
                </div>
                {/* Navigation   */}
                <div id="center" className="hidden  md:flex font-semibold text-xs    justify-center">
                    {navs.map((ele, index) => {
                        return <a href={ele.href} className={`   ${index ? "border-black dark:border-white border-l-1 border-opacity-50" : ""} px-5   hover:opacity-50  cursor-pointer `}>
                            <span>{ele.name}</span>
                        </a>
                    })}
                </div>
                {/*  Search Icon and UserIcon */}
                <div id="right" className="  flex-1  flex items-center gap-2 md:gap-6 justify-end">
                    {!search ? <div className=" hover:opacity-70 cursor-pointer" onClick={() => { setSearch(true) }}> <SearchIcon /></div> :
                        <div className="  cursor-pointer"> <div className="pl-2 rounded-md flex items-center gap-1 border-1 border-gray-300 dark:border-gray-500"> <div onClick={() => { setSearch(false) }}><SearchIcon /></div>
                            <input className="focus:outline-none  p-1 bg-transparent w-36  sm:w-38 md:w-full" type="text" placeholder="Search.."></input>
                        </div></div>}
                    {isAuthenticated ?
                        <div className="hover:opacity-70 cursor-pointer hidden sm:block"><Link href="/user" ><PersonIcon /></Link></div> :
                        <Link href="/login" ><a className="p-2 bg-blur">Login</a></Link>
                    }
                    <DarkLightBtn />
                </div>
            </div>
        </section>
    )
}

export default Nav;
