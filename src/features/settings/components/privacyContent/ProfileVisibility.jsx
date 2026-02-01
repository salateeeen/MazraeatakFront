import { useState } from "react";
import styles from "./ProfileVisibility.module.css";
import RadioOption from "@/ui/radioOption/RadioOption";

const ProfileVisibility = () => {
  const [visibility, setVisibility] = useState("public");
  const handleVisibilityChange = (e) => {
    setVisibility(e.target.value);
  };

  return (
    <div className={styles.container}>
      <RadioOption
        name="visibility"
        value="public"
        title="Public"
        description="Anyone can view your profile"
        checked={visibility === "public"}
        onChange={handleVisibilityChange}
      />

      <RadioOption
        name="visibility"
        value="private"
        title="Private"
        description="Only you can see your profile"
        checked={visibility === "private"}
        onChange={handleVisibilityChange}
      />
    </div>
  );
};

export default ProfileVisibility;
