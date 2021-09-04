import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../../initFirebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe

    }, [])

    const value = {
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {/* if not loading (i.e. current user is loaded) -> render the children it means that we are not rendering anything
            until our current user is set*/}
            {!loading && children}
        </AuthContext.Provider>
    )
}
