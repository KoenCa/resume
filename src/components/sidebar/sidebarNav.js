import React from "react";
import styles from "./sidebarNav.module.scss";

const SidebarNav = () => {
  const scrollToSection = e => {
    e.preventDefault();
    const sectionId = e.nativeEvent.srcElement.dataset.targetId;
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <a
            data-target-id="one"
            href="#one"
            className={styles.active}
            onClick={scrollToSection}
          >
            About
          </a>
        </li>
        <li className={styles.navListItem}>
          <a data-target-id="two" href="#two" onClick={scrollToSection}>
            Things I can do
          </a>
        </li>
        <li className={styles.navListItem}>
          <a data-target-id="three" href="#three" onClick={scrollToSection}>
            A few accomplishments
          </a>
        </li>
        <li className={styles.navListItem}>
          <a data-target-id="four" href="#four" onClick={scrollToSection}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
