import { useRouter } from 'next/router'
import { AuthContext } from '../src/context/authContext'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GoCalendar } from 'react-icons/go'
function Profile() {
    const history = useRouter()
    const { isAuthenticated, isLoading, setAuth, userData } = useContext(AuthContext)
    useEffect(() => {
        !isLoading && !isAuthenticated && history.push('/login')
    }, [isLoading])
    return (

        <section className=" flex flex-col gap-5 items-center justify-center">
            <div className="w-full max-w-4xl  flex flex-col gap-5 items-center justify-center p-10 pt-20 md:p-20 sm:pt-28 ">
                <div className=" bg-gray-100 dark:bg-opacity-10  w-full  flex justify-start items-center rounded-md p-10 gap-5 md:p-10 ">
                    <img className="rounded-full max-h-32" src="https://avatars.githubusercontent.com/u/62538932?v=4" />
                    <div className="font-semibold  text-3xl flex flex-col cursor-pointer">
                        <a className="hover:text-blue-500" >{userData.full_name}</a>
                        <a className="hover:text-blue-500">u/{userData.user_name}</a>
                        <Link href={`/u/${userData.user_name}`}><a className="hover:text-blue-500">{userData.about}</a></Link>
                        <a className="text-xl">0 Followers</a>
                    </div>

                </div>
                <div className=" flex gap-10 items-center ">
                    <Link href="/new">
                        <a className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-blue-500 rounded">Create Post</a>
                    </Link>
                    <Link href="/logout">
                        <a className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-blue-500 rounded">Logout</a>
                    </Link>
                </div>
                <div className="w-full p-5 bg-gray-100 dark:bg-opacity-10 cursor-pointer">
                    <div className="flex flex-wrap justify-between items-center">
                        <h1 className="font-semibold">Title xd lol uhww sheesh</h1>
                        <a className="text-lg text-right nowrap inline-flex items-center gap-1"><GoCalendar /> <span>23/4/20</span></a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                </div>
                <div className="w-full p-5 bg-gray-100 dark:bg-opacity-10 ">
                    <div className="flex flex-wrap justify-between items-center">
                        <h1 className="font-semibold">Some other title</h1>
                        <a className="text-lg text-right nowrap inline-flex items-center gap-1"><GoCalendar /> <span>13/5/21</span></a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

                </div>
            </div>

        </section>
    )
}

export default Profile