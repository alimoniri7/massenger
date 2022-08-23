import React from 'react';

import { auth } from '../../services/firebase';
import { signOut } from 'firebase/auth';


//styles 
import styles from './logout.module.scss'


const logOut = () => {
    signOut(auth)
        .catch(err => alert(err))
}



const Logout = () => {
    return (
        <button onClick={logOut} className={styles.logout}>
            Logout
        </button>
    );
};

export default Logout;