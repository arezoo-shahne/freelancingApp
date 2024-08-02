import { useState } from "react";
import InputForm from "../../ui/InputForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message)
      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form className="space-y-6" onSubmit={sendOtpHandler}>
      <InputForm
        name={phoneNumber}
        label={"شماره موبایل خود را وارد کنید:"}
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <button type="submit" className="btn btn--primary w-full">
        ارسال کد تایید
      </button>
    </form>
  );
}

export default SendOTPForm;
