import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.header}>
    <a href="https://github.com/ejaman">
      <img
        className={styles.image}
        src="./images/defaultFlower.png"
        alt="profile"
      />
    </a>
    <a href="https://github.com/ejaman/doogleWithReact">code</a>
    <a href="">vlog</a>
  </header>
);

export default Header;
