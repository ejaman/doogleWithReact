import React, { useRef, useState } from "react";
import Result from "../result/result";
import styles from "./search.module.css";

const Search = ({ lists }) => {
  const formRef = useRef();
  const [searchWord, setSearchWord] = useState();

  const searchRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    setSearchWord(searchRef.current.value);
    formRef.current.reset();
  };
  return (
    <form className={styles.search} ref={formRef}>
      <span>🔍</span>
      <input className={styles.searchBar} ref={searchRef} type="text" />
      <button className={styles.submit} onClick={onSubmit}></button>
      <div>
        <Result lists={lists} word={searchWord} />
      </div>
    </form>
  );
};

export default Search;
