import React from "react";
import * as styles from "./headerSubtitle.module.scss";

// Possible levels are 2 until 6
const HeaderSubtitle = ({ level, children }) => {
  const paragraphStyles = `${styles.p} ${styles[`p${level}`]}`;

  return <p className={paragraphStyles}>{children}</p>;
};

export default HeaderSubtitle;
