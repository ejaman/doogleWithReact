import React, { useState } from "react";
import styles from "./listBtn.module.css";

const ListBtn = (props) => {
  return (
    <div className={styles.btns}>
      <div className={styles.btnSection}>
        <button className={styles.showBtn}>⚠️</button>
        <p>All</p>
      </div>
      <div className={styles.btnSection}>
        <button className={styles.plantBtn}>🌳</button>
        <p>Plants</p>
      </div>
      <div className={styles.btnSection}>
        <button className={styles.foodBtn}>🍭</button>
        <p>Foods</p>
      </div>
      <div className={styles.btnSection}>
        <button className={styles.addBtn}>➕</button>
        <p>Add</p>
      </div>
    </div>
  );
};

export default ListBtn;
