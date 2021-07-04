import React from "react";
import validation from "./validation";
import * as styles from "./textarea.module.scss";
import generalStyles from "./formUtils.module.scss";

const Textarea = ({ defaults, invalid, onInput, onBlur, onInvalid }) => {
  let styling = styles.textarea;
  if (invalid) styling += ` ${generalStyles.generalInputInvalid}`;

  return (
    <textarea
      {...defaults}
      className={styling}
      onInput={onInput}
      onBlur={onBlur}
      onInvalid={onInvalid}
    />
  );
};

export default validation(Textarea);
