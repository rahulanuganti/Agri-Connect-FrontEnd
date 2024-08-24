import React from 'react'
import styles from './Login.module.css';
import googlelogo from '../../assets/google-logo.png';
import CustomerNav from './CustomerNav';
import CustomerImage from '../../assets/buyer-2.png';
import { useNavigate } from 'react-router-dom';

const CustomerLogin = () => {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/customerRegister');
  }
  return (
    <div >
      <CustomerNav/>
      <div className={styles.body}>
        <img className={styles.farmer_image} src={CustomerImage}/>
        
        <form className={styles.login_form}>
          <div className={styles.sign_text}> Sign in with <button style={{border:"none", background:"none"}}><img className={styles.google_logo} src={googlelogo} alt="" /></button></div>
          <div style={{padding:"5px 30px"}}>Or</div>
          <div className={styles.inputs}>
            <input className={styles.input} type="text" placeholder='Phone Number' required/>
            <input className={styles.input} type="password" placeholder='Password' required/>
          </div>
          <div className={styles.forgot_password}>Forgot your password?</div>
          <button className={styles.login_button} style={{backgroundColor:"orange"}}>Log In</button>
          <div>Don't Have an account? <span onClick={handleRegister} style={{color:"orange"}}>Register</span></div>
        </form>
      </div>
    </div>
  )
}

export default CustomerLogin