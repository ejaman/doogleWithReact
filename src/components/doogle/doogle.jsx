import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import AddList from "../addList/addList";
import Search from "../search/search";
import styles from "./doogle.module.css";

const Doogle = (props) => {
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef();
  const searchRef = useRef();

  const [lists, setLists] = useState([
    {
      id: 1,
      sort: "🌼 Flower",
      name: "브룬펠시아",
      type: "가지과",
      eng: "Brunfelsia species",
      fileURL: null,
    },
    {
      id: 2,
      sort: "🌼 Flower",
      name: "데이지",
      type: "국화과",
      eng: "Chrysanthemum species",
      fileURL: null,
    },
    {
      id: 3,
      sort: "🌳 Plant",
      name: "염자",
      type: "다육식물",
      eng: "Crassula arborescens",
      fileURL: null,
    },
    {
      id: 4,
      sort: "🍭 Food",
      name: "양파",
      type: "채소",
      eng: "Onion",
      fileURL: null,
    },
    {
      id: 5,
      sort: "🍭 Food",
      name: "파",
      type: "채소",
      eng: "Spring Onion",
      fileURL: null,
    },
  ]);
  const goToSearched = () => {
    navigate("/search", { state: { word: searchRef.current.value } });
  };

  const onClickAddOpen = (event) => {
    setAdd((prevStatus) => (prevStatus ? false : true));
  };

  return (
    <section className={styles.doogle}>
      <a href="https://github.com/ejaman/doogleWithReact">
        <img className={styles.logo} src="./images/doogle.png" alt="logo"></img>
      </a>
      {/* 검색부분 */}

      <form className={styles.search} ref={formRef}>
        <span>🔍</span>
        <input className={styles.searchBar} ref={searchRef} type="text" />
        <button className={styles.submit} onClick={goToSearched}></button>
      </form>

      {/* <Search lists={lists} /> */}
      {/* 버튼 부분 */}
      <section className={styles.btns}>
        <button className={styles.listBtn} onClick={goToSearched}>
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
    </section>
  );
};

export default Doogle;
