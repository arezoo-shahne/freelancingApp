import { useForm } from "react-hook-form";
import InputForm from "../../ui/InputForm";
import Selection from "../../ui/Selection";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategory";
import useCreateOwnerProject from "./useCreateProject";
import Loader from "../../ui/Loader";
import useEditOwnerProject from "./useEditProject";

function CreateProject({ onClose, projectToEdit = {} }) {
  const { _id: ediId } = projectToEdit;
  const isEditMode = Boolean(ediId);
  const {
    title,
    description,
    category,
    budget,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};
  if (isEditMode) {
    editValues = {
      title,
      description,
      category: category._id,
      budget,
    };
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline));

  const { newCategory } = useCategories();
  const { createProject, isPending } = useCreateOwnerProject();
  const { editProject, isEditing } = useEditOwnerProject();

  function createProjectHandler(data) {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditMode) {
      editProject(
        { id:ediId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit(createProjectHandler)}>
      <InputForm
        register={register}
        name="title"
        label="عنوان پروژه:"
        required
        validationSchema={{
          maxLength: {
            value: 20,
            message: "طول عنوان باید حداکثر 10 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <InputForm
        label="توضیحات پروژه:"
        name="description"
        register={register}
        required
        type="text"
        validationSchema={{
          required: "توضیحات ضرورری است",
          minLength: {
            value: 15,
            message: "طول توضیحات باید حداقل 15 کاراکتر باشد",
          },
        }}
        errors={errors}
      />
      <InputForm
        register={register}
        name="budget"
        label="بودجه پروژه(مبلغ را به ریال وارد کنید):"
        type="number"
        required
        errors={errors}
      />
      <Selection
        label="دسته بندی"
        name="category"
        require
        register={register}
        option={newCategory}
      />
      <label className="mb-1">تگ ها</label>
      <TagsInput
        value={tags}
        onChange={setTags}
        name="tags"
        placeHolder="Enter Tags"
      />
      <DatePickerField label="ددلاین پروژه" date={date} setDate={setDate} />
      <div className="flex justify-between items-center gap-x-6">
        {isPending ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary flex-1">
            تایید
          </button>
        )}
        <button onClick={onClose} className="btn btn--danger flex-1">
          لغو
        </button>
      </div>
    </form>
  );
}

export default CreateProject;
