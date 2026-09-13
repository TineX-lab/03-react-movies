import React from "react";
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {}

const ErrorMessage: React.FC<ErrorMessageProps> = () => {
  return <p className={css.text}>There was an error, please try again...</p>;
};

export default ErrorMessage;
