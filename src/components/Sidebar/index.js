import SidebarRow from './SidebarRow.js'
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import MenuIcon from '@material-ui/icons/Menu';
import DropDown from './DropDown'
function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <SidebarWrapper>
            <>

                <div className="items-center cursor-pointer hover:opacity-70" >
                    {!sidebar ?
                        <MenuIcon onClick={showSidebar} /> : <CloseIcon onClick={showSidebar} />}
                </div>

                <div className={sidebar ? 'sidebar-menu bg-sidenav active ' : 'sidebar-menu bg-sidenav' }>
                    <div className='menu-items w-60 md:w-72 ' >
                        <div className="flex flex-col ">
                            {SidebarData.map((item, index) => {
                                return (
                                    <div key={index} className={item.cName}>

                                        <SidebarRow name={item.title} icon={item.icon} />

                                    </div>
                                );
                            })}

                            <DropDown />
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
}


`