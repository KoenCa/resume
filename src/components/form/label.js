import React from "react";
import styles from "./label.module.scss";

const Label = ({ children }) => (
  <label className={styles.label}>{children}</label>
);

export default Label;
