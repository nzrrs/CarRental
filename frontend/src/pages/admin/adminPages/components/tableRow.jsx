
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