import Stars from "@/ui/stars/Stars";
import styles from "./ReviewCard.module.css";
import { formatRelativeDate } from "@/utils/handleDate";
import Profile from "@/ui/profile/Profile";

function ReviewCard({ review }) {
  const { user, rating, message, createdAt } = review;

  return (
    <div className={styles.card}>
      <Profile user={user} />

      <div className={styles.rateDate}>
        <Stars rating={rating} />
        <p className={styles.date}>{formatRelativeDate(createdAt)}</p>
      </div>

      <div className={styles.message}>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
