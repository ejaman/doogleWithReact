import React from "react";
import styles from "./list.module.css";

const DEFAULT_IMG = "/images/default.png";
const List = ({ list }) => {
  const { name, sort, type, eng, fileURL } = list;
  const url = fileURL || DEFAULT_IMG;

  return (
    <li className={`${styles.list} ${getSort(sort)}`}>
      <div className={styles.td}>
        <img className={styles.img} src={url} alt="img"></img>
      </div>
      <div className={styles.container}>
        <input className={styles.input} type="text" name="sort" value={sort} />
        <input className={styles.input} type="text" name="name" value={name} />
        <input className={styles.input} type="text" name="type" value={type} />
        <input className={styles.input} type="text" name="eng" value={eng} />
      </div>
    </li>
  );
};
function getSort(sort) {
  switch (sort) {
    case "🌼":
      return styles.flower;
    case "🌳":
      return styles.tree;
    case "🍭":
      return styles.food;
    default:
      throw new Error("unknown type: ${sort}");
  }
}

export default List;
