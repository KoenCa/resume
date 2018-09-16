import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sidebar.module.scss";
import avatar from "../../images/avatar.jpg";

console.log(styles);


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

const SidebarNav = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li className={styles.navListItem}>
        <a href="#one" className="active">
          About
        </a>
      </li>
      <li className={styles.navListItem}>
        <a href="#two">Things I Can Do</a>
      </li>
      <li className={styles.navListItem}>
        <a href="#three">A Few Accomplishments</a>
      </li>
      <li className={styles.navListItem}>
        <a href="#four">Contact</a>
      </li>
    </ul>
  </nav>
);

const SidebarFooter = () => (
  <footer className={styles.footer}>
    <ul className={styles.footerIcons}>
      <li className={styles.footerIcon}>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li className={styles.footerIcon}>
        <a href="#" className="icon">
          <FontAwesomeIcon icon={["fab", "github"]} />
          <span className="label">Github</span>
        </a>
      </li>
      <li className={styles.footerIcon}>
        <a href="#" className="icon fa-envelope">
          <FontAwesomeIcon icon="envelope" />
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
  </footer>
);

const Sidebar = () => (
  <section className={styles.sidebar}>
    <SidebarHeader />
    <SidebarNav />
    <SidebarFooter />
  </section>
);

export default Sidebar;
