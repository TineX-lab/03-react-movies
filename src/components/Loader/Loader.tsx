import React from "react";
import css from "./Loader.module.css";

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return <p className={css.text}>Loading movies, please wait...</p>;
};

export default Loader;
