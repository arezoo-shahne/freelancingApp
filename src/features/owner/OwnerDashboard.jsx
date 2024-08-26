import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from "./DashboardHeader";
import Statistics from "./Statistics";
import Loader from "../../ui/Loader";

function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loader />;
  return (
    <div>
      <DashboardHeader />
      <Statistics projects={projects} />
    </div>
  );
}
export default OwnerDashboard;
