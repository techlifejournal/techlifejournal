import { useRouter } from 'next/router'
import { AuthContext } from '../src/context/authContext'
import { useContext, useEffect } from 'react'


function Profile() {
    const history = useRouter()
    const { isAuthenticated, isLoading, setAuth, userData } = useContext(AuthContext)
    useEffect(() => {
        !isLoading && !isAuthenticated && history.push('/login')
    }, [isAuthenticated])

    return (

        <section className="pt-20 sm:pt-28 text-center">
            <h1>{userData.full_name}</h1>
            <h1>{userData.user_name}</h1>
            <h1>{userData.email}</h1>
            <h1>{userData.about}</h1>
        </section>
    )
}

export default Profile
