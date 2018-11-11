import React from "react";
import styles from "./textarea.module.scss";

const Textarea = ({ defaults }) => (
  <textarea {...defaults} className={styles.textarea} />
);

export default Textarea;
