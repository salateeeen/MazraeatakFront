import { fetchFarmById } from "@/services/farmsApi";
import { useQuery } from "@tanstack/react-query";

export const useFarm = (id) => {
  return useQuery({
    queryKey: ["FarmById", id],
    queryFn: fetchFarmById(id),
  });
};
