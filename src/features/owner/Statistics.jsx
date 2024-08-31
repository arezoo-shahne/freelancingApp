import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";
import StatisticsSections from "../../ui/StatisticsSections";
import { HiCurrencyDollar } from "react-icons/hi2";

function Statistics({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProject = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3  gap-y-4 md:gap-x-8">
      <StatisticsSections
        icon={
          <HiOutlineViewGrid className="w-20 h-20 bg-primary-100 rounded-full text-primary-700 p-2" />
        }
        title="پروژه‌های شما"
        value={numOfProjects}
      />
      <StatisticsSections
        icon={
          <HiCurrencyDollar className="w-20 h-20 bg-primary-100 rounded-full text-green-500 p-2" />
        }
        title="پروژه‌های واگذار شده"
        value={numOfAcceptedProject}
      />
      <StatisticsSections
        icon={
          <HiCollection className="w-20 h-20 bg-primary-100 rounded-full text-yellow-500 p-2" />
        }
        title="درخواست‌ها"
        value={numOfProposals}
      />
    </div>
  );
}
export default Statistics;
