import useCategories from "../../hooks/useCategory";
import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import CategoryHeader from "./CategoryHeader";
import CategoryRow from "./CategoryRow";

function CategoryTable() {
  const { categories, isLoading } = useCategories();
  console.log(categories);
  if (isLoading) return <Loader />;
  if (!categories.length) return <Empty title="پروپوزال" />;

  return (
    <div>
      <CategoryHeader />
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان</th>
          <th>توضیحات</th>
        </Table.Header>
        <Table.Body>
          {categories.map((category, index) => (
            <CategoryRow key={category._id} category={category} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
export default CategoryTable;
