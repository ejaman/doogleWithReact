import React, { useState } from "react";
import List from "../list/list";
import styles from "./showLists.module.css";

const ShowLists = ({ lists }) => {
  const [icon, setIcon] = useState("");
  const onBtnClick = (event) => {
    setIcon(event.target.value);
  };

  return (
    <section className={styles.lists}>
      <div className={styles.btns}>
        <button className={styles.btn} value="🌳" onClick={onBtnClick}>
          Plant
        </button>
        <button className={styles.btn} value="🌼" onClick={onBtnClick}>
          Flower
        </button>
        <button className={styles.btn} value="🍭" onClick={onBtnClick}>
          Food
        </button>
        <button className={styles.btn} value="" onClick={onBtnClick}>
          All
        </button>
      </div>

      <div className={styles.result}>
        <span className={styles.total}>About 1,120,903 result</span>
        {/* 결과가 산출될 공간 */}
        <table className={styles.table}>
          {lists
            .filter((list) => list.sort.includes(`${icon}`))
            .map((list) => (
              <List list={list} />
            ))}
        </table>
      </div>
    </section>
  );
};

export default ShowLists;
