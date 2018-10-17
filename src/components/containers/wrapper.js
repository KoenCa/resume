import React from "react";
import styles from "./wrapper.module.scss";

const Wrapper = ({ children, moveForSidebar }) => {
  let wrapperStyles = styles.wrapper;
  if (moveForSidebar) wrapperStyles += ` ${styles.mobileWrapper}`;

  return <div className={wrapperStyles}>{children}</div>;
};

export default Wrapper;
