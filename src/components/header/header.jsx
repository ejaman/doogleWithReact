import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.header}>
    <a href="https://github.com/ejaman">
      <img className={styles.image} src="./images/profile.png" alt="profile" />
    </a>
    <a href="https://github.com/ejaman/doogleWithReact">Code</a>
    <a href="">Vlog</a>
  </header>
);

export default Header;
