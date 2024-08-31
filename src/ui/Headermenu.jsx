import { HiOutlineUser } from "react-icons/hi2";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import Logout from "../features/authentication/Logout";

function Headermenu() {
  return (
    <div>
      <ul className="flex justify-center items-center gap-x-4">
        <li className="flex">
          <Link to={"dashboard"}>
            <HiOutlineUser className="h-4 w-4 md:h-6 md:w-6 text-secondary-600 hover:text-primary-900 hover:!cursor-pointer" />
          </Link>
        </li>
        <li className="flex">
          <ToggleTheme />
        </li>
        <li className="flex">
          <Logout />
        </li>
      </ul>
    </div>
  );
}
export default Headermenu;
