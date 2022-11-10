import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../../Firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })
        return ()=> {
            unsubscribe();
        }
    },[])
    

    const authInfo = { user, loading, signUp, login}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;