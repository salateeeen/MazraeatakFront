import { fetchFarms } from "@/services/farmsApi";
import { useQuery } from "@tanstack/react-query";

export const useAllFarms = (filters) => {
  return useQuery({
    queryKey: ["allFarms", filters],
    queryFn: fetchFarms(filters)
  });
};
