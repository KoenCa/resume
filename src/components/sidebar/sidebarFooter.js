import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sidebarFooter.module.scss";

const SidebarFooter = () => (
  <footer className={styles.footer}>
    <ul className={styles.footerIcons}>
      <li className={styles.footerIcon}>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li className={styles.footerIcon}>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={["fab", "github"]} />
          <span className="label">Github</span>
        </a>
      </li>
      <li className={styles.footerIcon}>
        <a href="#" className="icon fa-envelope">
          <FontAwesomeIcon icon="envelope" />
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
  </footer>
);

export default SidebarFooter;
