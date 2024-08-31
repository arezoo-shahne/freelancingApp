import useCategories from "../../../hooks/useCategory";
import DropDownFilter from "../../../ui/DropDownFilter";
import Filter from "../../../ui/Filter";

function ProjectsHeader() {
  const { transformedCategory } = useCategories();

  const sortValues = [
    {
      value: "latest",
      label: "مرتب‌سازی (جدیدترین)",
    },
    {
      value: "earliest",
      label: "مرتب‌سازی (قدیمی‌ترین)",
    },
  ];
  const statusValue = [
    {
      value: "ALL",
      label: "همه",
    },
    {
      value: "OPEN",
      label: "باز",
    },
    {
      value: "CLOSED",
      label: "بسته",
    },
  ];
  return (
    <div className="flex justify-between items-center text-secondary-600 mb-8">
      <h1 className="font-bold text-base ">فهرست پروژه‌ها</h1>
      <div className="flex items-center justify-between gap-x-4">
        <Filter options={statusValue} filterValue="status" />
        <DropDownFilter options={sortValues} filterValue="sort" />
        <DropDownFilter
          options={[
            {
              value: "ALL",
              label: "دسته‌بندی(همه) ",
            },
            ...transformedCategory,
          ]}
          filterValue="category"
        />
      </div>
    </div>
  );
}
export default ProjectsHeader;
