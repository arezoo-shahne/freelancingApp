import Selection from "../../ui/Selection";
import Loader from "../../ui/Loader";
import { useForm } from "react-hook-form";
import { useChangeUserStatus } from "./useChangeUserStatus";
// import { useQueryClient } from "@tanstack/react-query";

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

function ChangeUserStatus({ userId, onClose }) {
  console.log(userId);
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isPending } = useChangeUserStatus();
//   const queryClient = useQueryClient();

  function changeUserStatusHandler(data) {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
        //   queryClient.invalidateQueries({
        //     queryKey: ["users"],
        //   });
        },
      }
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(changeUserStatusHandler)}
    >
      <Selection
        name="status"
        label="وضعیت"
        option={options}
        register={register}
        require
      />
      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}
export default ChangeUserStatus;
