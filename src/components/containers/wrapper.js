import React from "react";
import styles from "./wrapper.module.scss";

const Main = ({ children }) => <div className={styles.wrapper}>{children}</div>;

export default Main;
