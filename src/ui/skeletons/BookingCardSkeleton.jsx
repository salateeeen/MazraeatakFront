import styles from "./BookingCardSkeleton.module.css";

import globalStyle from "./Global.module.css";

function BookingCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={`${styles.image} ${globalStyle.skeleton}`} />
      <div className={styles.info}>
        <div className={`${styles.title} ${globalStyle.skeleton}`} />
        <div className={styles.subInfo}>
          <div className={`${styles.date} ${globalStyle.skeleton}`} />
          <div className={`${styles.duration} ${globalStyle.skeleton}`} />
          <div className={`${styles.status} ${globalStyle.skeleton}`} />
        </div>
        <div className={styles.subInfo}>
          <div className={`${styles.price} ${globalStyle.skeleton}`} />
          <div className={`${styles.rate} ${globalStyle.skeleton}`} />
          <div className={`${styles.owner} ${globalStyle.skeleton}`} />
        </div>
      </div>
    </div>
  );
}

export default BookingCardSkeleton;
