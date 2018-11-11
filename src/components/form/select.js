import React from "react";
import styles from "./select.module.scss";

const Select = ({ children, defaults }) => (
  <select {...defaults} className={styles.select}>
    {children}
  </select>
);

export default Select;
