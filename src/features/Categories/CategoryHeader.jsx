import { useState } from "react";
import Modal from "../../ui/Modal";
import { HiPlus } from "react-icons/hi";
import CreateCategory from "./CreateCategory";

function CategoryHeader() {
  const [openCreateCategoryModal, setOpenCreateCategoryModal] = useState(false);
  return (
    <div className="flex justify-between items-center mb-8 ">
      <h1 className="font-bold text-base text-secondary-600">
        لیست دسته‌بندی‌ها
      </h1>
      <div>
        <button
          onClick={() => setOpenCreateCategoryModal(true)}
          className="btn btn--primary flex-1 flex items-center justify-center text-sm"
        >
          <HiPlus />
          ایجاد دسته‌بندی جدید
        </button>
        <Modal
          open={openCreateCategoryModal}
          title={"ایجاد دسته‌بندی جدید"}
          onClose={() => setOpenCreateCategoryModal(false)}
        >
          <CreateCategory onClose={() => setOpenCreateCategoryModal(false)} />
        </Modal>
      </div>
    </div>
  );
}

export default CategoryHeader;
