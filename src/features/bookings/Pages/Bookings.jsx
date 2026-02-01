import styles from "./Bookings.module.css";
import Container from "@/ui/container/Container";
import BookingsCards from "../components/BookingCards";
import { useBookings } from "../hooks/useBookings";

function Bookings() {
  const { data, error, isPending } = useBookings();

  return (
    <Container className={styles.container}>
      <div className={styles.bookings}>
        <h2>Previous Bookings</h2>
        <BookingsCards
          data={data}
          isPending={isPending}
          error={error}
          isPast={true}
        />
      </div>

      <div className={styles.bookings}>
        <h2>Upcoming Bookings</h2>
        <BookingsCards
          data={data}
          isPending={isPending}
          error={error}
          isPast={false}
        />
      </div>
    </Container>
  );
}

export default Bookings;
