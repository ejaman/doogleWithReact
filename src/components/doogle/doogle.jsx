import React, { useState } from "react";
import ListBtn from "../listBtn/listBtn";
import styles from "./doogle.module.css";

const Doogle = (props) => {
  const [lines, setLines] = useState([
    {
      id: 1,
      sort: "🌼",
      name: "브룬펠시아",
      type: "가지과",
      eng: "Brunfelsia species",
      fileURL: "doogle.png",
    },
    {
      id: 2,
      sort: "🌼",
      name: "데이지",
      type: "국화과",
      eng: "Chrysanthemum species",
      fileURL: "doogle.png",
    },
    {
      id: 3,
      sort: "🌳",
      name: "염자",
      type: "다육식물",
      eng: "Crassula arborescens",
      fileURL: "doogle.png",
    },
  ]);

  return (
    <section className={styles.doogle}>
      <a href="https://github.com/ejaman/doogleWithReact">
        <img className={styles.logo} src="./images/doogle.png" alt="logo"></img>
      </a>
      <form className={styles.search}>
        <input className={styles.searchBar} type="text" placeholder="검색" />
      </form>
      <ListBtn />
    </section>
  );
};

export default Doogle;
