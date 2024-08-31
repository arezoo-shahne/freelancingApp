import UsersTable from "../features/admin/UsersTable";

function Users() {
  return (
    <div>
      <h1 className="font-bold text-base text-secondary-600 mb-8">
        فهرست کاربران
      </h1>

      <UsersTable />
    </div>
  );
}
export default Users;
