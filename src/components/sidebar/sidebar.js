import React from "react";
import styles from "./sidebar.module.scss";
import SidebarHeader from "./sidebarHeader";
import SidebarNav from "./sidebarNav";
import SidebarFooter from "./sidebarFooter";

const Sidebar = ({ sections, activeSection }) => (
  <section className={styles.sidebar}>
    <SidebarHeader />
    <SidebarNav sections={sections} activeSection={activeSection} />
    <SidebarFooter />
  </section>
);

export default Sidebar;
