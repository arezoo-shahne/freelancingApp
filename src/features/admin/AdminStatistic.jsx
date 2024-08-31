import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import StatisticsSections from "../../ui/StatisticsSections";

function AdminStatistic({ proposals, projects, users }) {
  return (
    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3  gap-y-4 md:gap-x-8">
      <StatisticsSections
        icon={
          <HiOutlineViewGrid className="w-20 h-20 bg-primary-100 rounded-full text-primary-700 p-2" />
        }
        title="تعداد پروژه‌ها"
        value={projects.length}
      />
      <StatisticsSections
        icon={
          <HiCollection className="w-20 h-20 bg-primary-100 rounded-full text-green-500 p-2" />
        }
        title="تعداد پروپوزال‌ها"
        value={proposals.length}
      />
      <StatisticsSections
        icon={
          <HiUser className="w-20 h-20 bg-primary-100 rounded-full text-yellow-500 p-2" />
        }
        title="تعداد کاربران"
        value={users.length}
      />
    </div>
  );
}
export default AdminStatistic;
