import { fetchMyFarms } from "@/services/farmsApi";
import { useQuery } from "@tanstack/react-query";

export const useMyFarms = () => {
  return useQuery({
    queryKey: ["myFarms"],
    queryFn: fetchMyFarms,
  });
};
