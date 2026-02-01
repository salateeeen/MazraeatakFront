import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";
import Cards from "@/ui/cards/Cards";
import { useParams } from "react-router-dom";
import NoCardsYet from "@/ui/noCardsYet/NoCardsYet";
import Title from "@/ui/title/Title";
import { useReviews } from "../hooks/useReviews";
import ReviewCardSkeleton from "@/ui/skeletons/ReviewCardSkeleton";

function Reviews() {
  const { id } = useParams();

  const { data,isPending, error } = useReviews(id);
  const hasReviws = data?.reviews.length > 0;

  return (
    <Cards className={styles.cards} header={<Title>Reviews</Title>}>
      {error && (
        <NoCardsYet
          title="Something went wrong"
          message={error.message || "Failed to load reviews"}
        />
      )}

      {isPending &&
        Array.from({ length: 5 }, (_, i) => <ReviewCardSkeleton key={i} />)}

      {!isPending && !error && !hasReviws && (
        <NoCardsYet
          title="No reviews found"
          message="Be the first to leave a review!"
        />
      )}

      {!isPending &&
        !error &&
        hasReviws &&
        data.reviews.map((review, i) => <ReviewCard key={i} review={review} />)}
    </Cards>
  );
}

export default Reviews;
