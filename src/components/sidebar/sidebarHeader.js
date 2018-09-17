import React from "react";
import { Link } from "gatsby";
import styles from "./sidebarHeader.module.scss";
import avatar from "../../images/avatar.jpg";

const SidebarHeader = () => (
  <header className={styles.header}>
    <span className={`image avatar ${styles.avatar}`}>
      <img src={avatar} alt="" />
    </span>
    <h1>
      <Link to="/">Willis Corto</Link>
    </h1>
    <p>
      I got reprogrammed by a rogue AI
      <br /> and now I'm totally cray
    </p>
  </header>
);

export default SidebarHeader;
