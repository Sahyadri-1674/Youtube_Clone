import React from "react";
import styles from "./Sidebar.module.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

function Sidebar({sidebar,category,setCategory}) {
  return (
    <div className={`${styles.sidebar} ${sidebar ? "" : styles['small-sidebar']}`}>
      <div className={styles["shortcut-links"]}>
        <div className={`${styles["side-link"]} ${category===0? styles.active:""}`}  onClick={() => setCategory(0)}>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className={`${styles["side-link"]} ${category===20? styles.active:""}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className={`${styles["side-link"]} ${category===2? styles.active:""}`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`${styles["side-link"]} ${category===17? styles.active:""}`} onClick={() => setCategory(17)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className={`${styles["side-link"]} ${category===24? styles.active:""}`} onClick={() => setCategory(24)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`${styles["side-link"]} ${category===28? styles.active:""}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <div className={`${styles["side-link"]} ${category===10? styles.active:""}`} onClick={() => setCategory(10)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className={`${styles["side-link"]} ${category===22? styles.active:""}`} onClick={() => setCategory(22)}>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className={`${styles["side-link"]} ${category===25? styles.active:""}`} onClick={() => setCategory(25)}>
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className={styles["subscribed-list"]}>
        <h3>Subscribed</h3>
        <div className={styles["side-link"]}>
          <img src={jack} alt="" /> <p>Carryminati</p>
        </div>
        <div className={styles["side-link"]}>
          <img src={simon} alt="" /> <p>MrBeast</p>
        </div>
        <div className={styles["side-link"]}>
          <img src={tom} alt="" /> <p>Justin Bieber</p>
        </div>
        <div className={styles["side-link"]}>
          <img src={megan} alt="" /> <p>5-min Crafts</p>
        </div>
        <div className={styles["side-link"]}>
          <img src={cameron} alt="" /> <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
