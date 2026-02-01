import styles from "./ReviewCardSkeleton.module.css";
import globalStyle from "./Global.module.css";

import { memo } from "react";

function ReviewCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <p className={`${globalStyle.skeleton}`}></p>
        <p className={`${globalStyle.skeleton}`}></p>
      </div>

      <div className={styles.rateDate}>
        <p className={`${globalStyle.skeleton}`}></p>
        <p className={`${globalStyle.skeleton}`}></p>
      </div>

      <div className={styles.message}>
        <p className={`${globalStyle.skeleton}`}></p>
      </div>
    </div>
  );
}

export default memo(ReviewCardSkeleton);
