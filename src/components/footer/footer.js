import React from "react";
import * as styles from "./footer.module.scss";

export const Footer = ({ children }) => (
  <section className={styles.footer}>{children}</section>
);
