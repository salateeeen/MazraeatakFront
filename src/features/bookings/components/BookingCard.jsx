import styles from "./BookingCard.module.css";
import { formatDateTime } from "@/utils/handleDate";
import { useState } from "react";
import {
  BadgeDollarSign,
  Phone,
  Star,
  ArrowRight,
  CalendarDays,
} from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

import Rate from "@/features/reviews/components/Rate";

function BookingCard({ bookingCard }) {
  const { farm, startDate, endDate, totalPrice, isPast } = bookingCard;
  const status = "confirmed"
  const [open, setOpen] = useState(false);
  const { farmName, _id: id } = farm;
  function handleRate(e) {
    e.stopPropagation();
    setOpen(true);
  }
  function handleCall(e) {
    e.stopPropagation();
    setOpen(true);
  }
  function handleMap(e) {
    e.stopPropagation();
    setOpen(true);
  }

  return (
    <>
      <div className={styles.card}>
        {/* Image */}
        <div className={styles.image}>
          <img src="/photo.jpeg" alt={farmName} />
        </div>

        {/* Info */}
        <div className={styles.info}>
          {/* Header */}
          <div className={styles.header}>
            <h3 className={styles.title}>{farmName.toUpperCase()}</h3>

            <div className={styles.status}>
              <span className={`${styles.dot} ${styles[status]}`} />
              <span>{status}</span>
            </div>
          </div>

          {/* Dates */}
          <div className={styles.dates}>
            <CalendarDays size={20} />
            <span className={styles.date}>{formatDateTime(startDate)}</span>
            <ArrowRight size={18} className={styles.arrow} />
            <span className={styles.date}>{formatDateTime(endDate)}</span>
          </div>

          {/* Price */}
          <div className={styles.price}>
            <BadgeDollarSign size={20} />
            <span>{totalPrice} JD</span>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            {!isPast && (
              <button className={styles.rateBtn} onClick={handleRate}>
                <Star size={18} />
                Rate
              </button>
            )}

            <button className={styles.callBtn} onClick={handleCall}>
              <Phone size={18} />
              Call
            </button>

            <button className={styles.mapBtn} onClick={handleMap}>
              <FaLocationDot size={18} />
              Location
            </button>
          </div>
        </div>
      </div>

      {open && (
        <Rate open={open} setOpen={setOpen} farmName={farmName} farmId={id} />
      )}
    </>
  );
}

export default BookingCard;
