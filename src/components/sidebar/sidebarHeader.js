import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import * as styles from "./sidebarHeader.module.scss";
import avatar from "../../images/avatar.webp";

const SidebarHeader = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <header className={styles.header}>
          <span className={`image avatar ${styles.avatar}`}>
            <img src={avatar} alt="" />
          </span>
          <h1>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </h1>
          <p>Full Stack Web Developer with a passion for the front-end</p>
        </header>
      </>
    )}
  />
);

export default SidebarHeader;
