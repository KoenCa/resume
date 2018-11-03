import React from "react";
import styles from "./input.module.scss";

const Input = ({ defaults }) => (
  <input {...defaults} className={styles.input} />
);

export default Input;
