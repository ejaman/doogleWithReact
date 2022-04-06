import React, { useState } from "react";
import AddList from "../addList/addList";
import Footer from "../footer/footer";
import List from "../list/list";
import ShowLists from "../showLists/showLists";
import styles from "./doogle.module.css";

const Doogle = (props) => {
  const [add, setAdd] = useState(false);
  const [list, setList] = useState(false);
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

  const onClickAddOpen = (event) => {
    setAdd((prevStatus) => (prevStatus ? false : true));
  };
  const onClickListOpen = (event) => {
    setList((prevStatus) => (prevStatus ? false : true));
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
      <section className={styles.btns}>
        <button className={styles.btn} onClick={onClickListOpen}>
          Show List 📝
        </button>
        <button className={styles.btn} onClick={onClickAddOpen}>
          Add List➕
        </button>
      </section>
      <span className={styles.notion}> Doogle offered in: 한국어, English</span>

      {/* 리스트 추가 */}
      {add ? (
        <div className={styles.addlist}>
          <AddList />
        </div>
      ) : null}

      {/* 리스트 또는 검색 결과가 보여지는 부분 */}
      {list ? (
        <div className={styles.showlist}>
          <ShowLists lists={lists} />
        </div>
      ) : null}
    </section>
  );
};

export default Doogle;
