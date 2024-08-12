import Table from "../../ui/Table";
import shortenText from "../../utils/shorten text";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import toLocalDate from "../../utils/toLocalDate";
import { HiOutlineTrash, HiPencilSquare } from "react-icons/hi2";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ConfirmationDelete from "../../ui/ConfirmationDelete";

function ProjectRow({ project, index }) {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
        {project.status === "OPEN" ? (
          <span className="badge badge--success ">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
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
                disable={false}
                onConfirm={()=>{}}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setOpenEditModal(true)}>
              <HiPencilSquare className="w-5 h-5 text-primary-800" />
            </button>
            <Modal
              open={openEditModal}
              title="عنوان مدال"
              onClose={() => setOpenEditModal(false)}
            >
              this is modal
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
