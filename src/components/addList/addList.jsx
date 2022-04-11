import React, { useRef } from "react";
import styles from "./addList.module.css";

const AddList = (props) => {
  const formRef = useRef();
  const nameRef = useRef();
  const engRef = useRef();
  const typeRef = useRef();
  return (
    <form className={styles.form} ref={formRef}>
      <span>
        <p className={styles.title}> 리스트를 추가해주세요.</p>
      </span>
      <p className={styles.p}>카테고리</p>
      <select className={styles.sort} name="theme">
        <option value="🌳">🌳 Plant</option>
        <option value="🌼">🌼 Flower</option>
        <option value="🍭">🍭 Food</option>
      </select>
      <p className={styles.p}>이름</p>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      ></input>
      <p className={styles.p}>영문</p>
      <input
        ref={engRef}
        className={styles.input}
        type="text"
        name="eng"
        placeholder="Eng"
      ></input>
      <p className={styles.p}>종/특징</p>
      <input
        ref={typeRef}
        className={styles.input}
        type="text"
        name="type"
        placeholder="Type / Feature"
      ></input>
      <span className={styles.btnArea}>
        <button className={styles.btns}>img</button>
        <button className={styles.btns}>add</button>
      </span>
    </form>
  );
};

export default AddList;
