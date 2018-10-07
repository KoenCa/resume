import React from "react";
import styles from "./titleBar.module.scss";

const Sidebar = ({ onToggleClick, sidebarVisible }) => {
  let titleBarStyles = styles.titleBar;

  return (
    <div className={styles.titleBar}>
      <a href="#" className={styles.toggle} onClick={onToggleClick}>
        <span className={styles.icon} />
      </a>
      <span className={styles.title}>Koen Castermans</span>
    </div>
  );
};

export default Sidebar;
