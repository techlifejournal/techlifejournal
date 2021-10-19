import react, { createContext, useState, useEffect, useContext } from 'react';
import urls from '../../backend.config';
export const AuthContext = createContext({
    isAuthenticated: false,
    isLoading: true,
    setAuthenticated: () => { }
});

export default function Auth(props) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [userState, setUserState] = useState(true);
    const [userData, setUserData] = useState({})
    useEffect(() => {
        const initializeAuth = async () => {
            setLoading(true);
            const response = await fetch(`${urls.client_url}/api/account/user`);
            if (response.status === 200) {
                setAuthenticated(true);
                const { data } = await response.json()
                setUserData(data[0])
            }
            else {
                setAuthenticated(false);
                setUserData({});
            }
            setLoading(false);
        };
        initializeAuth();
    }, [userState])
    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            isLoading,
            setAuthenticated,
            userData,
            userState,
            setUserState
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}



export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export function useIsAuthenticated() {
    const context = useAuth();
    return context.isAuthenticated;
}
