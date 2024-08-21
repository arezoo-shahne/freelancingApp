import { useState } from "react";
import Modal from "../../ui/Modal";
import { HiPlus } from "react-icons/hi";
import CreateProject from "./CreateProject";

function ProjectHeader() {
  const [openCreateProjectModal, setOpenCreateProjectModal] = useState(false);
  return (
    <div className="flex justify-between items-center mb-8 ">
      <h1 className="font-bold text-base text-secondary-600">
        لیست پروژه‌های شما
      </h1>
      <div>
        <button onClick={()=>setOpenCreateProjectModal(true)} className="btn btn--primary flex-1 flex items-center justify-center text-sm">
          <HiPlus/>
          ایجاد پروژه جدید
        </button>
        <Modal
          open={openCreateProjectModal}
          title={"ایجاد پروژه جدید"}
          onClose={() => setOpenCreateProjectModal(false)}
        >
          <CreateProject
                onClose={() => setOpenCreateProjectModal(false)}
              />
        </Modal>
      </div>
    </div>
  );
}

export default ProjectHeader;
