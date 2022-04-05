import React from "react";
import List from "../list/list";
import styles from "./showLists.module.css";

const ShowLists = ({ lists }) => {
  return (
    <section className={styles.lists}>
      <p className={styles.title}>From your Doogle list</p>
      <table className={styles.table}>
        {lists
          .filter((list) => list.name.includes(""))
          .map((list) => (
            <List list={list} />
          ))}
      </table>
    </section>
  );
};

export default ShowLists;
