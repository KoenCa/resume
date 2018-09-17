import React from "react";
import styles from "./sidebar.module.scss";
import SidebarHeader from "./sidebarHeader";
import SidebarNav from "./sidebarNav";
import SidebarFooter from "./sidebarFooter";

const Sidebar = () => (
  <section className={styles.sidebar}>
    <SidebarHeader />
    <SidebarNav />
    <SidebarFooter />
  </section>
);

export default Sidebar;
