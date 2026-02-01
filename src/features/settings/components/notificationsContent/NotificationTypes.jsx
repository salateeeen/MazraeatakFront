import { useState } from "react";
import styles from "./NotificationTypes.module.css";
import ToggleOption from "@/ui/toggleOption/ToggleOption";

const NotificationTypes = () => {
  const [bookingNotif, setBookingNotif] = useState(true);
  const [promoNotif, setPromoNotif] = useState(false);

  return (
    <div className={styles.container}>
      <ToggleOption
        title="Bookings"
        description="Updates about your bookings and reservations"
        checked={bookingNotif}
        onChange={() => setBookingNotif(!bookingNotif)}
      />

      <ToggleOption
        title="Promotions"
        description="Offers, discounts, and announcements"
        checked={promoNotif}
        onChange={() => setPromoNotif(!promoNotif)}
      />
    </div>
  );
};

export default NotificationTypes;
