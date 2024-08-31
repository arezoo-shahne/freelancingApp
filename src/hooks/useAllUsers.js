import { useQuery } from "@tanstack/react-query";
import { getAllUsersApi } from "../services/authServices";

export default function useAllUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsersApi,
  });
  const { users } = data || {};
  return { isLoading, users };
}
