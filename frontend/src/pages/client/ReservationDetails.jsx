import { Link, useParams } from "react-router-dom";
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

const statusLabels = {
  Active: "Active",
  Pending: "Pending",
  Completed: "Completed",
  Canceled: "Canceled",
  Rejected: "Rejected",
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
      const brandModel = [vehicle?.specs?.brand, vehicle?.specs?.model]
        .filter(Boolean)
        .join(" ");

      return {
        id: reservation.id,
        carNumber: vehicle?.specs?.plateNumber ?? "N/A",
        carName: vehicle?.title ?? "Vehicle unavailable",
        carModel: brandModel || vehicle?.type || "Vehicle unavailable",
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
    tag: "M20.5 13.5 13.5 20.5 3.5 10.5V3.5h7l10 10ZM7.5 7.5h.01",
    receipt: "M6.5 3.5h11v17l-2-1.25-2 1.25-2-1.25-2 1.25-3-1.8v-15Z",
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

function SectionCard({ title, children }) {
  return (
    <section className="rounded-xl border border-[#e1e5ec] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
      <h2 className="mb-5 text-[18px] font-semibold text-[#111827]">
        {title}
      </h2>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}

function ReservationDetail({ icon, label, children, strong = false }) {
  return (
    <div className="flex items-start gap-3 text-[15px] text-[#667085]">
      {icon === "car" ? (
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f2f5f9]">
          <img className="h-5 w-5 opacity-55" src={CarIcon} alt="" />
        </span>
      ) : (
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f2f5f9]">
          <InfoIcon type={icon} />
        </span>
      )}
      <span className="min-w-0">
        {label && <span className="block text-[14px] text-[#667085]">{label}</span>}
        <span
          className={`mt-1 block text-[16px] ${
            strong ? "font-semibold text-[#111827]" : "text-[#111827]"
          }`}
        >
          {children}
        </span>
      </span>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="border-b border-[#edf0f5] pb-4 last:border-b-0 last:pb-0">
      <p className="text-[13px] font-semibold uppercase text-[#98a2b3]">
        {label}
      </p>
      <p className="mt-1 text-[16px] font-semibold text-[#111827]">{value}</p>
    </div>
  );
}

function ReservationDetails() {
  const { id } = useParams();
  const reservations = getClientReservations();
  const reservation = reservations.find((item) => item.id === id);

  if (!reservation) {
    return (
      <div className="min-h-full bg-[#f5f6f8]">
        <section className="px-10 py-10">
          <div className="rounded-2xl border border-[#dcdfe5] bg-white p-8">
            <h1 className="text-[30px] font-semibold text-[#111827]">
              Reservation not found
            </h1>
            <Link
              to="/client/reservations"
              className="mt-6 inline-flex rounded-lg border border-[#d9dde5] bg-white px-5 py-3 text-[16px] font-semibold text-[#111827]"
            >
              Back to Reservations
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const displayStatus = statusLabels[reservation.status] || "Pending";

  return (
    <div className="min-h-full bg-[#f5f6f8]">
      <section className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-[30px] font-semibold text-[#111827]">
              Reservation #{reservation.id}
            </h1>
            <p className="mt-2 text-[16px] text-[#667085]">
              Review the selected reservation details.
            </p>
          </div>
          <Link
            to="/client/reservations"
            className="inline-flex items-center justify-center rounded-lg border border-[#d9dde5] bg-white px-5 py-3 text-[16px] font-semibold text-[#111827] transition hover:border-[#b8c1d1] hover:bg-[#f8fafc] sm:self-start"
          >
            Back to Reservations
          </Link>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
          <div className="grid gap-6">
            <article className="flex items-center gap-5 rounded-xl border border-[#dcdfe5] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
              <div
                className="shrink-0 overflow-hidden rounded-xl bg-[#eef2f6]"
                style={{
                  width: "360px",
                  height: "240px",
                  maxWidth: "360px",
                  maxHeight: "240px",
                }}
              >
                <img
                  src={reservation.carImage || VehicleFallback}
                  alt={reservation.carName}
                  className="h-full w-full object-cover object-center"
                  onError={(event) => {
                    event.currentTarget.src = VehicleFallback;
                  }}
                  style={{
                    width: "360px",
                    height: "240px",
                    maxWidth: "360px",
                    maxHeight: "240px",
                    display: "block",
                  }}
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[13px] font-semibold uppercase text-[#98a2b3]">
                    Selected car
                  </p>
                  <h2 className="mt-1 text-[22px] font-semibold leading-tight text-[#111827]">
                    {reservation.carName}
                  </h2>
                  <p className="mt-2 text-[15px] text-[#667085]">
                    Reservation #{reservation.id}
                  </p>
                </div>
                <span
                  className={`inline-flex w-fit rounded-lg px-3 py-1.5 text-sm font-semibold ${
                    statusStyles[reservation.status]
                  }`}
                >
                  {displayStatus}
                </span>
              </div>
            </article>

            <div className="grid gap-6 lg:grid-cols-2">
              <SectionCard title="Car info">
                <ReservationDetail icon="car" label="Model">
                  {reservation.carModel}
                </ReservationDetail>
                <ReservationDetail icon="tag" label="Car number">
                  {reservation.carNumber}
                </ReservationDetail>
              </SectionCard>

              <SectionCard title="Reservation dates">
                <ReservationDetail icon="calendar" label="Pickup date">
                  {reservation.pickupDate}
                </ReservationDetail>
                <ReservationDetail icon="calendar" label="Return date">
                  {reservation.returnDate}
                </ReservationDetail>
              </SectionCard>

              <SectionCard title="Pickup location">
                <ReservationDetail icon="location" label="Location">
                  {reservation.pickupLocation}
                </ReservationDetail>
              </SectionCard>

              <SectionCard title="Payment details">
                <ReservationDetail icon="payment" label="Payment status" strong>
                  {reservation.paid ? "Paid" : "Unpaid"}
                </ReservationDetail>
                <ReservationDetail icon="receipt" label="Total price" strong>
                  {reservation.totalPrice} MAD
                </ReservationDetail>
              </SectionCard>
            </div>
          </div>

          <aside className="h-fit rounded-xl border border-[#dcdfe5] bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.03)] xl:sticky xl:top-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-[18px] font-semibold text-[#111827]">
                Summary
              </h2>
              <span
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
                  statusStyles[reservation.status]
                }`}
              >
                {displayStatus}
              </span>
            </div>
            <div className="grid gap-4">
              <SummaryItem label="Reservation ID" value={reservation.id} />
              <SummaryItem label="Car" value={reservation.carName} />
              <SummaryItem
                label="Dates"
                value={`${reservation.pickupDate} - ${reservation.returnDate}`}
              />
              <SummaryItem
                label="Payment"
                value={`${reservation.paid ? "Paid" : "Unpaid"} - ${
                  reservation.totalPrice
                } MAD`}
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ReservationDetails;
