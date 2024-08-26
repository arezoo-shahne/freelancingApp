import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loader from "../../ui/Loader";

function Logout() {
  const { isPending, logout } = useLogout();

  return isPending ? (
    <Loader />
  ) : (
    <button onClick={logout}>
      <HiArrowLeftEndOnRectangle className="h-5 w-5 text-secondary-600 hover:text-error hover:!cursor-pointer" />
    </button>
  );
}
export default Logout;
