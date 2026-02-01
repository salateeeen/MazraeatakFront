import { useFormContext } from "react-hook-form";
import { capitalizeFirstLetter, toCamelCase } from "@utils/handleStrings";
import styles from "../Form.module.css";
import inputStyles from "./Input.module.css";
import React from "react";

function Input({
  type = "text",
  list,
  className,
  noRegister = false,
  readOnly = false,
  required = false,
  label = true,
  name,
  placeholder = name,
  onBlur,
  onClick,
  onKeyDown,
  onChange,
  display = "column",
  value,
  children,
}) {
  const form = useFormContext();
  const register = form ? form.register : () => {};
  const displaySpan = display === "row" ? styles.row : styles.column;
  const registerResult = noRegister || !form ? {} : register(toCamelCase(name));

  const styledChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const mergedClassName = `${child.props.className || ""} ${
      inputStyles.icon
    }`;
    return React.cloneElement(child, { className: mergedClassName });
  });

  return (
    <div className={`${styles.container} ${displaySpan}`}>
      {label && <span>{`${capitalizeFirstLetter(name)}`}</span>}
      <div className={inputStyles.composition}>
        <input
          className={`${inputStyles.input} ${className}`}
          type={type}
          list={list}
          value={value}
          placeholder={placeholder}
          {...registerResult}
          readOnly={readOnly}
          required={required}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onClick={onClick}
          onChange={(e) => {
            registerResult.onChange?.(e);
            onChange?.(e);
          }}
        />
        {styledChildren}
      </div>
    </div>
  );
}

export default Input;
