import React from "react";
import * as styles from "./featured.module.scss";

export const Features = ({ children }) => <div>{children}</div>;

export const FeaturedItem = ({ url, pic, title, children }) => (
  <article className={styles.feature}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className={styles.featureImage}
    >
      <img src={pic} alt="Project picture" />
    </a>
    <div className={styles.featureDescription}>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  </article>
);
