import { useState } from "react";
import { Link } from "react-router-dom";
import CarIcon from "../../assets/icons/client/bx_car.svg";
import VehicleFallback from "../../assets/images/vehicle_transparent.png";
import {
  administrateurs,
  agences,
  reservations as reservationsData,
  utilisateurs,
  vehicles,
} from "../../data/data";

const statusStyles = {
  Active: "bg-[#dceaff] text-[#0d6efd]",
  Pending: "bg-[#fff4d6] text-[#b54708]",
  Completed: "bg-[#d9f8e4] text-[#088b35]",
  Canceled: "bg-[#ffe0e3] text-[#f00014]",
  Rejected: "bg-[#ffe0e3] text-[#b42318]",
};

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
        carImage: vehicle?.img,
        pickupDate: reservation.dateDebut,
        returnDate: reservation.dateFin,
        pickupLocation:
          agency?.nom && agency?.adresse
            ? `${agency.nom}, ${agency.adresse}`
            : agency?.nom ?? vehicle?.agency?.name ?? "Location unavailable",
        totalPrice: reservation.prixTotal,
        paid: reservation.estPayee,
        status: statusMap[reservation.statut] ?? reservation.statut,
      };
    });
}

function InfoIcon({ type }) {
  const paths = {
    calendar:
      "M7 2v3M17 2v3M3.5 9.09h17M6.5 4.5h11a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3Z",
    location:
      "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    payment: "M3.5 7.5h17v10h-17v-10ZM3.5 10.5h17",
  };

  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#9aa4b2]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d={paths[type]} />
    </svg>
  );
}

function ReservationDetail({ icon, children, strong = false }) {
  return (
    <div className="flex items-center gap-3 text-[15px] text-[#667085]">
      {icon === "car" ? (
        <img className="h-5 w-5 opacity-55" src={CarIcon} alt="" />
      ) : (
        <InfoIcon type={icon} />
      )}
      <span className={strong ? "font-semibold text-[#111827]" : ""}>
        {children}
      </span>
    </div>
  );
}

function Reservations() {
  const reservations = getClientReservations();
  const filters = [
    "All",
    ...Array.from(new Set(reservations.map((reservation) => reservation.status))),
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleReservations =
    activeFilter === "All"
      ? reservations
      : reservations.filter((reservation) => reservation.status === activeFilter);

  return (
    <div className="min-h-full bg-[#f5f6f8]">
      <section className="px-10 py-10">
        <div className="mb-7 flex items-center justify-between gap-6">
          <h1 className="text-[30px] font-semibold text-[#111827]">
            My Reservations
          </h1>
          <button className="rounded-lg border-0 bg-[#0d6efd] px-6 py-3 text-[16px] font-semibold text-white">
            New Reservation
          </button>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg border px-5 py-3 text-[16px] ${
                filter === activeFilter
                  ? "border-[#0d6efd] bg-[#0d6efd] text-white"
                  : "border-[#d9dde5] bg-white text-[#111827]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
          {visibleReservations.map((reservation) => (
            <article
              key={reservation.id}
              className="grid overflow-hidden rounded-2xl border border-[#dcdfe5] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.03)] sm:grid-cols-[240px_1fr]"
            >
              <img
                className="h-full min-h-[240px] w-full object-cover"
                src={reservation.carImage || VehicleFallback}
                alt={reservation.carName}
                onError={(event) => {
                  event.currentTarget.src = VehicleFallback;
                }}
              />

              <div className="flex min-w-0 flex-col p-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-[24px] font-semibold text-[#111827]">
                      {reservation.carName}
                    </h2>
                    <p className="mt-2 text-[15px] text-[#667085]">
                      Reservation #{reservation.id}
                    </p>
                  </div>
                  <span
                    className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
                      statusStyles[reservation.status]
                    }`}
                  >
                    {reservation.status}
                  </span>
                </div>

                <div className="mb-7 grid gap-4">
                  <ReservationDetail icon="car">
                    Car Number: {reservation.carNumber}
                  </ReservationDetail>
                  <ReservationDetail icon="calendar">
                    {reservation.pickupDate} - {reservation.returnDate}
                  </ReservationDetail>
                  <ReservationDetail icon="location">
                    {reservation.pickupLocation}
                  </ReservationDetail>
                  <ReservationDetail icon="payment" strong>
                    {reservation.paid ? "Paid" : "Unpaid"} -{" "}
                    {reservation.totalPrice} MAD
                  </ReservationDetail>
                </div>

                <div className="mt-auto flex gap-3">
                  <Link
                    to={`/client/reservations/${reservation.id}`}
                    className="flex h-10 flex-1 items-center justify-center rounded-lg border border-[#d9dde5] bg-white text-[16px] font-semibold text-[#111827]"
                  >
                    View Reservation
                  </Link>
                  {reservation.status === "Active" && (
                    <button className="h-10 rounded-lg border border-[#d9dde5] bg-white px-5 text-[15px] font-semibold text-[#f00014]">
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reservations;
