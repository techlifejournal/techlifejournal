import React from 'react'

import * as FiIcons from 'react-icons/fi';
function Index() {
    return (
        <section className = "h-screen flex items-center justify-center" >
            <div className = "text-3xl md:text-6xl animate-bounce  flex flex-col">
                <span className = "font-bold">techlifejournal</span>
                <span className = " font-bold flex justify-between"><span>.com </span><FiIcons.FiArrowUpRight/></span>
               
            </div>
        </section>
    )
}

export default Index
