import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOwnerProjectApi } from "../../services/projectsServices";
import toast from "react-hot-toast";

export default function useRemoveOwnerProject() {
  const queryClient = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeOwnerProjectApi,
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
  return { removeProject, isDeleting };
}
