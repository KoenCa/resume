import React from "react";
import styles from "./featured.module.scss";

export const Features = ({ children }) => (
  <div className={styles.features}>{children}</div>
);

export const FeaturedItem = ({ url, pic, title, children }) => (
  <article className={styles.feature}>
    <a href={url} className={styles.featureImage}>
      <img src={pic} alt="Project picture" />
    </a>
    <div className={styles.featureDescription}>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  </article>
);
