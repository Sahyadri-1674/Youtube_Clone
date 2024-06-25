import React from 'react'
import styles from './Navbar.module.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

function Navbar({setSidebar}) {
  return (
    <nav className={styles["flex-div"]}>
      <div className={`${styles["nav-left"]} ${styles["flex-div"]}`}>
        <img
          className={styles["menu-icon"]}
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to='/'>
          <img className={styles.logo} src={logo} alt="" />
        </Link>
      </div>

      <div className={`${styles["nav-middle"]} ${styles["flex-div"]}`}>
        <div className={`${styles["search-box"]} ${styles["flex-div"]}`}>
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className={`${styles["nav-right"]} ${styles["flex-div"]}`}>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className={styles["user-icon"]} alt="" />
      </div>
    </nav>
  );
}

export default Navbar
