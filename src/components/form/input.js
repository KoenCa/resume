import React from "react";
import validation from "./validation";
import styles from "./input.module.scss";
import generalStyles from "./formUtils.module.scss";

const Input = ({ defaults, invalid, onInput, onBlur, onInvalid }) => {
  let styling = styles.input;
  if (invalid) styling += ` ${generalStyles.generalInputInvalid}`;

  return (
    <input
      {...defaults}
      className={styling}
      onInput={onInput}
      onBlur={onBlur}
      onInvalid={onInvalid}
    />
  );
};

export default validation(Input);
