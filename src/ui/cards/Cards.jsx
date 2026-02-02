import React from "react";
import styles from "./Cards.module.css";
import Container from "../container/Container";

function Cards({ children, className = "", header }) {
  return (
    <Container className={`${styles.container}`}>
      {header}
      <div className={`${styles.cards}  ${className}`}>{children}</div>
    </Container>
  );
}

export default Cards;
