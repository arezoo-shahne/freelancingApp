import Table from "../../../ui/Table";
import useAllProjects from "./useAllProjects";
import Loader from "../../../ui/Loader"
import Empty from "../../../ui/Empty";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useAllProjects();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty title={"پروژه"} />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>

        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
export default ProjectsTable;
