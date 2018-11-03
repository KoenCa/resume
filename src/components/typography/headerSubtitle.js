import React from "react";
import styles from "./headerSubtitle.module.scss";

// Possible levels are 2 until 6
// Header is mandatory
// Subtitle is optional
const HeaderSubtitle = ({ level, header, subtitle }) => {
  const HeaderTag = `h${level}`;
  const paragraphStyles = `${styles.p} ${styles[`p${level}`]}`;

  return (
    <header>
      <HeaderTag>{header}</HeaderTag>
      {subtitle && <p className={paragraphStyles}>{subtitle}</p>}
    </header>
  );
};

export default HeaderSubtitle;
