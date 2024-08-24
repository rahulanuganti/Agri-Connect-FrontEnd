import React from 'react';
import styles from './ProfilePage.module.css';
import profilePhoto from '../../../public/pic1.png';
function ProfilePage() {
  return (
    <div className={styles.container}>
      <button className={styles.backButton}>← Back</button>
      <h1 className={styles.heading}>Farmer Profile</h1>
      <div className={styles.profileContainer}>
        <div className={styles.photoSection}>
          <div className={styles.imageWrapper}>
            <img src={profilePhoto} alt="Farmer" className={styles.profileImage} />
            <div className={styles.overlay}>
              <button className={styles.changePhotoButton}>Change Photo</button>
            </div>
          </div>
        </div>
        <div className={styles.detailsSection}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className={styles.field}>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Enter your address" />
          </div>
          <div className={styles.field}>
            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="Enter your state" />
          </div>
          <div className={styles.field}>
            <label htmlFor="district">District</label>
            <input type="text" id="district" placeholder="Enter your district" />
          </div>
          <div className={styles.field}>
            <label htmlFor="bankAccount">Bank Account Number</label>
            <input type="text" id="bankAccount" placeholder="Enter your bank account number" />
          </div>
          <button className={styles.saveButton}>Save</button>
        </div>
      </div>
    </div>

  )
}

export default ProfilePage