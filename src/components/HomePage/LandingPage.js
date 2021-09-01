import React from 'react'
import curve from '../../assets/svg/curve.svg'
import { useScroll } from '../../Utility/ScrollEvent'
function LandingPage() {
    const scroll = useScroll()
    console.log(scroll)
    return (
        <section className="LandingPage gradient w-full pt-24">
            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div className="">
                    <h1>Welcome </h1>

                </div>
            </div>
            <img src={curve} />
        </section>
    )
}

export default LandingPage
