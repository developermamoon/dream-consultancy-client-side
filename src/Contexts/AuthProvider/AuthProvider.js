import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../../Firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);



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
    

    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;