import { useForm } from "react-hook-form";
import InputForm from "../../ui/InputForm";
import Loader from "../../ui/Loader";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const { createProposal, isPending } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createProposalHandler = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(createProposalHandler)} className="space-y-8">
      <InputForm
        register={register}
        name="description"
        label="توضیحات"
        required
        validationSchema={{
          minLength: {
            value: 20,
            message: "طول توضیحات باید حداکثر 20 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <InputForm
        register={register}
        name="price"
        label="قیمت(ریال)"
        required
        errors={errors}
      />
      <InputForm
        register={register}
        name="duration"
        label="مدت زمان"
        required
        errors={errors}
      />
      <div className="flex justify-between items-center gap-x-6">
        {isPending ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary flex-1">
            تایید
          </button>
        )}
        <button onClick={onClose} className="btn btn--danger flex-1">
          لغو
        </button>
      </div>
    </form>
  );
}
export default CreateProposal;
