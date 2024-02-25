import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../config/firebaseConfig/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
// import useAxios from "../useAxios/useAxios";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    // const axiosInstance = useAxios()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const profileUpdate = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            const email = currentUser?.email
            if (email) {
                axios.post("https://hirpark-server.vercel.app/api/v1/access-token", { email },{withCredentials:true})
                    .then(res => console.log(res.data))
            }
            setUser(currentUser)
            setLoading(false)
        })
        return () => subscribe()
    }, [])
    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        profileUpdate,
        googleSingIn
    }
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;