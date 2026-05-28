
import PropTypes from "prop-types";

export default function TableRow({ id, customer, car, dates, status, statusColor, amount }) {
  return (
    <tr className="text-gray-700">
      <td className="py-3">{id}</td>
      <td>{customer}</td>
      <td>{car}</td>
      <td>{dates}</td>
      <td>
        <span className={`px-3 py-1 rounded-full text-xs ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="text-right font-medium">{amount}</td>
    </tr>
  );
}

TableRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  customer: PropTypes.string.isRequired,
  car: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  statusColor: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
