import { useNavigate } from "react-router-dom";
import useAllUsers from "../hooks/useAllUsers";
import useUser from "../features/authentication/useUser";

function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  function NavigateToDashboard(e) {
    if (user && user.role === "ADMIN") {
      return navigate("/admin");
    } else if (user && user.role === "OWNER") {
      return navigate("/owner");
    } else if (user && user.role === "FREELANCER") {
      return navigate("/freelancer");
    } else {
      return navigate("/auth");
    }
  }
  function navigateToAuth() {
    if (!user) navigate("/auth");
  }
  return (
    <div className="py-8 h-screen bg-gradient-to-r from-secondary-100 to-primary-500 space-y-32">
      <div className="flex items-center justify-center gap-x-20">
        <button className="btn btn--outline" onClick={NavigateToDashboard}>
          داشبورد
        </button>
        <button className="btn btn--outline" onClick={navigateToAuth}>
          ورود
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-10">
        <img
          src="/public/image_2024-08-28_19-05-38.png"
          className="rounded-full shadow-blue-950 shadow-xl "
          alt=""
        />
        <p className="font-bold text-xl text-secondary-100">
          یک پلتفرم برای همکاری: پروژه‌هایتان را به دست فریلنسرهای حرفه‌ای
          بسپارید!
        </p>
      </div>
    </div>
  );
}

export default Home;
