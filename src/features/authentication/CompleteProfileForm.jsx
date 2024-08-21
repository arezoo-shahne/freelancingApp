import InputForm from "../../ui/InputForm";
import RadioForm from "../../ui/RadioForm";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const { handleSubmit, register, watch,formState: { errors } } = useForm();

  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const completeProfileHandler = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", {
          icon: "⌛",
        });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      toast.success(message);
      console.log(user);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center pt-8">
      <div className="w-full sm:max-w-sm">
        <form
          className="space-y-4 "
          onSubmit={handleSubmit(completeProfileHandler)}
        >
          <InputForm
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            required
            errors={errors}
          />
          <InputForm
            label={"ایمیل"}
            name="email"
            
            register={register}
            required
            errors={errors}
          />
          <div className="flex justify-center items-center gap-x-8">
            <RadioForm
              name="role"
              label="کارفرما"
              id="OWNER"
              value="OWNER"
              register={register}
              watch={watch}
              required
              errors={errors}
            />
            <RadioForm
              name="role"
              label="فریلنسر"
              id="FREELANCER"
              value="FREELANCER"
              register={register}
              watch={watch}
              required
              errors={errors}

            />
          </div>
          {isPending ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
