import React, { useState } from "react";
import AddList from "../addList/addList";
import Header from "../header/header";
import List from "../list/list";
import ListBtn from "../listBtn/listBtn";
import ShowLists from "../showLists/showLists";
import styles from "./doogle.module.css";

const Doogle = (props) => {
  const [open, setOpen] = useState(false);
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

  const onClickOpen = (event) => {
    setOpen((prevStatus) => (prevStatus ? false : true));
  };

  return (
    <section className={styles.doogle}>
      <a href="https://github.com/ejaman/doogleWithReact">
        <img className={styles.logo} src="./images/doogle.png" alt="logo"></img>
      </a>
      {/* 검색 부분 */}
      <form className={styles.search}>
        <input className={styles.searchBar} type="text" placeholder="검색" />
      </form>

      {/* 버튼 부분 */}
      <div className={styles.btns}>
        <div className={styles.btnSection}>
          <button className={styles.showBtn}>⚠️</button>
          <p>All</p>
        </div>
        <div className={styles.btnSection}>
          <button className={styles.plantBtn}>🌳</button>
          <p>Plants</p>
        </div>
        <div className={styles.btnSection}>
          <button className={styles.foodBtn}>🍭</button>
          <p>Foods</p>
        </div>
        <div className={styles.btnSection}>
          <button className={styles.addBtn} onClick={onClickOpen}>
            ➕
          </button>
          <p>Add</p>
        </div>
      </div>

      {/* 리스트 추가 */}
      {open ? (
        <div className={styles.addlist}>
          <AddList />
        </div>
      ) : null}

      {/* 리스트 또는 검색 결과가 보여지는 부분 */}
      <div className={styles.showlist}>
        <ShowLists lists={lists.filter((list) => !list.sort.includes("🍭"))} />
      </div>
    </section>
  );
};

export default Doogle;
