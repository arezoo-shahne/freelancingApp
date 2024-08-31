import useProposals from "../proposals/useProposal";
import DashboardHeader from "./DashboardHeader";
import FreelancerStatistic from "./FreelancerStatistic";
import Loader from "../../ui/Loader";

function FreelancerDashboard() {
  const { isLoading, proposals } = useProposals();
  console.log(proposals);
  if (isLoading) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      <FreelancerStatistic proposals={proposals} />
    </div>
  );
}
export default FreelancerDashboard;
