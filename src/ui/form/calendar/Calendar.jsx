import styles from "./Calendar.module.css";

function Calendar({ className, register, name }) {
  return (
      <input
        type="date"
        name={name}
        {...register?.(name)}
        className={`${className}`}
      />
  );
}

export default Calendar;
