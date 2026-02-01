import styles from "./ToggleOption.module.css";

function ToggleOption({ checked, onChange, title, description }) {
  return (
    <label className={styles.item}>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </label>
  );
}

export default ToggleOption;
