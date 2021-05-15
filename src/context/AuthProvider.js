import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { signIn, registration, loggingOut } from "../api/firebaseMethods";



export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            signIn,
            registration
        }}>
            {children}
        </AuthContext.Provider>
    );

};