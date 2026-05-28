




import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { utilisateurs } from "../../../data/data";
import { twMerge as merge } from "tailwind-merge";
import {
    User,
    Users,
    Zap,
    CheckCircle,
    XCircle,
    MoreVertical,
    Edit,
    Trash2,
    Search,
    Plus,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

function Avatar({ name }) {
    const initials = (name || "?")
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("");

    return (
        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 text-sm font-semibold">
            {initials}
        </div>
    );
}

Avatar.propTypes = {
    name: PropTypes.string,
};

function ClientBadge() {
    return (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-700 border border-slate-100">Client</span>
    );
}

export default function ManageUsers() {
    const [query, setQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 10;

    // enrich clients with bookings and lastLogin data
    const rows = useMemo(() => {
        return utilisateurs.map((u, i) => {
            const bookings = u.bookings ?? ((i * 3) % 12);
            const lastLogin = u.lastLogin ?? new Date(Date.now() - (i % 7) * 3600_000 * 6).toISOString();
            return { ...u, bookings, lastLogin };
        });
    }, []);

    const stats = useMemo(() => {
        const total = rows.length;
        const active = rows.filter((r) => r.status === "active").length;
        const banned = rows.filter((r) => r.status === "blocked").length;
        const newThisWeek = Math.min(8, Math.floor(total * 0.15));
        return { total, active, banned, newThisWeek };
    }, [rows]);

    const filtered = useMemo(() => {
        return rows.filter((r) => {
            if (statusFilter && (statusFilter === "Suspended" ? r.status === "blocked" : r.status === "active") === false) return false;
            if (!query) return true;
            const q = query.toLowerCase();
            return (r.nom && r.nom.toLowerCase().includes(q)) || (r.email && r.email.toLowerCase().includes(q));
        });
    }, [rows, query, statusFilter]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const current = filtered.slice((page - 1) * pageSize, page * pageSize);

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Top stats */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <StatCard title="Total Users" value={stats.total} icon={<Users className="text-sky-600" />} color="bg-sky-50">
                        <User className="h-5 w-5 text-sky-600" />
                    </StatCard>
                    <StatCard title="Active Now" value={stats.active} icon={<CheckCircle className="text-emerald-600" />} color="bg-emerald-50" />
                    <StatCard title="New This Week" value={stats.newThisWeek} icon={<Zap className="text-indigo-600" />} color="bg-indigo-50" />
                    <StatCard title="Banned / Inactive" value={stats.banned} icon={<XCircle className="text-red-600" />} color="bg-red-50" />
                </section>

                {/* Filters */}
                <section className="bg-white border border-slate-200 rounded-lg p-4 mb-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <div className="flex gap-3 flex-wrap items-center">
                        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-3 py-2 rounded-md border border-slate-200 bg-white text-sm text-slate-700">
                            <option value="">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Suspended">Suspended</option>
                        </select>
                        <select className="px-3 py-2 rounded-md border border-slate-200 bg-white text-sm text-slate-700">
                            <option>Join Date</option>
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                        </select>
                    </div>

                    <div className="flex gap-3 items-center w-full lg:w-auto">
                        <div className="relative flex-1 lg:flex-none">
                            <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search name or email" className="pl-10 pr-4 py-2 rounded-md border border-slate-200 bg-white text-sm w-full text-slate-700" />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Search size={16} /></div>
                        </div>
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md">
                            <Plus size={16} /> <span> Add New User</span>
                        </button>
                    </div>
                </section>

                {/* Table */}
                <section className="bg-white border border-slate-200 rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-100">
                        <thead className="bg-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm text-slate-500"><input type="checkbox" /></th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">User</th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">Total Bookings</th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">Status</th>
                                <th className="px-4 py-3 text-left text-sm text-slate-500">Last Login</th>
                                <th className="px-4 py-3 text-right text-sm text-slate-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-100">
                            {current.map((u) => (
                                <tr key={u.id} className="hover:bg-slate-50">
                                    <td className="px-4 py-3"><input type="checkbox" /></td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <Avatar name={u.nom} />
                                            <div>
                                                <div className="text-sm font-medium text-slate-900">{u.nom}</div>
                                                <div className="text-xs text-slate-500">{u.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-slate-700">{u.bookings}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <span className={merge("h-2 w-2 rounded-full", u.status === "active" ? "bg-emerald-500" : "bg-red-500")}></span>
                                            <span className="text-sm text-slate-700">{u.status === "active" ? "Active" : "Banned"}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-slate-600">{new Date(u.lastLogin).toLocaleString()}</td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="inline-flex items-center gap-2">
                                            <button className="p-2 rounded-md text-slate-500 hover:text-slate-800">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-2 rounded-md text-red-500 hover:text-red-700">
                                                <Trash2 size={16} />
                                            </button>
                                            <button className="p-2 rounded-md text-slate-500 hover:text-slate-800">
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination footer */}
                    <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
                        <div className="text-sm text-slate-600">Showing {filtered.length === 0 ? 0 : (page - 1) * pageSize + 1} to {Math.min(page * pageSize, filtered.length)} of {filtered.length} users</div>
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

function StatCard({ title, value, icon, color = "bg-sky-50" }) {
    return (
        <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-4">
            <div className={merge("p-3 rounded-lg flex items-center justify-center", color)}>{icon}</div>
            <div>
                <div className="text-xs text-slate-500">{title}</div>
                <div className="text-xl font-semibold text-slate-900">{value}</div>
            </div>
        </div>
    );
}

StatCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.node.isRequired,
    color: PropTypes.string,
};
