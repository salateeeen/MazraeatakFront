import { ArrowBigRight } from "lucide-react";
import styles from "./Anchor.module.css";
import { useNavigate } from "react-router-dom";

function Anchor({children, navigateTo}) {
  const navigate = useNavigate();
  function handleNavigate(e) {
    e.preventDefault();
    navigate(navigateTo);
  }

  return (
    <div onClick={handleNavigate} className={styles.anchor}>
      <h3>{children}</h3>
      <ArrowBigRight className={styles.arrow} />
    </div>
  );
}

export default Anchor;
