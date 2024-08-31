import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";
import StatisticsSections from "../../ui/StatisticsSections";
import { HiCurrencyDollar } from "react-icons/hi2";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function FreelancerStatistic({ proposals }) {
  console.log(proposals);
  const numOfProposal = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const totalPrice = acceptedProposals.reduce(
    (acc, curr) => curr.price + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3  gap-y-4 md:gap-x-8">
      <StatisticsSections
        icon={
          <HiOutlineViewGrid className="w-20 h-20 bg-primary-100 rounded-full text-primary-700 p-2" />
        }
        title="پروپوزال‌های شما"
        value={numOfProposal}
      />
      <StatisticsSections
        icon={
          <HiCurrencyDollar className="w-20 h-20 bg-primary-100 rounded-full text-green-500 p-2" />
        }
        title="کیف پول(ریال)"
        value={toPersianNumbersWithComma(totalPrice)}
      />
      <StatisticsSections
        icon={
          <HiCollection className="w-20 h-20 bg-primary-100 rounded-full text-yellow-500 p-2" />
        }
        title="پروپوزال‌های تایید شده"
        value={acceptedProposals.length}
      />
    </div>
  );
}
export default FreelancerStatistic;
