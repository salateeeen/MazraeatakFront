import { useState } from "react";
import styles from "./PrivacyOverview.module.css";
import ToggleOption from "@/ui/toggleOption/ToggleOption";

const PrivacyOverview = () => {
  const [searchVisibility, setSearchVisibility] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);

  return (
    <div className={styles.container}>
      <ToggleOption
        title="Appear in search results"
        description="Allow your profile to appear in search results"
        checked={searchVisibility}
        onChange={() => setSearchVisibility(!searchVisibility)}
      />

      <ToggleOption
        title="Data sharing"
        description="Share anonymous usage data to improve the platform"
        checked={dataSharing}
        onChange={() => setDataSharing(!dataSharing)}
      />
    </div>
  );
};

export default PrivacyOverview;
