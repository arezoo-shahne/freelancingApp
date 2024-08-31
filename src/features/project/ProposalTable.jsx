import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalTable({ proposals }) {
  if (!proposals.length) return <Empty title="درخواستی" />;
  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان تحویل(روز)</th>
          <th>مبلغ پیشنهادی(ریال)</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposals, index) => (
            <ProposalRow
              key={proposals._id}
              proposals={proposals}
              index={index}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
export default ProposalTable;
