import React from "react";
import styles from "./button.module.css";

const Button = ({ type, children, search, ...props }) => {
  return (
    <button
      type={type}
      className={`${search ? styles.app__button__search : styles.app__button}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
