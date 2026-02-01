import { getWeekDay } from "@/utils/handleDate";
import styles from "./AvailableDays.module.css";

function AvailableDays({ className = "", availableDays = [] }) {
  return (
    <ul className={`${styles.days} ${className}`}>
      {availableDays.map(({date, available}, i) => {
        return (
          <li key={i} className={`${styles.day}`} data-available={available}>
            {getWeekDay(date)}
          </li>
        );
      })}
    </ul>
  );
}

export default AvailableDays;
