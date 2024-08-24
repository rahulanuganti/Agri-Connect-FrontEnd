import React from 'react'
import leftArrow from '../../assets/leftarrow.png';
import styles from './Nav.module.css';
import { useNavigate } from 'react-router-dom';

const CustomerNav= () => {
    const navigate = useNavigate();
    return (
        <div className={styles.navbar}>
            <button onClick={() =>{navigate(-1)}} className={styles.back_button}>
                <img className={styles.leftarrow} src={leftArrow}/>
            </button>
            <span className={styles.text}>Login To <span style={{color:"orange"}}>Customer</span></span>
        </div>
    )
}

export default CustomerNav