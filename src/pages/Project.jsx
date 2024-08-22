import useProject from "../features/project/useProject";
import Loader from "../ui/Loader";
import ProjectHeader from "../features/project/ProjectHeader";
import ProposalTable from "../features/project/ProposalTable";

function Project() {
  const { isLoading, project } = useProject();

  if (isLoading) return <Loader />;
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
