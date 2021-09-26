import { useRouter } from 'next/router'
import { AuthContext } from '../src/context/authContext'
import { useContext, useEffect } from 'react'
import Link from 'next/link'

function Profile() {
    const history = useRouter()
    const { isAuthenticated, isLoading, setAuth, userData } = useContext(AuthContext)
    useEffect(() => {
        !isLoading && !isAuthenticated && history.push('/login')
    }, [isLoading])
    return (

        <section className="pt-20 sm:pt-28 text-center">
            <h1>{userData.full_name}</h1>
            <h1>{userData.user_name}</h1>
            <h1>{userData.email}</h1>
            <h1>{userData.about}</h1>
            <Link href="/logout">
                <a>Logout</a>
            </Link>
        </section>
    )
}

export default Profile
