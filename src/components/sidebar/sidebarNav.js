import React from "react";
import * as styles from "./sidebarNav.module.scss";

const SidebarNavItem = ({ active, onClick, id, children }) => (
  <li className={styles.navListItem}>
    <a
      href={`#${id}`}
      data-target-id={id}
      className={active ? styles.active : ""}
      onClick={onClick}
    >
      {children}
    </a>
  </li>
);

const SidebarNav = ({ sections, activeSection }) => {
  const scrollToSection = e => {
    e.preventDefault();
    const sectionId = e.nativeEvent.srcElement.dataset.targetId;
    if (!sectionId) return;
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {sections.map(section => (
          <SidebarNavItem
            active={activeSection == section.id}
            key={section.id}
            onClick={scrollToSection}
            id={section.id}
          >
            {section.title}
          </SidebarNavItem>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
