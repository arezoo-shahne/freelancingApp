import toast from "react-hot-toast";
import { createOwnerProjectApi } from "../../services/projectsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateOwnerProject() {
  const queryClient = useQueryClient();
  const { isPending, mutate: createProject } = useMutation({
    mutationFn: createOwnerProjectApi,
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
  return { createProject, isPending };
}
