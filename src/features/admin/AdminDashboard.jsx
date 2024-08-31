import useAllProjects from "../freelancer/project/useAllProjects";
import useProposals from "../proposals/useProposal";
import Loader from "../../ui/Loader";
import DashboardHeader from "./DashboardHeader";
import AdminStatistic from "./AdminStatistic";
import useAllUsers from "../../hooks/useAllUsers";

function AdminDashboard() {
  const { isLoading: loadingProposals, proposals } = useProposals();
  const { isLoading: loadingProjects, projects } = useAllProjects();
  const { isLoading: loadingUsers, users } = useAllUsers();

  if (loadingProposals || loadingProjects || loadingUsers) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      <AdminStatistic proposals={proposals} projects={projects} users={users} />
    </div>
  );
}
export default AdminDashboard;
