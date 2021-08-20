import React from 'react'
import styled from 'styled-components'
import { ContentData } from './ContentData'
import SideMenu from './SideMenu';

function Index() {
    const rows = (n) => {
        return Math.round((ContentData.length + 1) / n).toString()
    }
    return (
        <section id="Content" className="flex   ">
            <SideMenu />
            <div className="w-full">
                <header className="  bg-gray-900 text-white" >
                    <p className="text-4xl">Header </p>
                </header>
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    grid-rows-${rows(1)} sm:grid-rows-${rows(2)}  md:grid-rows-${rows(3)} lg:grid-rows-${rows(4)} 
                    grid-flow-col border-1 gap-1  `}>
                    {ContentData.map((ele) => { return ele })}
                </div>
            </div>



        </section>
    )
}

export default Index


