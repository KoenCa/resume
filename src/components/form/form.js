import React from "react";
import styles from "./form.module.scss";

const Form = ({ children }) => <form className={styles.form}>{children}</form>;

export default Form;
