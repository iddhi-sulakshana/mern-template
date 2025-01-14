import { createContext, useContext, useState } from "react";
import { IAuthContext } from "../types/user";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

// @ts-ignore
export const AuthProvider = ({ children }) => {
    const storedToken = localStorage.getItem("token");
    const [token, setToken] = useState<string | null>(storedToken);

    const login = (token: string) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    const value: IAuthContext = {
        token,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
