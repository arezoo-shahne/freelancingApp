import { HiArrowRight } from "react-icons/hi";
function NotFound() {
  return (
    <div className="flex justify-center pt-8">
      <div>
        <h1 className="font-bold text-primary-600 text-xl mb-8">
          صفحه‌ای که دنبالش بودید، پیدا نشد :(
        </h1>
        <button className="flex items-center">
          <HiArrowRight className="text-primary-600 ml-1 w-4 h-4 " />
          <span>برگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
