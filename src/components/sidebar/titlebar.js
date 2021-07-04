import React from "react";
import * as styles from "./titlebar.module.scss";

/*
    Only becomes visible on smaller screen sizes when the sidebar is hidden.
    This contains the hamburger menu icon which will show the sidebar when it is
    clicked on.
*/
const TitleBar = ({ onToggleClick, sidebarVisible }) => {
  let titleBarStyles = styles.titleBar;
  if (sidebarVisible) titleBarStyles += ` ${styles.mobileTitlebar}`;

  return (
    <div className={titleBarStyles}>
      <a href="#" className={styles.toggle} onClick={onToggleClick}>
        <span className={styles.icon} />
      </a>
      <span className={styles.title}>Koen Castermans</span>
    </div>
  );
};

export default TitleBar;
