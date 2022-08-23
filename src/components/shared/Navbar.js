import React from 'react';



//components
import Logout from './Logout';


//styles 
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navContainer} >
            <div>
                <h1>ChitChat</h1>
                <span>Messenger</span>
            </div>
            <Logout/>
        </nav>
    );
};

export default Navbar;