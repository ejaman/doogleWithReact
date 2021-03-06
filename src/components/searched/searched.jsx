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
      sort: "πΌ Flower",
      name: "λΈλ£¬ν μμ",
      type: "κ°μ§κ³Ό",
      eng: "Brunfelsia species",
      fileURL: null,
    },
    {
      id: 2,
      sort: "πΌ Flower",
      name: "λ°μ΄μ§",
      type: "κ΅­νκ³Ό",
      eng: "Chrysanthemum species",
      fileURL: null,
    },
    {
      id: 3,
      sort: "π³ Plant",
      name: "μΌμ",
      type: "λ€μ‘μλ¬Ό",
      eng: "Crassula arborescens",
      fileURL: null,
    },
    {
      id: 4,
      sort: "π­ Food",
      name: "μν",
      type: "μ±μ",
      eng: "Onion",
      fileURL: null,
    },
    {
      id: 5,
      sort: "π­ Food",
      name: "ν",
      type: "μ±μ",
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
            <span>π</span>
            <input className={styles.searchBar} ref={TermRef} type="text" />
            <button className={styles.submit} onClick={onSearchClick}></button>
          </form>
          {/* <Search lists={lists} /> */}
        </div>
      </header>

      <div className={styles.list}>
        {/* κ²°κ³Όκ° λμ€λ κ³³ */}
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
