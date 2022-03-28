import React from "react";
import styles from "./addList.module.css";

const AddList = (props) => {
  return (
    <form className={styles.form}>
      <h1>add list</h1>
      <select className={styles.sort} name="theme">
        <option value="Plant">🌳 plant</option>
        <option value="Flower">🌼 flower</option>
        <option value="Food">🍭 food</option>
      </select>
      <input
        // ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      ></input>
      <input
        // ref={typeRef}
        className={styles.input}
        type="text"
        name="type"
        placeholder="type"
      ></input>
      <input
        // ref={engRef}
        className={styles.input}
        type="text"
        name="eng"
        placeholder="eng"
      ></input>
    </form>
  );
};

export default AddList;
