import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import ChangeProosalStatus from "./ChangeProosalStatus";

function ProposalRow({ proposals, index }) {
  const { status } = proposals;
  const [open, setOpen] = useState(false);

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
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposals.user.name}</td>
      <td>{proposals.description}</td>
      <td>{proposals.duration}</td>
      <td>{proposals.price}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal open={open} onClose={() => setOpen(false)} title="تغییر وضعیت">
          <ChangeProosalStatus
            proposalId={proposals._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button className="btn btn--outline " onClick={() => setOpen(true)}>
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
