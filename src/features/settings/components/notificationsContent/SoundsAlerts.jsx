import { useState } from "react";
import styles from "./SoundsAlerts.module.css";
import ToggleOption from "@/ui/toggleOption/ToggleOption";

const SoundsAlerts = () => {
  const [enabled, setEnabled] = useState(true);

  const toggleSound = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <ToggleOption
        title={"Sound Alerts"}
        description={
          "Enable or disable sound notifications for messages and alerts."
        }
        checked={enabled}
        onChange={toggleSound}
      />
    </div>
  );
};

export default SoundsAlerts;
