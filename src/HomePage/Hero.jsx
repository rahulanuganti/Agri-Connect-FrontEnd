import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.start}>
            <h1 className={styles.wel}>Welcome to AgriConnect</h1>
            <p>The digital marketplace for the agriculture industry</p>
            <a href="#" className={`${styles.button} ${styles.buttonGreen} ${styles.side}`}>I'm a Farmer</a>
            <a href="#" className={`${styles.button} ${styles.buttonGrey}`}>I'm a Buyer</a>
        </div>
    );
}

export default Hero;
