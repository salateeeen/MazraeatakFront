import styles from "./MapSkeleton.module.css";
import globalStyle from "./Global.module.css";

function MapSkeleton() {
  return <div className={`${styles.mapSkeleton} ${globalStyle.skeleton}`} />;
}

export default MapSkeleton;
