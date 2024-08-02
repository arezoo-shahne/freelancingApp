import { useState } from "react";
import OTPInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form className="space-y-8">
      <p>کد تایید را وارد کنید:</p>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="flex flex-row-reverse gap-x-2 "
        inputStyle="border border-primary-400 rounded-md px-4 py-1"
      />
      <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
