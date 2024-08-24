import React, { useState } from 'react';
import styles from './CustomerRegister.module.css'; // Import the CSS for styling
import CustomerNav from './CustomerNav';
import basket from '../../assets/veggies.png';

const CustomerRegister= () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    presentAddress: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className={styles.body}>
      <CustomerNav />
      <div className={styles.customer_register}>
        <h2>Customer Registration</h2>
        <form onSubmit={handleSubmit} className={styles.registration_form}>
          <div className={styles.inputs_labels}>
            <div className={styles.labels}>
              <label>Full Name</label>
              <label>Phone Number</label>
              <label>Email Address</label>
              <label>Present Address</label>
              <label>Username</label>
              <label>Password</label>
              <label>Confirm Password</label>
            </div>
          <div className={styles.inputs}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className={styles.register_button}>Register</button>
        </form>
      </div>
      <img className={styles.basket} src={basket} alt="" />
    </div>
  );
};

export default CustomerRegister;
