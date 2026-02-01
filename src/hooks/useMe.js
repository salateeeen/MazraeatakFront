import { fetchMe } from "@/services/userApi";
import { useQuery } from "@tanstack/react-query";

export function useMe() {
  const token =localStorage.getItem("token");

  return useQuery({
    queryKey: ["user"],
    queryFn: fetchMe,
    enabled: !!token
  });
}
