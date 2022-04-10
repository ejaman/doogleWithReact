import React, { useRef } from "react";
import styles from "./search.module.css";

const Search = (props) => {
  const searchRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(searchRef.current.value);
  };
  return (
    <form className={styles.search}>
      <span>🔍</span>
      <input className={styles.searchBar} ref={searchRef} type="text" />
      <button className={styles.submit} onClick={onSubmit}></button>
    </form>
    /* 검색 부분 */
  );
};

export default Search;
