import React from "react";
import * as styles from "./label.module.scss";

const Label = ({ children, defaults }) => (
  <label {...defaults} className={styles.label}>
    {children}
  </label>
);

export default Label;
