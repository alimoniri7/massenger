import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserProvider';
import { ChatEngine } from 'react-chat-engine';



// components
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
            <ChatEngine
			projectID='c48e3074-aedc-4c1c-8138-4e0e01862314'
			userName='alimoniri81@gmail.com'
			userSecret='d1e60870-c935-4f72-ab35-0890ea839cd6'
		/>
            <Footer/>
        </div>
    );
};

export default Chats;