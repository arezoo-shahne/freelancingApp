import { useState } from "react";
import InputForm from "../../ui/InputForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

function SendOTPForm({
  phoneNumber,
  setPhoneNumber,
  sendOtpHandler,
  isPending,
}) {
  return (
    <form className="space-y-6" onSubmit={sendOtpHandler}>
      <InputForm
        name={phoneNumber}
        label={"شماره موبایل خود را وارد کنید:"}
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      )}
    </form>
  );
}

export default SendOTPForm;
