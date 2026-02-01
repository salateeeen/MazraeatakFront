import Button from "../button/Button";
import styles from "./NotFound.module.css";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/app/home");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Oops! Page not found.</p>
      <Button className={styles.btn} onClick={handleNavigate}>
        Go Home
      </Button>
    </div>
  );
}

export default NotFound;
