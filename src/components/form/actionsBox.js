import React from "react";
import * as styles from "./actionsBox.module.scss";

const ActionsBox = ({ children, special, stacked, fit }) => {
  let boxStyles = styles.actions;
  if (special) boxStyles += ` ${styles.special}`;
  if (stacked) boxStyles += ` ${styles.stacked}`;
  if (fit) boxStyles += ` ${styles.fit}`;

  const listItems = children.map((child, index) => (
    <li key={index}>{child}</li>
  ));

  return <ul className={boxStyles}>{listItems}</ul>;
};

export default ActionsBox;
