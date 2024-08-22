import toast from "react-hot-toast";
import { toggleProjectStatusApi } from "../../services/projectsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();
  const { isPending: isToggling, mutate: toggleStatus } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { toggleStatus, isToggling };
}
