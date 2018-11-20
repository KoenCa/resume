import React from "react";
import styles from "./form.module.scss";

const Form = ({ children }) => {
  const onSubmit = ({ nativeEvent }) => {
    const form = nativeEvent.target;
    if (!form.checkValidity()) nativeEvent.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {children}
    </form>
  );
};

export default Form;
