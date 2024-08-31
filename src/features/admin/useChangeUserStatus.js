import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { changeUserStatusApi } from "../../services/authServices";
import toast from "react-hot-toast";

export function useChangeUserStatus() {
  const queryClient = useQueryClient();
  const { isPending, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey:["users"]
      })
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isPending, changeUserStatus };
}
