
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({Children}) => {
    const [user, setUSer] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");

        if(storedUser){
            setUSer(JSON.parse(storedUser));
        }
    },[]);

    const login = (useData, token) => {
        localStorage.setItem("loggedInUser" , JSON.stringify(useData));
        localStorage.setItem("token", token);
        setUSer(useData);
    }

    const logout = () => {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("token");
        setUSer(null);
    };

    return (
        <AuthContext.Provider value={{user , login, logout}}>
            {Children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);