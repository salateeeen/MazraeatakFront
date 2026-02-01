import { StarIcon } from "lucide-react";
import styles from "./Stars.module.css";

function Stars({ rating = 1, className, size, length = 5 }) {
  return (
    <div className={`${styles.container} ${className}`}>
      {Array.from({ length: length }, (_, i) => {
        const isFilled = rating >= i + 1;
        return (
          <StarIcon
            key={i}
            size={size}
            className={`${styles.star} ${isFilled ? styles.filled : ""}`}
          />
        );
      })}
    </div>
  );
}

export default Stars;
