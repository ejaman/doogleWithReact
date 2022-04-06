import React from "react";
import styles from "./search.module.css";

const Search = (props) => {
  return (
    <form className={styles.search}>
      <input className={styles.searchBar} type="text" placeholder="검색" />
    </form>
    /* 검색 부분 */
  );
};

export default Search;
