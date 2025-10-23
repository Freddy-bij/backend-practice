
// import { useEffect } from "react";
// import { useContext } from "react";
// import { useState } from "react";
// import { createContext } from "react";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({children}) => {
//      const [user, setUser] = useState(null);


//     useEffect(() => {
//         const storedUser = localStorage.getItem("loggedInUser");

//         if(storedUser){
//             setUser(JSON.parse(storedUser));
//         }
//     },[]);

//     const login = (userData, token) => {
//         localStorage.setItem("loggedInUser" , JSON.stringify(useData));
//         localStorage.setItem("token", token);
//         setUser(userData);
//     }

//     const logout = () => {
//         localStorage.removeItem("loggedInUser");
//         localStorage.removeItem("token");
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{user , login, logout}}>
//             {children}
//         </AuthContext.Provider>
//     )

// }

// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
