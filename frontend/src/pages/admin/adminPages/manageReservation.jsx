




import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { utilisateurs, vehicles, agences, reservations as reservationsData } from "../../../data/data";
import { twMerge as merge } from "tailwind-merge";
import { Eye, Edit, Search, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const statusMapFRtoEN = {
    CONFIRMEE: "Confirmed",
    EN_ATTENTE: "Pending",
    ANNULEE: "Canceled",
    TERMINEE: "Completed",
    EN_COURS: "In Progress",
    REFUSEE: "Rejected",
};

function StatusBadge({ status }) {
    const map = {
        Confirmed: "bg-emerald-50 text-emerald-700 border border-emerald-100",
        Pending: "bg-amber-50 text-amber-700 border border-amber-100",
        Canceled: "bg-red-50 text-red-700 border border-red-100",
        Completed: "bg-sky-50 text-sky-700 border border-sky-100",
        "In Progress": "bg-indigo-50 text-indigo-700 border border-indigo-100",
        Rejected: "bg-rose-50 text-rose-700 border border-rose-100",
    };
    return <span className={merge("px-2 py-1 rounded-full text-xs font-medium", map[status] || map.Pending)}>{status}</span>;
}

StatusBadge.propTypes = {
    status: PropTypes.string.isRequired,
};

function PaymentPill({ paid }) {
    return (
        <div className={merge("inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium", paid ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700")}>
            <span className={paid ? "h-2 w-2 rounded-full bg-emerald-500" : "h-2 w-2 rounded-full bg-red-500"}></span>
            {paid ? "Paid" : "Unpaid"}
        </div>
    );
}

PaymentPill.propTypes = {
    paid: PropTypes.bool.isRequired,
};

function VehicleCell({ car }) {
    return (
        <div className="text-sm text-slate-700">
            <div className="font-medium">{car?.specs?.brand} {car?.specs?.model}</div>
            <div className="text-xs text-slate-500">Plate: {car?.specs?.plateNumber || "N/A"}</div>
        </div>
    );
}

VehicleCell.propTypes = {
    car: PropTypes.shape({
        specs: PropTypes.shape({
            brand: PropTypes.string,
            model: PropTypes.string,
            plateNumber: PropTypes.string,
        }),
    }),
};

export default function ManageReservations() {
    const [agencyFilter, setAgencyFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 8;

    const reservations = useMemo(() => {
        return reservationsData.map((r) => {
            const client = utilisateurs.find((u) => u.id === r.clientId);
            const vehicle = vehicles.find((v) => v.id === r.voitureId);
            const agency = agences.find((a) => a.id === vehicle?.agency?.id);
            return {
                id: r.id,
                client,
                phone: client?.telephone || "",
                car: vehicle,
                agency,
                start: r.dateDebut,
                end: r.dateFin,
                days: r.nombreJours,
                total: r.prixTotal,
                status: statusMapFRtoEN[r.statut] || r.statut,
                paid: r.estPayee,
            };
        });
    }, []);

    const filtered = useMemo(() => {
        return reservations.filter((r) => {
            if (agencyFilter && r.agency?.nom !== agencyFilter) return false;
            if (statusFilter && r.status !== statusFilter) return false;
            if (!query) return true;
            const q = query.toLowerCase();
            return r.id.toLowerCase().includes(q) || (r.client?.nom || "").toLowerCase().includes(q);
        });
    }, [reservations, agencyFilter, statusFilter, query]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <div className="max-w-6xl mx-auto">

                <section className="bg-white border border-slate-200 rounded-lg p-4 mb-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <div className="flex gap-3 flex-wrap items-center">
                        <select value={agencyFilter} onChange={(e) => { setAgencyFilter(e.target.value); setPage(1); }} className="px-3 py-2 rounded-md border border-slate-200 bg-white text-sm text-slate-700">
                            <option value="">All Agencies</option>
                            {agences.map((a) => (<option key={a.id} value={a.nom}>{a.nom}</option>))}
                        </select>
                        <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="px-3 py-2 rounded-md border border-slate-200 bg-white text-sm text-slate-700">
                            <option value="">All Status</option>
                            <option>Confirmed</option>
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                            <option>Canceled</option>
                            <option>Rejected</option>
                        </select>
                        <div className="flex items-center gap-2 text-sm text-slate-500"><Calendar size={16} /> <span>Filter by Date</span></div>
                    </div>

                    <div className="flex gap-3 items-center w-full lg:w-auto">
                        <div className="relative flex-1 lg:flex-none">
                            <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search Booking ID or Client Name" className="pl-10 pr-4 py-2 rounded-md border border-slate-200 bg-white text-sm w-full text-slate-700" />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Search size={16} /></div>
                        </div>
                    </div>
                </section>

                <section className="bg-white border border-slate-200 rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-100">
                        <thead className="bg-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">ID</th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">Client</th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">Vehicle</th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">Rental Period</th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">Total Price</th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">Status</th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">Payment</th>
                                <th className="px-4 py-3 text-right text-sm text-slate-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-100">
                            {pageRows.map((r) => (
                                <tr key={r.id} className="hover:bg-slate-50">
                                    <td className="px-4 py-3 text-sm font-medium text-slate-800">{r.id}</td>
                                    <td className="px-4 py-3">
                                        <div className="text-sm text-slate-700">
                                            <div className="font-medium">{r.client?.nom || "Unknown"}</div>
                                            <div className="text-xs text-slate-500">{r.phone}</div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3"><VehicleCell car={r.car} /></td>
                                    <td className="px-4 py-3">
                                        <div className="text-sm text-slate-700">
                                            <div className="font-medium">{new Date(r.start).toLocaleDateString()} → {new Date(r.end).toLocaleDateString()}</div>
                                            <div className="text-xs text-slate-500">{r.days} {r.days === 1 ? 'Day' : 'Days'}</div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-slate-800 font-medium">{r.total} MAD</td>
                                    <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
                                    <td className="px-4 py-3"><PaymentPill paid={r.paid} /></td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="inline-flex items-center gap-2">
                                            <button title="Quick view" className="p-2 rounded-md text-slate-500 hover:text-slate-800"><Eye size={16} /></button>
                                            <button title="Edit" className="p-2 rounded-md text-slate-500 hover:text-slate-800"><Edit size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
                        <div className="text-sm text-slate-600">Showing {filtered.length === 0 ? 0 : (page - 1) * pageSize + 1} to {Math.min(page * pageSize, filtered.length)} of {filtered.length} reservations</div>
                        <div className="inline-flex items-center gap-2">
                            <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="p-2 rounded-md border border-slate-200 text-slate-600"><ChevronLeft size={16} /></button>
                            <div className="inline-flex items-center gap-1">
                                {Array.from({ length: totalPages }).map((_, i) => {
                                    const idx = i + 1;
                                    return (
                                        <button key={idx} onClick={() => setPage(idx)} className={merge(
                                            "px-3 py-1 rounded-md text-sm",
                                            page === idx ? "bg-sky-600 text-white" : "bg-white text-slate-700 border border-slate-100"
                                        )}>
                                            {idx}
                                        </button>
                                    );
                                })}
                            </div>
                            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="p-2 rounded-md border border-slate-200 text-slate-600"><ChevronRight size={16} /></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
