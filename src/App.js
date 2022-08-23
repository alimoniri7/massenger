import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

//components
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserProvider from './context/UserProvider';
import Chats from './components/Chats';

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path='/chats' element={<Chats/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/*' element={<Navigate to='/signup'/>}/>
      </Routes>
    </UserProvider>
  );
};

export default App;