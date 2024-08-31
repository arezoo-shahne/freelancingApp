import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import toLocalDate from "../../../utils/toLocalDate";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const [openModal, setOpenModal] = useState(false);
  const { status } = project;
  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{project.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDate(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title={`درخواست انجام پروژه ${project.title}`}
        >
          <CreateProposal
            onClose={() => setOpenModal(false)}
            projectId={project._id}
          />
        </Modal>
        <button onClick={() => setOpenModal(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-600" />
        </button>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
