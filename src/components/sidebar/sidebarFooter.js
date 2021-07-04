import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styles from "./sidebarFooter.module.scss";

const SidebarFooter = () => (
  <footer className={styles.footer}>
    <ul className={styles.footerIcons}>
      <li className={styles.footerIcon}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/koen-castermans-bb1959142/"
          className="icon"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li className={styles.footerIcon}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/KoenCa"
          className="icon"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
          <span className="label">Github</span>
        </a>
      </li>
      <li className={styles.footerIcon}>
        <a href="mailto:castermanskoen@msn.com" className="icon fa-envelope">
          <FontAwesomeIcon icon="envelope" />
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
  </footer>
);

export default SidebarFooter;
