import React from 'react';
import styles from './NavBar.module.css';

function NavBar(){
    return (
        <div className={styles.head} style={{ display: 'inline-flex' }}>
            <div className={styles.left}>
                <a href="#" className={styles.logo}>AgroConnect</a>
            </div>
            <div className={styles.right}>
                <a href="#" className={styles.space}>Home</a>
                <a href="#" className={styles.space}>Marketplace</a>
                <a href="#" className={styles.space}>Services</a>
                <a href="#" className={styles.space}>Resources</a>
                <a href="#" className={styles.space}>Community</a>
                <a href="#" className={`${styles.button} ${styles.buttonGreenbutton}`}>Sign Up</a>
                <a href="#" className={`${styles.button} ${styles.buttonGreybutton}`}>Log In</a>
            </div>
        </div>
    );
}

export default NavBar;
