import React from "react";
import styles from "./result.module.css";

const DEFAULT_IMG = "/images/defaultFlower.png";
const Result = ({ lists, word }) => {
  // const { name, sort, type, eng, fileURL } = lists;
  const TermLists = lists.filter((list) => list.name.includes(`${word}`));
  const url = lists.fileURL || DEFAULT_IMG;
  return (
    <section className={styles.result}>
      <span className={styles.total}>Searched result: {TermLists.length}</span>
      {TermLists.map((list) => (
        <li className={styles.list}>
          <div className={styles.image}>
            <img className={styles.img} src={url} alt="img"></img>
          </div>
          <div className={styles.container}>
            <div className={styles.names}>
              <input
                className={styles.kor}
                type="text"
                name="name"
                value={list.name}
              />
              <input
                className={styles.eng}
                type="text"
                name="eng"
                value={list.eng}
              />
            </div>
            <input
              className={styles.type}
              type="text"
              name="type"
              value={list.type}
            />
            <input
              className={styles.sort}
              type="text"
              name="sort"
              value={list.sort}
            />
          </div>
        </li>
      ))}
    </section>
  );
};

export default Result;
