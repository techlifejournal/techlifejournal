import SidebarRow from './SidebarRow.js'
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import React, { useState, useContext } from 'react';
import { SidebarData } from './SidebarData';
import MenuIcon from '@material-ui/icons/Menu';
import DropDown from './DropDown'
import Style from '../../../styles/Home.module.css'
import { ScrollContext } from '../../context/ScrollContext'
import { DarkLightContext } from '../../context/darkmodeContext'
import { useRouter } from 'next/router'
import Link from 'next/link';
import navigations from '../Navbar/navigations.js';
function Sidebar() {
    const scroll = useContext(ScrollContext);
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(prev => !prev);
    const router = useRouter()
    return (
        <SidebarWrapper>
            <>
                <div className="items-center transition-opacity duration-100 cursor-pointer hover:opacity-70" >
                    {!sidebar ?
                        <MenuIcon onClick={toggleSidebar} /> : <CloseIcon onClick={toggleSidebar} />}
                </div>
                <div className={`sidebar-menu   ${sidebar && 'active'} ${scroll < 50 && router.pathname === '/' ? Style.blur : 'bg-nav_lt dark:bg-dark'}`}>
                    <div className='flex  menu-items w-60 md:w-72 ' >
                        <div className={`flex flex-col w-full z-10 ${Style.navFont}`}>
                            {navigations.map((item, index) => {
                                return (
                                    <Link href={item.href} key={index} ><div key={index} className={item.name + ' block lg:hidden'}>
                                        <SidebarRow name={item.name} icon={item.icon} />
                                    </div></Link>
                                );
                            })}
                            {SidebarData.map((item, index) => {
                                return (
                                    <Link href={item.path} key={index} ><div key={index} className={item.cName}>
                                        <SidebarRow name={item.title} icon={item.icon} />
                                    </div></Link>
                                );
                            })}
                            <DropDown />
                        </div>
                        <div className="absolute h-full z-0 w-screen" onClick={toggleSidebar} >

                        </div>
                    </div>
                </div>
            </>
        </SidebarWrapper>
    );
}

export default Sidebar;

const SidebarWrapper = styled.div`
.sidebar {
    background-color: #060b26;
    display: flex;
    justify-content: start;
    align-items: center;
}

.sidebar-menu {

    top: 4rem;
    box-shadow: 10px 3px 5px rgba(0, 0, 0, 0.1);;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    left: -100%;
    transition: 850ms;
    ::-webkit-scrollbar {
        width: 0.25rem;
    background-color: white;
}
::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
    background-color: black;
    outline: 1px solid gray;
}
@media only screen and (max-width: 768px) {
    top : 3.5rem;
}

}
.sidebar-menu.active {
    left: 0;
transition: 350ms;
}

.sidebar-toggle {
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
}`