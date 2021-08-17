import React from 'react';
import navs from "./navigations"
import MenuIcon from '@material-ui/icons/Menu';
function Nav() {
    return (
        <div className="px-3 navfont h-16 items-center bg-techlife w-full flex justify-between ">
            <div id="left" className="text-white">
                <div>LOgo</div>
            </div>
            <div id="center" className="hidden md:flex   justify-center gap-5">
                {navs.map((ele) => {
                    return <div className="text-white ">{ele.name}</div>
                })}
            </div>
            <div id="right" className="text-white">
                <div>SignIn</div>
            </div>
        </div>
    )
}

export default Nav;
