import react, { createContext, useState, useEffect, useContext } from 'react';
export const AuthContext = createContext({
    isAuthenticated: false,
    isLoading: true,
    setAuthenticated: () => { }
});

export default function Auth(props) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isLoading, setLoading] = React.useState(true);
    useEffect(() => {
        const initializeAuth = async () => {
            const response = await fetch('/api/account/checkAuth');
            setAuthenticated(response.status === 200);
            setLoading(false);
        };
        initializeAuth();
    }, [])
    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            isLoading,
            setAuthenticated
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