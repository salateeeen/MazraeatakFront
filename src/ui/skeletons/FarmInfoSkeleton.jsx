import styles from "./FarmInfoSkeleton.module.css";
import globalStyle from "./Global.module.css";

function FarmInfoSkeleton() {
  return (
    <div className={styles.infoSkeleton}>
      {/* Farm Name */}
      <div className={`${styles.name} ${globalStyle.skeleton}`} />

      {/* City */}
      <div className={`${styles.label} ${globalStyle.skeleton}`} />

      {/* Facilities */}
      <div className={styles.facilities}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`${styles.facility} ${globalStyle.skeleton}`} />
        ))}
      </div>

      {/* Category */}
      <div className={`${styles.label} ${globalStyle.skeleton}`} />

      {/* Maximum Guests */}
      <div className={`${styles.label} ${globalStyle.skeleton}`} />

      {/* Rating */}
      <div className={`${styles.rating} ${globalStyle.skeleton}`} />

      {/* Price */}
      <div className={`${styles.price} ${globalStyle.skeleton}`} />

      {/* Available Days */}
      <div className={styles.days}>
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className={`${styles.day} ${globalStyle.skeleton}`} />
        ))}
      </div>

      {/* Owner & Booking */}
      <div className={styles.footer}>
        <div className={`${styles.profile}`}>
          <p className={`${globalStyle.skeleton}`}></p>
          <p className={`${globalStyle.skeleton}`}></p>
        </div>

        <div className={`${styles.button} ${globalStyle.skeleton}`} />
      </div>
    </div>
  );
}

export default FarmInfoSkeleton;
