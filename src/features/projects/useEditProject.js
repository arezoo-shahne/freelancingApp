import toast from "react-hot-toast";
import { editOwnerProjectApi } from "../../services/projectsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditOwnerProject() {
    const queryClient = useQueryClient();
  const { isPending:isEditing, mutate: editProject } = useMutation({
    mutationFn: editOwnerProjectApi,
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
  return { editProject, isEditing };
}
