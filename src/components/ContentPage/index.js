import React from 'react'
import styled from 'styled-components'
import { ContentData } from './ContentData'
import SideMenu from './SideMenu';
import {BsArrowRightShort} from 'react-icons/bs' 
function Index() {
    const rows = (n) => {
        return Math.round((ContentData.length + 1) / n).toString()
    }
    return (
        <section id="Content" className="flex   ">
            <SideMenu />
            <div className="w-full">
                <header className=" text-center flex justify-center border-t-1 border-b-1 border-gray-500" >
                    <p className="flex text-4xl p-3">A<BsArrowRightShort/>Z</p>
                </header>
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    grid-rows-${rows(1)} sm:grid-rows-${rows(2)}  md:grid-rows-${rows(3)} lg:grid-rows-${rows(4)} 
                    grid-flow-col border-1 gap-1  `}>
                    {ContentData.map((ele) => { 
                    return ele.section ?  <h1 className = "text-4xl">{ele.section}</h1>:
                    <div > <h2 className ="text-xl  font-bold">{ele.heading}</h2>
                    <div className="lowercase">
                    {
                        ele.sections.map((topic)=> {
                            return <a href = {topic.url} > {topic.name},</a>
                        })
                    }
                    </div>
                    </div> 
                    
                    })}
                </div>
            </div>



        </section>
    )
}

export default Index


