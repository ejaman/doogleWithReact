import React from "react";
import styles from "./doogle.module.css";

const Doogle = (props) => {
  return (
    <section>
      <h1>doogle</h1>
      <img className="logo" src="./images/doogle.png" alt="logo"></img>
      <form className="search">
        <input className="searchBar" type="text" placeholder="🔍" />
      </form>
      <div className="btns">
        <button className="showBtn">☠️</button>
        <button className="plantBtn">🌳</button>
        <button className="foodBtn">🍭</button>
        <button className="addBtn">➕</button>
      </div>
    </section>
  );
};

export default Doogle;
