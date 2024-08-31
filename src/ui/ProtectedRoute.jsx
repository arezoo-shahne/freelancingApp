import { useEffect } from "react";
import { useAuthorize } from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loader from "../ui/Loader";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated, isAuthorized, isVerified } =
    useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access");
    if (!isVerified && !isLoading) {
      toast("پروفایل شما در انتظار تایید است", {
        icon: "⌛",
      });
      navigate("/");
    }
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading)
    <div className="flex justify-center items-center h-screen bg-secondary-0">
      <Loader />
    </div>;

  if (isAuthenticated && isAuthorized) return children;
}
export default ProtectedRoute;
