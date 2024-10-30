import { createContext, useContext, useState } from "react";
const AuthContext = createContext<
  | { isAuthenticated: boolean; login: () => void; logout: () => void }
  | undefined
>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const login = () => setIsAuthenticated(true)
    const logout = () => setIsAuthenticated(false)
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(context === undefined){
        throw new Error('useAuth must be used within an AuthProvider.')
    }
    return context;
};
