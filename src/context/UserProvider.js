import React , { useState , useEffect , createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';

export const AuthContext = createContext()

const UserProvider = ({children}) => {

    const [user , setUser] = useState(false)
    const [loading , setLoading] = useState(true)

    const history = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if(user) history('/chats')
            console.log(user);
        })
    } , [user , history ])

    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default UserProvider;