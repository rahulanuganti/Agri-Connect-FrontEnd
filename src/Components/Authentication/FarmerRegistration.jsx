import React, { useState } from "react";
import styles from "./FarmerRegister.module.css";
import FarmerNav from "./FarmerNav";
const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    presentAddress: "",
    state: "",
    district: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add form submission logic here (e.g., sending data to backend)
  };

  return (
    <div className={styles.body}>
        <FarmerNav />
        <div className={styles.farmer_registration}>
        <h2>Farmer Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputs_labels}>
            <div className={styles.labels}>
              <label>Full Name</label>
              <label>Phone Number</label>
              <label>Present Address</label>
              <label>State</label>
              <label>District</label>
              <label>Bank Account No.</label>
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
              type="text"
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleChange}
              required
              />

              <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              />

              <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              />
              <input 
              type="number"
              name="bankAccountNo"
              value={formData.bankAccountNo}
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
              required
              />
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
        </div>
    </div>

  );
};

export default FarmerRegistration;
