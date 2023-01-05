import React from "react";
import home from "./assets/home.svg";
import arrowRight from "./assets/arrowRight.svg";
import styles from "./TitleAndBread.module.css";
const BreadCrumb = () => {
  return (
    <nav>
      <ul className={styles["ul"]}>
        <li>
          <img src={home} alt="home" />
        </li>
        <li>
          <img src={arrowRight} alt="arrowRight" />
        </li>
        <li>Institucional</li>
      </ul>
    </nav>
  );
};

export { BreadCrumb };
