import React from "react";
import styles from "./list.module.css";

const DEFAULT_IMG = "/images/defaultPlant.png";
const List = ({ list }) => {
  const { name, sort, type, eng, fileURL } = list;
  const url = fileURL || DEFAULT_IMG;

  return (
    <li className={`${styles.list} ${getSort(sort)}`}>
      <div className={styles.image}>
        <img className={styles.img} src={url} alt="img"></img>
      </div>

      <div className={styles.names}>
        <div className={styles.kor}>{name}</div>
        <div className={styles.eng}>{eng}</div>
      </div>
      <div className={styles.type}>{type}</div>
      <div className={styles.sort}> {sort} </div>
    </li>
  );
};

function getSort(sort) {
  switch (sort) {
    case "🌼 Flower":
      return styles.flower;
    case "🌳 Plant":
      return styles.tree;
    case "🍭 Food":
      return styles.food;
    default:
      throw new Error("unknown type: ${sort}");
  }
}

export default List;
