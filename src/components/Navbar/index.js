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
            <div className={`px-3 h-14 md:h-16 items-center transition-colors  ${scroll < 50 ? 'bg-transparent' : "bg-light  dark:bg-dark "} ${Style.navFont}  w-full flex  `}>
                {/* Left part of Navbar   */}
                <div id="left" className={`flex-1 items-center  md:ml-2 flex gap-2 cursor-pointer`}>
                    <Sidebar />
                    <Link href="/" passHref><a className={` ${search ? 'hidden md:block  ' : 'x-sm:block '} hidden   sm:text-xl items-center  ml-2 font-semibold`}>
                        TECHLIFEJOURNAL </a></Link>
                </div>
                {/* Navigation   */}
                <div id="center" className="hidden  lg:flex font-semibold text-xs    justify-center">
                    {navs.map((ele, index) => {

                        return <>
                            {index ? <span className='border-black dark:border-white border-l-1 border-opacity-50'></span> : <></>}
                            <Link key={index} href={ele.href} ><a key={index} className={`px-5 transition-opacity duration-100  hover:opacity-60  cursor-pointer uppercase  `}> <span>{ele.name}</span>
                            </a></Link>
                        </>
                    })}
                </div>
                {/*  Search Icon and UserIcon */}
                <div id="right" className=" w-full lg:flex-1  flex items-center gap-1 sm:gap-3 md:gap-5 justify-end">
                    {!search ? <div className=" transition-opacity hover:opacity-70 cursor-pointer" onClick={() => { setSearch(true) }}> <SearchIcon /></div> :
                        <div className="  cursor-pointer"> <div className="w-full pl-2 rounded-md flex items-center gap-1 border-1 border-gray-800 dark:border-white"> <div onClick={() => { setSearch(false) }}><SearchIcon /></div>
                            <input autoFocus className="focus:outline-none placeholder-gray-600 dark:placeholder-gray-300  p-1 bg-transparent w-full " type="text" placeholder="Search.."></input>
                        </div></div>}
                    {isAuthenticated ?
                        <div className="transition-opacity hover:opacity-70 cursor-pointer  sm:block"><Link href="/user" ><PersonIcon /></Link></div> :
                        <Link href="/login" ><a className="p-2 font-semibold transition-opacity hover:opacity-70">Login</a></Link>
                    }
                    <DarkLightBtn />
                </div>
            </div>
        </section>
    )
}

export default Nav;
