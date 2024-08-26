import { NavLink } from "react-router-dom";

export function CustomNavlink({ children, to }) {
  const NavlinkClass =
    "flex items-center gap-x-2 hover:bg-primary-200/30 px-2 py-1.5 rounded-md transition-all duration-300 ease-out";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${NavlinkClass} bg-primary-200/30 text-primary-600 `
            : `${NavlinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
