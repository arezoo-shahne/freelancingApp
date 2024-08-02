import SendOTPForm from "../features/authentication/SendOTPForm";
import CheckOTPForm from "../features/authentication/CheckOTPForm";

function Auth() {
  return (
    <div className="flex justify-center pt-8">
      <div className="w-full sm:max-w-md">
      <SendOTPForm />
      {/* <CheckOTPForm/> */}
      </div>
    </div>
  );
}

export default Auth;
