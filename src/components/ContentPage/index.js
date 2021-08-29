import React, { useContext } from 'react'
import { ContentData } from './ContentData'
import { BsArrowRightShort } from 'react-icons/bs'
import { FiArrowUpRight } from 'react-icons/fi'
import Header from './Header'
import { DarkLightContext } from '../../context/darkmodeContext'
function Index() {
    const [dark, setDark] = useContext(DarkLightContext)
    return (
        <section id="content" className="flex-col m-3 shadow-2xl sm:m-5 md:mx-14 border-1  pb-5 border-gray-500 ">
                <Header />
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {ContentData.map((ele, index) => {
                        return <>
                            <div className="px-2 border-r-1 border-gray-500 heading-fill-left  "
                            >{ele.section ? <h1 className="text-4xl text-semibold">{ele.section}

                            </h1> : <h1 className="h-10"></h1>}
                                <a href="#" className="flex items-end gap-1">
                                    <h2 className={`text-base font-semibold  cursor-pointer 
                                            ${dark ? 'heading-fill-dark' : 'heading-fill'} dark-theme`}>
                                        {ele.heading}
                                    </h2>
                                    <div className="w-full mb-1 border-b-1 border-black dark:border-white border-dashed "></div>
                                    <FiArrowUpRight style={{ fontSize: "1.5rem" }} />
                                </a>
                                <div className="lowercase dark:text-adark">
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
        </section>
    )
}

export default Index


