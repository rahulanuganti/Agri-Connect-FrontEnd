import React from 'react'
import farmerImg1 from '../../assets/farmer-image2.png';
import FarmerNav from './FarmerNav';
import styles from './Login.module.css';
import googlelogo from '../../assets/google-logo.png';
import { useNavigate } from 'react-router-dom';

const FarmerLogin = () => {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/farmerRegister');
  }
  return (
    <div >
      <FarmerNav />
      <div className={styles.body}>
        <img className={styles.farmer_image} src={farmerImg1}/>
        <form className={styles.login_form}>
          <div className={styles.sign_text}> Sign in with <button style={{border:"none", background:"none"}}><img className={styles.google_logo} src={googlelogo} alt="" /></button></div>
          <div style={{padding:"5px 30px"}}>Or</div>
          <div className={styles.inputs}>
            <input className={styles.input} type="text" placeholder='Phone Number' required/>
            <input className={styles.input} type="password" placeholder='Password' required/>
          </div>
          <div className={styles.forgot_password}>Forgot your password?</div>
          <button className={styles.login_button} style={{backgroundColor:"#2abd5d"}}>Log In</button>
          <div>Don't Have an account? <span onClick={handleRegister}  style={{color:"#2abd5d"}}>Register</span></div>
        </form>
      </div>
    </div>
  )
}

export default FarmerLogin