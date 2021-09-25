import React from 'react'
import { useRouter } from 'next/router';

function logout() {
    const history = useRouter()
    const logout = async () => {

        const res = await fetch('/api/account/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            }
        });
        if (res.status === 200) {
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

export default logout
