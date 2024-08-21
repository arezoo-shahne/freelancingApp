import InputForm from "../../ui/InputForm";
import Loader from "../../ui/Loader";

function SendOTPForm({
  onSubmit,
  isPending,
  register
}) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <InputForm
        name={"phoneNumber"}
        label={"شماره موبایل خود را وارد کنید:"}
        register={register}
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
