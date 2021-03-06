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
      {/* κ²μλΆλΆ */}

      <form className={styles.search} ref={formRef}>
        <span>π</span>
        <input className={styles.searchBar} ref={searchRef} type="text" />
        <button className={styles.submit} onClick={goToSearched}></button>
      </form>

      {/* <Search lists={lists} /> */}
      {/* λ²νΌ λΆλΆ */}
      <section className={styles.btns}>
        <button className={styles.listBtn} onClick={goToSearched}>
          Show List π
        </button>

        <button className={styles.btn} onClick={onClickAddOpen}>
          Add Listβ
        </button>
      </section>
      <span className={styles.notion}> Doogle offered in: νκ΅­μ΄, English</span>

      {/* λ¦¬μ€νΈ μΆκ° */}
      {add ? (
        <div className={styles.addlist}>
          <AddList />
        </div>
      ) : null}
    </section>
  );
};

export default Doogle;
