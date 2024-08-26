import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function ToggleTheme() {
  const { isDrakMode, toggleTheme } = useDarkMode();
  return isDrakMode ? (
    <button onClick={toggleTheme}>
      <HiOutlineMoon className="h-5 w-5 text-primary-900 hover:!cursor-pointer" />
    </button>
  ) : (
    <button onClick={toggleTheme}>
      <HiOutlineSun className="h-5 w-5 text-primary-900 hover:!cursor-pointer" />
    </button>
  );
}
export default ToggleTheme;
