
import { useMemo, useState } from "react";
import { agences as agenciesData, villes } from "../../../data/data";

function StatusBadge({ status }) {
    if (status === "pending") {
        return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FFFBEB] text-[#B45309] border border-[#FEEBC8]">
                Pending
            </span>
        );
    }

    if (status === "active") {
        return (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#ECFDF5] text-[#065F46] border border-[#D1FAE5]">
                Active
            </span>
        );
    }

    return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
            Disabled
        </span>
    );
}

export default function ManageAgencies() {
    const [query, setQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [page, setPage] = useState(1);
    const pageSize = 5;

    const agencies = useMemo(() => {
        return agenciesData.map((a) => ({
            ...a,
            statusLabel: a.statut ? "active" : "disabled",
            cityName: villes.find((v) => v.id === a.villeId)?.nom || a.adresse,
        }));
    }, []);

    const filtered = agencies.filter((a) => {
        const matchesQuery =
            a.nom.toLowerCase().includes(query.toLowerCase()) ||
            a.email.toLowerCase().includes(query.toLowerCase()) ||
            a.adresse.toLowerCase().includes(query.toLowerCase());

        const matchesStatus =
            statusFilter === "all" ? true : a.statusLabel === statusFilter;

        return matchesQuery && matchesStatus;
    });

    const total = filtered.length;
    const pages = Math.max(1, Math.ceil(total / pageSize));
    const current = Math.min(page, pages);
    const startIndex = (current - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, total);
    const visible = filtered.slice(startIndex, endIndex);

    return (
        <div className="p-6 bg-[#F8FAFC] min-h-screen">

            {/* Controls */}
            <div className="flex items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-3 w-full max-w-2xl">
                    <div className="flex items-center bg-white border border-[#E2E8F0] rounded-md px-3 py-2 w-full shadow-sm">
                        <span className="text-[#64748B] mr-3">🔍</span>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search agencies..."
                            className="w-full outline-none text-sm text-[#0F172A] bg-transparent"
                        />
                    </div>

                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-white border border-[#E2E8F0] rounded-md px-3 py-2 text-sm text-[#0F172A] shadow-sm"
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="disabled">Disabled</option>
                    </select>
                </div>

                <div>
                    <button className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-md shadow">➕ Add New Agency</button>
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E2E8F0]">
                    <h3 className="text-lg font-medium text-[#0F172A]">Agencies</h3>
                </div>

                <div className="p-4">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr className="text-sm text-[#64748B]">
                                    <th className="px-4 py-3">Agency Name</th>
                                    <th className="px-4 py-3">City</th>
                                    <th className="px-4 py-3">Contact Info</th>
                                    <th className="px-4 py-3">Fleet Size</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visible.map((a) => (
                                    <tr key={a.id} className="hover:bg-[#F8FAFC] transition-colors">
                                        <td className="px-4 py-4 align-top">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F1F5F9] text-[#0F172A] font-semibold">
                                                    {a.nom.split(" ").map((s) => s[0]).slice(0,2).join("")}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-[#0F172A]">{a.nom}</div>
                                                    <div className="text-xs text-[#64748B]">ID #{a.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 align-top text-sm text-[#0F172A]">{a.cityName}</td>
                                        <td className="px-4 py-4 align-top text-sm">
                                            <div className="text-[#0F172A]">{a.email}</div>
                                            <div className="text-[#64748B] text-sm">{a.telephone}</div>
                                        </td>
                                        <td className="px-4 py-4 align-top">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F1F5F9] text-[#0F172A] text-sm border border-[#E2E8F0]">{a.fleetSize} Cars</span>
                                        </td>
                                        <td className="px-4 py-4 align-top">
                                            <StatusBadge status={a.statusLabel} />
                                        </td>
                                        <td className="px-4 py-4 align-top">
                                            <div className="flex items-center gap-2">
                                                <button className="p-2 rounded-md text-[#64748B] hover:bg-[#EEF2FF]" title="Edit">✏️</button>
                                                <button className="p-2 rounded-md text-[#64748B] hover:bg-[#EEF2FF]" title="View">👁️</button>
                                                <button className="p-2 rounded-md text-[#EF4444] hover:bg-[#FEEAEA]" title="Delete">🗑️</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {visible.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="px-4 py-6 text-center text-sm text-[#64748B]">No agencies found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <div className="text-sm text-[#64748B]">Showing {startIndex + 1} to {endIndex} of {total} results</div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={current === 1}
                            className="px-3 py-1 rounded-md border border-[#E2E8F0] bg-white text-sm text-[#0F172A] disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: pages }).map((_, i) => {
                                const pageNum = i + 1;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setPage(pageNum)}
                                        className={`px-3 py-1 rounded-md text-sm ${pageNum === current ? "bg-[#3B82F6] text-white" : "bg-white text-[#0F172A] border border-[#E2E8F0]"}`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setPage((p) => Math.min(pages, p + 1))}
                            disabled={current === pages}
                            className="px-3 py-1 rounded-md border border-[#E2E8F0] bg-white text-sm text-[#0F172A] disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}