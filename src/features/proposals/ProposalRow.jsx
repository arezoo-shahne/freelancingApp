import Table from "../../ui/Table";
import shortenText from "../../utils/shorten text";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";

function ProposalRow({ proposal, index }) {
  const { price, status, description, duration } = proposal;
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
      <td>{shortenText(description, 60)}</td>
      <td>{toPersianNumbers(duration)}</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
