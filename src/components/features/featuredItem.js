import React from "react";
import {
  feature,
  featureImageContainer,
  featureImage,
  featureImageObjectFitCover,
  featureImageObjectFitContain,
  featureDescription,
} from "./featuredItem.module.scss";

const FeaturedItem = ({
  url,
  pic,
  title,
  picFit = "cover", // "cover" or "contain"
  children,
}) => (
  <article className={feature}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className={featureImageContainer}
    >
      <img
        className={featureImageClassNames(picFit)}
        src={pic}
        alt="Featured item picture"
      />
    </a>
    <div className={featureDescription}>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  </article>
);

const featureImageClassNames = (picFit) => {
  let classNames = featureImage;

  if (picFit === "cover") classNames += ` ${featureImageObjectFitCover}`;
  if (picFit === "contain") classNames += ` ${featureImageObjectFitContain}`;

  return classNames;
};

export default FeaturedItem;
