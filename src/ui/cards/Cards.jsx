import React from "react";
import styles from "./Cards.module.css";

function Cards({ children, className = "", header }) {
  return (
    <div className={`${styles.container}`}>
      {header}
      <div className={`${styles.cards}  ${className}`}>{children}</div>
    </div>
  );
}

export default Cards;
