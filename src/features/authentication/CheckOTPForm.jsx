import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loader from "../../ui/Loader";


const RESENS_TIME = 10;

function CheckOTPForm({ phoneNumber, onBack, resendCode, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESENS_TIME);
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const chechOtpHAndler = async (e) => {
    e.preventDefault();
    try {
      const { message, user, isPending } = await mutateAsync({
        phoneNumber,
        otp,
      });
      toast.success(message);
      if (user.isActive) {
        //*navigate to profile based on role
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="space-y-4">
      <button onClick={onBack} className="w-6 h-6 text-secondary-700">
        <HiArrowRight />
      </button>
      <div>
        {otpResponse && (
          <p className="flex items-center">
            <span>{otpResponse.message}</span>
            <button onClick={onBack}>
              <CiEdit className="h-6 w-6 text-primary-600 mr-1" />
            </button>
          </p>
        )}
      </div>
      <form className="space-y-6" onSubmit={chechOtpHAndler} type="text">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-4 justify-center"
          inputStyle="border border-primary-400 rounded-md "
        />
        {!isPending ? (
          <Loader/>
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
        <div className="font-bold text-secondary-700">
          {time > 0 ? (
            <p>{time} ثانیه تا ارسال مجدد کد تایید</p>
          ) : (
            <button onClick={resendCode} className="btn ">
              ارسال مجدد کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
