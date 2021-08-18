import SidebarRow from './SidebarRow.js'
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import MenuIcon from '@material-ui/icons/Menu';
function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <SidebarWrapper>
            <div>
                <div className="cursor-pointer hover:opacity-70">
                    <MenuIcon onClick={showSidebar} />
                </div>

                <div className={sidebar ? 'sidebar-menu active ' : 'sidebar-menu'}>
                    <div className='menu-items w-full' onClick={showSidebar}>
                        <div className='flex items-center'>

                            <div className="px-3 py-5 hover:opacity-70 "><CloseIcon /></div>
                            <div className="titlefont pr-2 hidden md:block font-semibold">
                                <span className="text-gray-300">TECH</span>
                                <span className="text-gray-100">LIFE</span>
                                <span className="text-white">JOURNAL</span>  </div>
                        </div>
                        <div className="flex flex-col ">
                            {SidebarData.map((item, index) => {
                                return (
                                    <div key={index} className={item.cName}>

                                        <SidebarRow name={item.title} icon={item.icon} />

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
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
    overflow-y : scroll;
    top: 0rem;
    background-color: #212121;
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
}


`