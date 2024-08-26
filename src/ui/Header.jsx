import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import Headermenu from "./Headermenu";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="px-8 py-4 bg-secondary-0 border-b border-b-secondary-200">
      <div
        className={`container flex justify-between items-center xl:max-w-screen-lg 
        ${isLoading ? "blur-sm opacity-50" : ""}
        `}
      >
        <UserAvatar />
        <Headermenu />
      </div>
    </div>
  );
}

export default Header;
