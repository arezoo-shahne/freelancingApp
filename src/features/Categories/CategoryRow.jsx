
import Table from "../../ui/Table";

function CategoryRow({ category, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{category.title}</td>
      <td>{category.description}</td>
    </Table.Row>
  );
}
export default CategoryRow;
