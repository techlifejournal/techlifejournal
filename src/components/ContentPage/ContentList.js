import React, { useContext, useEffect, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { VscLoading } from 'react-icons/vsc'
import Header from './Header'
import { DarkLightContext } from '../../context/darkmodeContext'
import Style from '../../../styles/Home.module.css'
import axios from 'axios'
import urls from '../../../backend.config'
import getHighlightedText from '../../Utility/TextHighlight'
import Link from 'next/link'
function Index() {
    const [dark, setDark] = useContext(DarkLightContext)
    const [ContentData, setContentData] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            axios.get(`${urls.base_url}article/list?search=${search}`)
                .then(response => {
                    setContentData(response.data)
                    setLoading(false)
                });
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);
    return (
        <section id="content" className="flex-col m-3 shadow-2xl sm:m-5 md:mx-14  border-gray-500 ">
            <Header setSearch={setSearch} />
            {loading ? <div className="flex justify-center text-4xl py-5 m-5"><span className="animate-spin"><VscLoading /></span></div> : (ContentData.length != 0 ?
                <div className="grid grid-cols-1 border-r-1 border-b-1  border-gray-500  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{
                    ContentData.map((ele, index) => {
                        return <>
                            <Link key={ele.id} href={`/article/${ele.headline.replace(/\s/g, "-")}-${ele.id}`} >
                                <div key={ele.id} className={`p-2 pb-4 border-l-1 border-gray-500 cursor-pointer  ${Style.headingFillLeft}  `}>
                                    {
                                        (index > 0) ? (ele.headline.charAt(0).toUpperCase() != ContentData[index - 1].headline.charAt(0).toUpperCase()) ? <h1 className="text-4xl uppercase text-semibold">{ele.headline.charAt(0)}
                                        </h1> : <h1 className="h-10"></h1> : <h1 className="text-4xl uppercase text-semibold">{(/[a-zA-Z]/).test(ele.headline.charAt(0)) && ele.headline.charAt(0)}</h1>}
                                    <a className="flex items-end gap-1">
                                        <h2 className={`text-base font-semibold  cursor-pointer 
                                            ${dark ? Style.headingFillDark : Style.headingFill} dark-theme`}>
                                            {getHighlightedText(ele.headline, search)}
                                        </h2>
                                        <div className=" flex-1 mb-1 border-b-1 border-black dark:border-white border-dashed "></div>
                                        <FiArrowUpRight style={{ fontSize: "1.5rem" }} />
                                    </a>
                                    <div className="lowercase dark:text-adark">
                                        {
                                            ele.subtopics.map((topic, key) => {
                                                return <a key={key}> {getHighlightedText(topic, search)},</a>
                                            })
                                        }
                                    </div>
                                </div>

                            </Link>
                        </>
                    })
                }</div>
                : <div className="text-2xl m-5 font-semibold py-10 text-center"> No result found </div>)
            }

        </section>
    )
}



export default Index


