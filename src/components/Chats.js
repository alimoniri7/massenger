import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserProvider';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';








const Chats = () => {


    let user = useContext(AuthContext)
    const history = useNavigate()

    useEffect(()=>{
        if (!user) {
            history('/login')
        }
    }, [user , history])


    return (
        <div>
            <Navbar/>
            <Footer/>
        </div>
    );
};

export default Chats;