import { useState } from "react";
import styles from "./DeliveryMethods.module.css";
import ToggleOption from "@/ui/toggleOption/ToggleOption";

const DeliveryMethods = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className={styles.container}>
        <ToggleOption
          title="Email notifications"
          description="Receive updates via email"
          checked={emailNotif}
          onChange={() => setEmailNotif(!emailNotif)}
        />

        <ToggleOption
          title="Push notifications"
          description="Get notifications on your device"
          checked={pushNotif}
          onChange={() => setPushNotif(!pushNotif)}
        />

        <ToggleOption
          title="SMS notifications"
          description="Receive text messages"
          checked={smsNotif}
          onChange={() => setSmsNotif(!smsNotif)}
        />
    </div>
  );
};

export default DeliveryMethods;
