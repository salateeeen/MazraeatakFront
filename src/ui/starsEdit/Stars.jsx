import { StarIcon } from "lucide-react";
import styles from "./Stars.module.css";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

function Stars({ className, size }) {
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(0);
  const {setValue} = useFormContext()

  function handleClick(i) {
    setClick(i+1)
    setValue("rating", i+1)
  }

  function handleHover(i) {
    setHover(i+1)
  }

  function handleLeave() {
    setHover(0)
  }

  return (
    <div className={`${styles.container} ${className}`} onMouseLeave={handleLeave}>
      {Array.from({ length: 5 }, (_, i) => {
        const isFilled = (hover || click) >= i+1;
        return (
          <StarIcon
            key={i}
            size={size}
            className={`${styles.star} ${isFilled ? styles.filled : ""}`}
            onMouseEnter={() => handleHover(i)}
            onClick={() => handleClick(i)}
          />
        );
      })}
    </div>
  );
}

export default Stars;
