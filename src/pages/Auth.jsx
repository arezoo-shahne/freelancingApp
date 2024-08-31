import SendOTPForm from "../features/authentication/SendOTPForm";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../services/authServices";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAllUsers from "../hooks/useAllUsers";
import { useNavigate } from "react-router-dom";

function Auth() {
  const { register, handleSubmit, getValues } = useForm();
  const [step, setStep] = useState(1);
  const { isPending, mutateAsync, data } = useMutation({
    mutationFn: getOtp,
  });
  const navigate = useNavigate();
  const { users } = useAllUsers();

  useEffect(() => {
    if (users) return navigate("/", { replace: true });
  }, [users, navigate]);

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const swichPages = (step) => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            onSubmit={handleSubmit(sendOtpHandler)}
            isPending={isPending}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={data}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            resendCode={sendOtpHandler}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-8">
        <div className="w-full sm:max-w-md">{swichPages(step)}</div>
      </div>
    </div>
  );
}

export default Auth;
