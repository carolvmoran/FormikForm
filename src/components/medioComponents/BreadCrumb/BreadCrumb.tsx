import React from "react";
import home from "./assets/home.svg";
import arrowRight from "./assets/arrowRight.svg";
import styles from "./BreadCrumb.module.css";
import { Icone } from "../../miniComponents/Icones/Icone";
import { Link } from "../../miniComponents/Links/Link";
const BreadCrumb = () => {
  return (
    <nav>
      <ul className={styles["ul"]}>
        <Link href="/" estilo={styles["linkHome"]}>
          <Icone src={home} alt="home" estilo={styles["home"]}></Icone>
        </Link>
        <Icone
          src={arrowRight}
          alt="arrowRight"
          estilo={styles["arrow"]}
        ></Icone>
        <li>Institucional</li>
      </ul>
    </nav>
  );
};

export { BreadCrumb };
