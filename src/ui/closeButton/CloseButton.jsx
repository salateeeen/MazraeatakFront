import styles from "./CloseButton.module.css";

import { X } from "lucide-react";

function CloseButton({ className, onClick }) {
  function handleClose(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <button className={`${styles.close} ${className}`} onClick={handleClose}>
      <X className={styles.icon} onClick={onClick} />
    </button>
  );
}

export default CloseButton;
