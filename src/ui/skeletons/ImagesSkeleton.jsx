import styles from "./ImagesSkeleton.module.css";
import globalStyle from "./Global.module.css";

function ImagesSkeleton({ className = "" }) {
  return (
    <div className={`${styles.photos} ${className}`}>
      <div className={`${styles.img} ${globalStyle.skeleton}`} />
      <div className={`${styles.img} ${globalStyle.skeleton}`} />
      <div className={`${styles.img} ${globalStyle.skeleton} ${styles.overlay}`} />
    </div>
  );
}

export default ImagesSkeleton;
