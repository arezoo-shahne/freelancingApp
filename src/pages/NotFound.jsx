import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  return (
    <div className="container xl:max-w-screen-xl bg-secondary-0 h-screen">
      <div className="flex justify-center pt-8">
        <div>
          <h1 className="font-bold text-primary-600 text-xl mb-8">
            صفحه‌ای که دنبالش بودید، پیدا نشد :(
          </h1>
          <button className="flex items-center" onClick={handleBack}>
            <HiArrowRight className="text-primary-600 ml-1 w-4 h-4 " />
            <span className="text-secondary-400">برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
