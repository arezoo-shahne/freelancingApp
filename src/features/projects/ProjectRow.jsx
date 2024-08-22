import Table from "../../ui/Table";
import shortenText from "../../utils/shorten text";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import toLocalDate from "../../utils/toLocalDate";
import { HiEye, HiOutlineTrash, HiPencilSquare } from "react-icons/hi2";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ConfirmationDelete from "../../ui/ConfirmationDelete";
import useRemoveOwnerProject from "./useRemoveProject";
import CreateProject from "./CreateProject";
import Toggle from "../../ui/Toggle";
import useToggleProjectStatus from "./useToggleStatus";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";

function ProjectRow({ project, index }) {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { removeProject, isDeleting } = useRemoveOwnerProject();
  const { isToggling, toggleStatus } = useToggleProjectStatus();

  const handleToggle = () => {
    const newStatus = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{shortenText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDate(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap gap-2 justify-center max-w-[20px]">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge--secondary">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {isToggling ? (
          <Loader />
        ) : (
          <Toggle
            enabled={project.status === "OPEN" ? true : false}
            label={project.status === "OPEN" ? "باز" : "بسته"}
            onChange={handleToggle}
          />
        )}
      </td>
      <td>
        <div className="flex gap-x-3 items-center">
          <>
            <button onClick={() => setOpenDeleteModal(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={openDeleteModal}
              title={`حذف ${project.title}`}
              onClose={() => setOpenDeleteModal(false)}
              sourceName={project.title}
            >
              <ConfirmationDelete
                onClose={() => setOpenDeleteModal(false)}
                sourceName={project.title}
                disable={isDeleting}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setOpenDeleteModal(false),
                  })
                }
              />
            </Modal>
          </>
          <>
            <button onClick={() => setOpenEditModal(true)}>
              <HiPencilSquare className="w-5 h-5 text-primary-800" />
            </button>
            <Modal open={openEditModal} title={`ویرایش ${project.title}`}>
              <CreateProject
                projectToEdit={project}
                onClose={() => setOpenEditModal(false)}
              />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center items-center">
          <HiEye className="h-5 w-5 text-primary-900 flex " />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
