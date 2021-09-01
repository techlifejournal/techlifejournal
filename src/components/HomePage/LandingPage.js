import React, { useContext } from 'react'
import curve from '../../assets/svg/curve.svg.js'
import Dev from '../../assets/svg/Devfocus.svg'
import { useScroll } from '../../Utility/ScrollEvent'
import { DarkLightContext } from '../../context/darkmodeContext'
import { FiArrowUpRight } from 'react-icons/fi'
function LandingPage() {
    const [dark, setDark] = useContext(DarkLightContext)
    return (
        <section className={`LandingPage ${dark ? 'gradient-dark' : 'gradient'} w-full pt-24`}>
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-evenly gap-10">
                <div className="flex flex-col gap-5 ">
                    <div className="text-3xl md:text-6xl  flex flex-col">

                        <span className="font-bold">techlifejournal</span>
                        <span className=" font-bold flex justify-between"><span>.com </span><FiArrowUpRight /></span>

                    </div>
                    <div>  
                        <a className = "bg-white dark:bg-black  font-bold py-2 px-4 rounded-full">Start Learning</a>
                    </div>
                  
                </div>
                <div className="">
                    <img className='h-52  lg:h-96 ' src={Dev} />
                </div>
            </div>
            {curve(dark)}
        </section>
    )
}

export default LandingPage
