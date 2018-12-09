import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styles from "./mainHeader.module.scss";

const MainHeader = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery1 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <header>
          <h2 className={styles.h2}>{data.site.siteMetadata.title}</h2>
          <p className={styles.p}>Web Developer</p>
        </header>
      </>
    )}
  />
);

export default MainHeader;
