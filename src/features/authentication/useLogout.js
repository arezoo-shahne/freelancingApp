import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
  });
  return { logout, isPending };
}
