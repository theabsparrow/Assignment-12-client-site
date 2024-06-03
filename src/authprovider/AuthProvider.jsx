import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserProfile = (name, photo) => {
        
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // user login
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user log out
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe()
        }
    },[])

    const contextInfo = {
        createUser,
        user,
        setUser,
        loading,
        setLoading,
        updateUserProfile,
        userLogin,
        logout
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;