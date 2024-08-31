import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  let isAuthorized = false;

  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };

  const currentRole = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(currentRole)) {
    if (user && user.role === ROLES[currentRole]) isAuthorized = true;
  }

  return { isLoading, user, isAuthenticated, isAuthorized, isVerified };
}
