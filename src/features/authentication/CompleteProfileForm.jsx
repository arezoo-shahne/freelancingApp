import { useState } from "react";
import InputForm from "../../ui/InputForm";
import RadioForm from "../../ui/RadioForm";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const completeProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const { user,message } = await mutateAsync({
        name,
        email,
        role,
      });
      toast.success(message)
      console.log(user);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center pt-8">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-4 " onSubmit={completeProfileHandler}>
          <InputForm
            label="نام خود را وارد کنید"
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputForm
            label={"ایمیل خود را وارد کنید"}
            name={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center items-center gap-x-8">
            <RadioForm
              name="role"
              label="کارفرما"
              id="OWNER"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioForm
              name="role"
              label="فریلنسر"
              id="FREELANCER"
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
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
