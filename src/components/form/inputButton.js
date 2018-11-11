import React from "react";
import styles from "./inputButton.module.scss";

const InputButton = ({ defaults, primary, fit }) => {
  let buttonStyles = styles.button;
  if (primary) buttonStyles += ` ${styles.buttonPrimary}`;
  if (fit) buttonStyles += ` ${styles.buttonFit}`;

  return <input {...defaults} className={buttonStyles} />;
};

export default InputButton;
