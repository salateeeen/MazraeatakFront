import { useFormContext } from "react-hook-form";
import { capitalizeFirstLetter, toCamelCase } from "@utils/handleStrings";
import styles from "../Form.module.css";
import selectStyles from "./Select.module.css";

function Select({
  className = "",
  name,
  label = true,
  options,
  display = "column",
  onChange,
  noRegister = false,
}) {
  const displaySpan = display === "row" ? styles.row : styles.column;
  const form = useFormContext();
  const register = form ? form.register : () => {};
  const registerResult = noRegister || !form ? {} : register(toCamelCase(name));
  const r = register(toCamelCase(name));

  return (
    <div className={`${styles.container} ${displaySpan}`}>
      {label && <span>{`${capitalizeFirstLetter(name)}`}</span>}
      <select
      defaultValue={""}
        className={`${selectStyles.select}${className}`}
        name={toCamelCase(name)}
        {...registerResult}
        onChange={(e) => {
          registerResult.onChange?.(e);
          onChange?.(e);
        }}
      >
        <option value="" disabled>
          {name}
        </option>
        {options.map(({ value, label }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
