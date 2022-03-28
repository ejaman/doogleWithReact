import React, { useState } from "react";
import ListBtn from "../listBtn/listBtn";
import ShowLists from "../showLists/showLists";
import styles from "./doogle.module.css";

const Doogle = (props) => {
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
    <section className={styles.doogle}>
      <a href="https://github.com/ejaman/doogleWithReact">
        <img className={styles.logo} src="./images/doogle.png" alt="logo"></img>
      </a>
      <form className={styles.search}>
        <input className={styles.searchBar} type="text" placeholder="검색" />
      </form>
      <ListBtn />
      <div className={styles.showlist}>
        <ShowLists lists={lists} />
      </div>
    </section>
  );
};

export default Doogle;
