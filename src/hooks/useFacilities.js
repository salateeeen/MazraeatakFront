import { fetchFacilities } from "@/services/facilitiesApi";
import { useQuery } from "@tanstack/react-query";

export const useFacilities = () => {
  return useQuery({
    queryKey: ["facilities"],
    queryFn: fetchFacilities,
  });
};
