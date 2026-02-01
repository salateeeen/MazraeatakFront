import { fetchReviews } from "@/services/reviewsApi";
import { useQuery } from "@tanstack/react-query";

export const useReviews = (id) => {
  return useQuery({
      queryKey: ["reviews", id],
      queryFn: () => fetchReviews(id),
  });
};
