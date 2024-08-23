import React from 'react'
import styles from './Navbar.module.css'
function NavBar() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.logo}>Agri Connect</div>
    <ul className={styles.navLinks}>
      <li>Home</li>
      <li>MyProducts</li>
      <li>Transactions</li>
      <li>Call Center</li>
      <li>Settings</li>
    </ul>
    <div className={styles.userGreeting}>Hello, AMAN MISHRA</div>
  </nav>
  )
}

export default NavBar