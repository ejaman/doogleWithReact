import React, { useRef, useState } from "react";
import { useLocation } from "react-router";
import Result from "../result/result";
import Search from "../search/search";
import ShowLists from "../showLists/showLists";
import styles from "./searched.module.css";

const Searched = (props) => {
  const { state } = useLocation();
  const { word } = state;
  const [Term, setTerm] = useState("");
  const formRef = useRef();
  const TermRef = useRef();

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
  const onSearchClick = (event) => {
    event.preventDefault();
    console.log(TermRef.current.value);
    setTerm(TermRef.current.value);
    formRef.current.reset();
  };
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
        <div className={styles.searchBar}>
          <form className={styles.search} ref={formRef}>
            <span>🔍</span>
            <input className={styles.searchBar} ref={TermRef} type="text" />
            <button className={styles.submit} onClick={onSearchClick}></button>
          </form>
          {/* <Search lists={lists} /> */}
        </div>
      </header>

      <div className={styles.list}>
        {/* 결과가 나오는 곳 */}
        {Term !== "" ? (
          <ShowLists lists={lists} word={Term} />
        ) : (
          <ShowLists lists={lists} word={word} />
        )}
        {/* <ShowLists lists={lists} /> */}
      </div>
    </section>
  );
};

export default Searched;
