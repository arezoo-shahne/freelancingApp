import { useForm } from "react-hook-form";
import Selection from "../../ui/Selection";
import useChangeStatus from "./useChangeStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../ui/Loader";

const options = [
  {
    value: 0,
    label: "رد شده",
  },
  {
    value: 1,
    label: "در انتظار تایید",
  },
  {
    value: 2,
    label: "تایید شده",
  },
];
function ChangeProosalStatus({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeStatus, isChanging } = useChangeStatus();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();

  const changeStatusHandler = (data) => {
    changeStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(changeStatusHandler)}>
      <Selection
        name="status"
        label="تغییر وضعیت"
        option={options}
        register={register}
        require
      />
      {isChanging ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}
export default ChangeProosalStatus;
