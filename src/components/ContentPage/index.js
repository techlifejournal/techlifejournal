import React from 'react'
import { ContentData } from './ContentData'
import { BsArrowRightShort } from 'react-icons/bs'
import { FiArrowUpRight } from 'react-icons/fi'
function Index() {
    const rows = (n) => {
        console.log(Math.round((ContentData.length + 1) / n).toString())
        return Math.round((ContentData.length + 1) / n).toString()
    }
    return (
        <section id="Content" className="flex  m-3 shadow-2xl sm:m-5 md:mx-14 border-l-1  border-r-1 border-gray-500 ">

            <div className="w-full">
                <header className=" text-center flex justify-center border-t-1 border-b-1 border-gray-500" >
                    <p className="flex text-4xl p-3">A<BsArrowRightShort />Z</p>
                </header>
                <div className={`grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    grid-rows-${rows(1)} sm:grid-rows-${rows(2)}  md:grid-rows-${rows(3)} lg:grid-rows-${rows(4)} 
                    grid-flow-col   `}>
                    {ContentData.map((ele, index) => {
                        return <><div className="px-2 border-r-1 border-gray-500"
                        >{ele.section && <h1 className="text-4xl">{ele.section}

                        </h1>}  <div className="flex items-end gap-1">
                                <h2 className="text-xl  font-bold"> {ele.heading}</h2><div className="w-full mb-1 border-b-1 border-black border-dashed "></div>
                                <FiArrowUpRight style={{ fontSize: "1.5rem" }} />
                            </div>
                            <div className="lowercase">
                                {
                                    ele.sections.map((topic) => {
                                        return <a href={topic.url} > {topic.name},</a>
                                    })
                                }
                            </div>
                        </div>
                        </>
                    })}
                </div>
            </div>



        </section>
    )
}

export default Index


