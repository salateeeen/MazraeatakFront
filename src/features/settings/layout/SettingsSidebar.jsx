import Side from "@/ui/side/Side";
import { SETTINGS } from "../config/MainSettings";
import styles from "./Styles.module.css";

function SettingsSidebar() {
  return (
    <div className={styles.container}>
      <h3>{"Settings"}</h3>
      <Side
        header={"Settings"}
        items={SETTINGS.items.map((item) => ({
          ...item,
          path: `/app/settings/${item.path}`,
        }))}
      />
    </div>
  );
}

export default SettingsSidebar;
