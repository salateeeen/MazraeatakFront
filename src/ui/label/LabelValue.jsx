import { capitalizeFirstLetter } from "@/utils/handleStrings";
import styles from "./LabelValue.module.css";

function LabelValue({ label, className = "", children }) {
  return (
    <div className={styles.container}>
      {label && <span className={styles.label}>{capitalizeFirstLetter(label)} :</span>}
      <span className={`${styles.value} ${className}`}>{children}</span>
    </div>
  );
}

export default LabelValue;
