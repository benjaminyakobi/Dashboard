import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../../initFirebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from "firebase/auth"

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
    // In order to use AuthContext.Provider value (i.e. AuthContext.Consumer)
    // we have to export it as: useContext(AuthContext) because we're using 
    // Functional Components. These way is relevent ONLY for functional components
    // and in class components we just use AuthContext.Consumer
    // WE PASS Context INSIDE useContext -> WE GET THE VALUE OF THE Inner-Context
    // Detailed explain: https://www.youtube.com/watch?v=5LrDIWkK_Bc
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function updatedEmail(email) {
        return updateEmail(currentUser, email)
    }

    function updatedPassword(password) {
        return updatePassword(currentUser, password)
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
        signup,
        login,
        logout,
        resetPassword,
        updatedEmail,
        updatedPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {/* if not loading (i.e. current user is loaded) -> render the children it means that we are not rendering anything
            until our current user is set*/}
            {!loading && children}
        </AuthContext.Provider>
    )
}
