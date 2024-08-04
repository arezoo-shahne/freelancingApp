import SendOTPForm from "../features/authentication/SendOTPForm";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../services/authServices";
import toast from "react-hot-toast";

function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const { isPending, mutateAsync, data } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
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
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            sendOtpHandler={sendOtpHandler}
            isPending={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={data}
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            resendCode={sendOtpHandler}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex justify-center pt-8">
      <div className="w-full sm:max-w-md">{swichPages(step)}</div>
    </div>
  );
}

export default Auth;
