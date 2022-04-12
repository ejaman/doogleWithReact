import React, { useState } from "react";
import List from "../list/list";
import Result from "../result/result";
import styles from "./showLists.module.css";

const ShowLists = ({ lists, word }) => {
  const [icon, setIcon] = useState("");
  const onBtnClick = (event) => {
    setIcon(event.target.value);
  };
  const IconLists = lists.filter((list) => list.sort.includes(`${icon}`));

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
        {/* 결과가 산출될 공간 */}
        <Result lists={lists} word={word} />
        <span className={styles.total}>About {IconLists.length} result</span>
        <table className={styles.table}>
          {IconLists.map((list) => (
            <List list={list} />
          ))}
        </table>
      </div>
    </section>
  );
};

export default ShowLists;
