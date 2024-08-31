import useAllUsers from "../../hooks/useAllUsers";
import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import UsersRow from "./UsersRow";



function UsersTable() {
  const { isLoading, users } = useAllUsers();

  if (isLoading) return <Loader />;
  if (!users.length) return <Empty title={"پروژه"} />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام</th>
          <th>ایمیل</th>
          <th>شماره موبایل</th>
          <th>نقش</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {users.map((users, index) => (
            <UsersRow key={users._id} users={users} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
export default UsersTable;
