import React from "react";
import validation from "./validation";
import styles from "./select.module.scss";
import generalStyles from "./formUtils.module.scss";

const Select = ({
  children,
  defaults,
  invalid,
  onInput,
  onBlur,
  onInvalid
}) => {
  let styling = styles.select;
  if (invalid) styling += ` ${generalStyles.generalInputInvalid}`;

  return (
    <select
      {...defaults}
      className={styling}
      onInput={onInput}
      onBlur={onBlur}
      onInvalid={onInvalid}
    >
      <option value="">Please select</option>
      {children}
    </select>
  );
};

export default validation(Select);
