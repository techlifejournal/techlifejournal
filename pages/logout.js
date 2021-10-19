import { useContext } from 'react';
import { AuthContext } from '../src/context/authContext';
import { useRouter } from 'next/router'
import urls from '../backend.config';
function Logout() {
    const history = useRouter()
    const { userState, setUserState } = useContext(AuthContext)
    const logout = async () => {
        const res = await fetch(`${urls.client_url}/api/account/logout`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            }
        });
        if (res.status === 200) {
            setUserState(!userState)
            history.push('/login')
        }
    }
    logout();
    return (
        <div className="h-screen flex flex-col justify-center">
            <h1 className="animate-pulse text-center"> Logging out  </h1>
        </div>
    )
}

export default Logout
