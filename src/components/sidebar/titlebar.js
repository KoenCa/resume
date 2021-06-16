import React from "react";
import * as styles from "./titlebar.module.scss";

const Sidebar = ({ onToggleClick, sidebarVisible }) => {
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

export default Sidebar;
