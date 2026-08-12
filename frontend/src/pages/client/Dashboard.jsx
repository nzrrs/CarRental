import { useState } from "react";
import { Link } from "react-router-dom";
import CarIcon from "../../assets/icons/client/bx_car.svg";
import EmptyState from "../../components/client/EmptyState";
import StatCard from "../../components/client/StatCard";
import StatusBadge from "../../components/client/StatusBadge";
import {
  administrateurs,
  agences,
  reservations as reservationsData,
  utilisateurs,
  vehicles,
} from "../../data/data";

const statIcons = {
  Reserved:
    "M5 17h14M7 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM21 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5 17l1.3-5.2A3 3 0 0 1 9.2 9.5h5.6a3 3 0 0 1 2.9 2.3L19 17M8 9.5 10 6h4l2 3.5",
  "Total Spent":
    "M12 3v18M17 7.5C16.1 6.6 14.6 6 12.8 6H11a3 3 0 0 0 0 6h2a3 3 0 0 1 0 6h-1.8c-1.8 0-3.3-.6-4.2-1.5",
  "Canceled reservations":
    "M15 9 9 15M9 9l6 6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  "Missing itineraries":
    "M7 3v3M17 3v3M4 8h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM9 13h.01M12 13h.01M15 13h.01M9 16h.01M12 16h.01",
  "Unread messages":
    "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z",
};

function Icon({ path }) {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d={path} />
    </svg>
  );
}

const statusMap = {
  CONFIRMEE: "Active",
  EN_COURS: "Active",
  EN_ATTENTE: "Pending",
  TERMINEE: "Completed",
  ANNULEE: "Canceled",
  REFUSEE: "Rejected",
};

function getCurrentClient() {
  const adminUserIds = new Set(
    administrateurs.map((admin) => admin.utilisateurId)
  );

  // TODO: Replace this fallback with the authenticated client once auth exists.
  return utilisateurs.find((user) => !adminUserIds.has(user.id)) ?? utilisateurs[0];
}

function getClientReservations() {
  const currentClient = getCurrentClient();

  if (!currentClient) return [];

  return reservationsData
    .filter((reservation) => reservation.clientId === currentClient.id)
    .map((reservation) => {
      const vehicle = vehicles.find((item) => item.id === reservation.voitureId);
      const agency = agences.find((item) => item.id === vehicle?.agency?.id);

      return {
        id: reservation.id,
        carNumber: vehicle?.specs?.plateNumber ?? "N/A",
        carName: vehicle?.title ?? "Vehicle unavailable",
        status: statusMap[reservation.statut] ?? reservation.statut,
        totalPrice: reservation.prixTotal,
        paid: reservation.estPayee,
        pickupDate: reservation.dateDebut,
        returnDate: reservation.dateFin,
        pickupLocation:
          agency?.nom && agency?.adresse
            ? `${agency.nom}, ${agency.adresse}`
            : agency?.nom ?? vehicle?.agency?.name ?? "Location unavailable",
      };
    });
}

function Dashboard() {
  const reservations = getClientReservations();
  // TODO: Wire this to project notification data/API when that model exists.
  const notifications = [];
  const [reservationQuery, setReservationQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const stats = [
    { id: 1, number: reservations.length, label: "Reserved" },
    {
      id: 2,
      number: `${reservations
        .filter((reservation) => reservation.paid)
        .reduce((total, reservation) => total + reservation.totalPrice, 0)} MAD`,
      label: "Total Spent",
    },
    {
      id: 3,
      number: reservations.filter(
        (reservation) => reservation.status === "Canceled"
      ).length,
      label: "Canceled reservations",
    },
    {
      id: 4,
      number: reservations.filter(
        (reservation) => !reservation.pickupDate || !reservation.returnDate
      ).length,
      label: "Missing itineraries",
    },
    {
      id: 5,
      number: notifications.filter((notification) => !notification.isRead).length,
      label: "Unread messages",
    },
  ];

  const dashboardReservations = reservations.map((reservation, index) => ({
    id: reservation.id,
    no: String(index + 1).padStart(2, "0"),
    car: reservation.carNumber,
    model: reservation.carName,
    status: reservation.status,
    paid: reservation.paid ? `${reservation.totalPrice} MAD` : "0 MAD",
  }));

  const handleCheckReservation = () => {
    const query = reservationQuery.trim().toLowerCase();
    const match = reservations.find(
      (reservation) =>
        reservation.id.toLowerCase() === query ||
        reservation.carNumber.toLowerCase() === query
    );

    setSearchResult(match || null);
    setHasSearched(true);
  };

  return (
    <div className="min-h-full bg-[#f5f7fa]">
      <div className="space-y-8 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <section className="rounded-xl border border-[#e6e9ef] bg-white p-6 shadow-[0_12px_30px_rgba(16,24,40,0.04)] sm:p-8">
          <div className="mb-5">
            <h3 className="text-[20px] font-semibold text-[#111827]">
              Check Reservations
            </h3>
            <p className="mt-1 text-[14px] text-[#667085]">
              Quickly check the status of your reservation.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex min-h-[48px] flex-1 items-center gap-3 rounded-lg border border-[#d9dde5] bg-[#fbfcfd] px-4 transition focus-within:border-[#0d6efd] focus-within:ring-4 focus-within:ring-[#0d6efd]/10">
              <img className="h-5 w-5 opacity-70" src={CarIcon} alt="car" />
              <input
                value={reservationQuery}
                onChange={(event) => {
                  setReservationQuery(event.target.value);
                  setHasSearched(false);
                }}
                className="w-full border-0 bg-transparent text-sm outline-0 placeholder:text-[#7c8594]"
                placeholder="Reservation ID or Car number"
              />
            </div>

            <button
              type="button"
              onClick={handleCheckReservation}
              className="min-h-[48px] cursor-pointer rounded-lg border-0 bg-[#0d6efd] px-8 text-[15px] font-semibold text-white transition hover:bg-[#0b5ed7] sm:w-auto"
            >
              Check
            </button>
          </div>

          {hasSearched && (
            <div
              className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
                searchResult
                  ? "border-[#abefc6] bg-[#ecfdf3] text-[#027a48]"
                  : "border-[#fedf89] bg-[#fffaeb] text-[#b54708]"
              }`}
            >
              {searchResult
                ? `${searchResult.id} is ${searchResult.status} for ${searchResult.carName}.`
                : "No reservation found for that ID or car number."}
            </div>
          )}
        </section>

        <section>
          <h3 className="mb-4 text-[20px] font-semibold text-[#111827]">
            Dashboard Overview
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {stats.map((item) => (
              <StatCard
                key={item.id}
                icon={<Icon path={statIcons[item.label] || statIcons.Reserved} />}
                label={item.label}
                value={item.number}
              />
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[#e6e9ef] bg-white p-5 shadow-[0_12px_30px_rgba(16,24,40,0.04)] sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="text-[20px] font-semibold text-[#111827]">
              Reservations Status
            </h3>
          </div>

          {dashboardReservations.length === 0 ? (
            <EmptyState title="No reservations found." actionLabel="Book a car" />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse">
                <thead>
                  <tr className="border-b border-[#e6e9ef]">
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#667085]">
                      No.
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#667085]">
                      Car no.
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#667085]">
                      Car model
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#667085]">
                      Status
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#667085]">
                      Paid
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#667085]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {dashboardReservations.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-[#f0f2f5] transition last:border-0 hover:bg-[#f8fbff]"
                    >
                      <td className="px-3 py-4 text-sm font-medium text-[#344054]">
                        {row.no}
                      </td>
                      <td className="px-3 py-4 text-sm text-[#344054]">
                        <span className="rounded-md bg-[#f2f4f7] px-3 py-1.5 font-medium text-[#344054]">
                          {row.car}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-sm font-medium text-[#111827]">
                        {row.model}
                      </td>
                      <td className="px-3 py-4">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="px-3 py-4 text-sm font-semibold text-[#344054]">
                        {row.paid}
                      </td>
                      <td className="px-3 py-4">
                        <Link
                          to={`/client/reservations/${row.id}`}
                          className="inline-flex rounded-lg border-0 bg-[#0d6efd] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0b5ed7]"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  )
};

export default Dashboard;
