import { useForm } from "react-hook-form";
import InputForm from "../../ui/InputForm";
import Loader from "../../ui/Loader";
import useCreateCategory from "./useCreateCategory";

function CreateCategory({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createCategory, isPending } = useCreateCategory();

  function createCategoryHandler(data) {
    createCategory(data, {
      onSuccess: () => {
        onClose();
      },
    });
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit(createCategoryHandler)}>
      <InputForm
        register={register}
        name="title"
        label="عنوان:"
        required
        validationSchema={{
          maxLength: {
            value: 20,
            message: "طول عنوان باید حداکثر 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <InputForm
        label="توضیحات:"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضرورری است",
          minLength: {
            value: 15,
            message: "طول توضیحات باید حداقل 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <InputForm
        register={register}
        name="englishTitle"
        label="عنوان انگلیسی"
        required
        errors={errors}
      />
      <InputForm
        register={register}
        name="type"
        label="نوع"
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

export default CreateCategory;
