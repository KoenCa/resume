import React from "react";
import * as styles from "./inputButton.module.scss";

const InputButton = ({ defaults, primary, fit, small, large, alt }) => {
  let buttonStyles = styles.button;
  if (primary) buttonStyles += ` ${styles.buttonPrimary}`;
  if (fit) buttonStyles += ` ${styles.buttonFit}`;
  if (small) buttonStyles += ` ${styles.buttonSmall}`;
  if (large) buttonStyles += ` ${styles.buttonLarge}`;

  return <input {...defaults} className={buttonStyles} />;
};

export default InputButton;
