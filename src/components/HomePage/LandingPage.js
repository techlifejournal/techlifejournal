import React, { useContext } from 'react'
import curve from '../../assets/svg/curve.svg.js'
import Style from '../../../styles/Home.module.css'
import { DarkLightContext } from '../../context/darkmodeContext'
import { FiArrowUpRight } from 'react-icons/fi'
import { ThemeContext } from '../../context/ThemeContext'
function LandingPage() {
    const [dark, setDark] = useContext(DarkLightContext)
    const [theme, changeTheme] = useContext(ThemeContext)
    return (
        <section className={`LandingPage  w-full pt-24`} style={{ background: `linear-gradient(90deg, ${dark ? theme[1].from : theme[0].from} 0%, ${dark ? theme[1].to : theme[0].to} 100%)` }} onClick={changeTheme}>
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-evenly gap-10">
                <div className="flex flex-col gap-5 cursor-pointer">
                    <div className="text-5xl md:text-6xl xl:text-7xl   flex flex-col">
                        <span className="font-bold focus:none">techlifejournal</span>
                        <span className=" font-bold flex justify-between"><span>.com </span><FiArrowUpRight /></span>
                    </div>
                    <div>
                        <a className="bg-white dark:bg-black  font-bold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-blue-900">Start Exploring</a>
                    </div>
                </div>
                <div className="">
                    <img className='h-full  lg:h-96 ' src='/Devfocus.svg' />
                </div>
                <div>
                </div>
            </div>
            {curve(dark)}
        </section>
    )
}

export default LandingPage
