import { fetchFarmsName } from "@/services/farmsApi";
import { useQuery } from "@tanstack/react-query";

export const useFarmsName = (filters) => {
  console.log(filters);
  return useQuery({
    queryKey: ["farmsName", filters],
    queryFn: fetchFarmsName(filters)
  });
};
