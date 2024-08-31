import { useState } from "react";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";
const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "تعیین وضعیت نشده",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UsersRow({ users, index }) {
  const [open, setOpen] = useState(false);
  console.log(users._id);

  return (
    <Table.Row key={users._id}>
      <td>{index + 1}</td>
      <td>{users.name}</td>
      <td>{users.email}</td>
      <td>{users.phoneNumber}</td>
      <td>{users.role}</td>
      <td>
        <span className={`badge ${statusStyle[users.status].className}`}>
          {statusStyle[users.status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`تغییر وضعیت ${users.name}`}
        >
          <ChangeUserStatus userId={users._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}
export default UsersRow;
