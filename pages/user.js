import { useRouter } from 'next/router'
import { AuthContext } from '../src/context/authContext'
import { useContext, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Profile() {
    const history = useRouter()
    const { isAuthenticated, isLoading, setAuth, userData } = useContext(AuthContext)
    useEffect(() => {
        !isLoading && !isAuthenticated && history.push('/login')
    }, [isLoading])
    return (

        <section className=" pt-20 sm:pt-28 flex flex-col gap-5 items-center justify-center">
            <div className=" bg-gray-100 dark:bg-opacity-10   flex justify-center items-center rounded-md p-10 gap-5 md:p-10">
                <img className="rounded-full max-h-32" src="https://avatars.githubusercontent.com/u/62538932?v=4" />
                <div>
                    <h3>{userData.full_name}</h3>
                    <h3>{userData.user_name}</h3>
                    <h3>{userData.about}</h3>
                    <h3>0 Followers</h3>
                </div>

            </div>
            <div className=" flex gap-10 items-center">
                <Link href="/new">
                    <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Create Post</a>
                </Link>
                <Link href="/logout">
                    <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Logout</a>
                </Link>
            </div>
        </section>
    )
}

export default Profile
