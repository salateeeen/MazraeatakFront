import { useState } from "react";
import styles from "./DataProtection.module.css";
import ToggleOption from "@/ui/toggleOption/ToggleOption";

const DataProtection = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  const [activityLog, setActivityLog] = useState(true);

  return (
    <div className={styles.container}>
      <ToggleOption
        title="Two-factor authentication"
        description="Add an extra layer of security to your account"
        checked={twoFactor}
        onChange={() => setTwoFactor(!twoFactor)}
      />

      <ToggleOption
        title="Activity log"
        description="Keep a record of recent account activity"
        checked={activityLog}
        onChange={() => setActivityLog(!activityLog)}
      />

      <div className={styles.actions}>
        <button className={styles.secondary}>Download my data</button>
        <button className={styles.danger}>Delete my data</button>
      </div>
    </div>
  );
};

export default DataProtection;
