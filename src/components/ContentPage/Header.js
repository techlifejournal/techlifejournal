import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { useDate } from '../../Utility/DateTime';
function Header() {
    const {date, time, wish} = useDate();
    return (
        <div className="flex  border-b-1 py-5  border-gray-500  flex-wrap justify-between items-center">
            <h1 className=" px-4 py-2 text-xl md:text-2xl ">Programming Concepts</h1>

            <div className="flex gap-2 items-center w-full md:flex-1 order-3 md:order-2 mx-4 px-3 text-xl rounded-md border-1  border-gray-500 ">
                <SearchIcon className="opacity-50 mt-1" />
                <input className="focus:outline-none bg-transparent w-full  h-10  md:h-12 " type="text" placeholder="Search for topics " />
            </div>
            <div className="px-3 flex flex-col items-center justify-center  sm:w-auto order-2 md:order-3  ">
                <span>{date}</span>
                <span>{time}</span>
            </div>
        </div>
    )
}

export default Header
