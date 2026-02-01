import styles from "./CheckBoxItem.module.css";
import { capitalizeFirstLetter } from "@utils/handleStrings";

function CheckBoxItem({id, label, logo, field }) {
  return (
    <label className={`${styles.label}`}>
      <input
        type="checkbox"
        hidden
        value={id}
        checked={field?.value?.includes(id)}
        onChange={(e) => {
          const checked = e.target.checked;
          if (checked) {
            field.onChange([...field.value, id]);
          } else {
            field.onChange(field.value.filter((v) => v !== id));
          }
        }}
      />
      <div className={styles.span}>
        <span>{logo}</span>
        <span>{capitalizeFirstLetter(label)}</span>
      </div>
    </label>
  );
}
export default CheckBoxItem;
