import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/authServices";

export default function useUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
    retry: false,
    refetchOnReconnect: true,
  });

  const { user } = data || [];
  return {user,isLoading}
}
