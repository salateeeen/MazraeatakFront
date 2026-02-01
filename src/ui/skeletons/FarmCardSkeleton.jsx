import styles from "./FarmCardSkeleton.module.css";
import globalStyle from "./Global.module.css";

function FarmCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={`${styles.img} ${globalStyle.skeleton}`}></div>

      <div className={`${styles.info}`}>
        <p className={`${styles.rating} ${globalStyle.skeleton}`}></p>
        <p className={`${styles.city} ${globalStyle.skeleton}`}></p>
        <p className={`${styles.price} ${globalStyle.skeleton}`}></p>
      </div>
    </div>
  );
}

export default FarmCardSkeleton;
