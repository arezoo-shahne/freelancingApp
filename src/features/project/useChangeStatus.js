import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalsServices";

export default function useChangeStatus() {
  const { isPending: isChanging, mutate: changeStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { changeStatus, isChanging };
}
