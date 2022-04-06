import React, { useState } from "react";
import Search from "../search/search";
import ShowLists from "../showLists/showLists";
import styles from "./searched.module.css";

const Searched = (props) => {
  const [lists, setLists] = useState([
    {
      id: 1,
      sort: "🌼",
      name: "브룬펠시아",
      type: "가지과",
      eng: "Brunfelsia species",
      fileURL: null,
    },
    {
      id: 2,
      sort: "🌼",
      name: "데이지",
      type: "국화과",
      eng: "Chrysanthemum species",
      fileURL: null,
    },
    {
      id: 3,
      sort: "🌳",
      name: "염자",
      type: "다육식물",
      eng: "Crassula arborescens",
      fileURL: null,
    },
  ]);
  return (
    <section className={styles.searched}>
      <header className={styles.header}>
        <a href="/">
          <img
            className={styles.logo}
            src="./images/doogle.png"
            alt="logo"
          ></img>
        </a>
        <Search />
      </header>

      <ShowLists lists={lists} />
    </section>
  );
};

export default Searched;
