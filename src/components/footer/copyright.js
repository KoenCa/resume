import React from "react";
import * as styles from "./copyright.module.scss";

export const Copyright = () => (
  <ul className={styles.copyright}>
    <li>&copy; Koen Castermans. All rights reserved.</li>
    <li>
      Design: <a target="_blank" href="https://html5up.net/read-only">HTML5 UP</a>
    </li>
    <li>
        Source code: <a target="_blank" href="https://github.com/KoenCa/resume">GitHub repository</a>
    </li>
  </ul>
);
