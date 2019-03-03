import React from "react";
import styles from "./footer.module.scss";

export const Footer = ({ children }) => (
  <section className={styles.footer}>{children}</section>
);
