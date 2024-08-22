import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function ProjectHeader({ project }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start items-center gap-x-4 mb-8">
      <button onClick={() => navigate(-1)}>
        <HiArrowRight className="h-5 w-5 text-secondary-500" />
      </button>
      <h1 className="font-bold textlg text-secondary-700">
        لیست درخواست های ارسال شده برای {project.title}
      </h1>
    </div>
  );
}
export default ProjectHeader;
