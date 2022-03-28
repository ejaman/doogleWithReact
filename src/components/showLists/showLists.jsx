import React from "react";
import List from "../list/list";
import styles from "./showLists.module.css";

const ShowLists = ({ lists }) => (
  <section>
    <h1>show list</h1>
    <table className={styles.table}>
      {lists.map((list) => (
        <List list={list} />
      ))}
    </table>
  </section>
);

export default ShowLists;
