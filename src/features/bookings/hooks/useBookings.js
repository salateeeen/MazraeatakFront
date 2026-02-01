import { fetchBookings } from "@/services/bookingsApi";
import { useQuery } from "@tanstack/react-query";

export const useBookings = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });
};
