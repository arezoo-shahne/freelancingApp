import useProposals from "./useProposal";
import Loader from "../../ui/Loader"
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loader />;
  if (!proposals.length) return <Empty title="پروپوزال" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل(روز)</th>
          <th>هزینه(ریال)</th>
          <th>وضعیت</th>

        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
export default ProposalTable;
