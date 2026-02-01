import { fetchFavoritesFarms } from "@/services/userApi";
import { useQuery } from "@tanstack/react-query";

export const useFavoritesFarms = () => {
  return useQuery({
    queryKey: ["favFarms"],
    queryFn: fetchFavoritesFarms,
  });
};


