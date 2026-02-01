import styles from "./BookingCards.module.css";
import BookingCard from "./BookingCard";
import { useEffect, useRef, useState } from "react";
import NoCardsYet from "@/ui/noCardsYet/NoCardsYet";
import BookingCardSkeleton from "@/ui/skeletons/BookingCardSkeleton";

function BookingsCards({ isPending, data, error, isPast }) {
  const hasBookings = data?.bookings?.length > 0;

  return (
    <div className={`${styles.list}`}>
      {isPending &&
        !error &&
        Array.from({ length: isPast ? 3 : 1 }, (_, i) => {
          return <BookingCardSkeleton key={i} />;
        })}

      {!isPending && !hasBookings && !error && (
        <NoCardsYet
          title="No bookings yet"
          message="Start booking amazing farm experiences!"
        />
      )}

      {!isPending &&
        hasBookings &&
        !error &&
        data.bookings.map(({ farm, startDate, endDate, totalPrice }, i) => (
          <BookingCard
            key={i}
            farm={farm}
            startDate={startDate}
            endDate={endDate}
            totalPrice={totalPrice}
            status={"confirmed"}
            isPast={isPast}
          />
        ))}

      {!isPending && error && <h1>{error.message}</h1>}
    </div>
  );
}

export default BookingsCards;
