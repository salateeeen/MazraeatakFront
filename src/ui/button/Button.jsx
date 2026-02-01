import styles from "./Button.module.css";

function Button({ className, type = "button", disabled, onClick, children }) {
  return (
    <button
      className={`${styles.btn} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
