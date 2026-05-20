import { useState, useMemo } from "react";
import { categories } from "../../../../data/data";

function ValidationBadge({ status }) {
  const styles = {
    approved: "bg-green-100 text-green-700 border-green-200",
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    rejected: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${styles[status] || styles.approved}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function StatusIndicator({ available }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${available ? "bg-green-500" : "bg-red-500"}`}></span>
      <span className="text-sm text-slate-900">{available ? "Available" : "Rented"}</span>
    </div>
  );
}

export default function VehicleTable({ vehicles, agencies }) {
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const agencyMap = useMemo(() => {
    return Object.fromEntries(agencies.map((a) => [a.id, a.nom]));
  }, [agencies]);

  const total = vehicles.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const current = Math.min(page, pages);
  const startIndex = (current - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const visible = vehicles.slice(startIndex, endIndex);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-slate-900">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-3 text-left">
                <input type="checkbox" className="rounded border-slate-300" />
              </th>
              <th className="px-6 py-3 text-left font-semibold text-slate-900">Vehicle</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-900">Plate No.</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-900">Agency</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-900">Category</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-900">Price/Day</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-900">Status</th>
              <th className="px-6 py-3 text-left font-semibold text-slate-900">Validation</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((vehicle, idx) => (
              <tr key={vehicle.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-slate-300" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 text-xs font-medium">
                      {vehicle.img ? vehicle.img.slice(0, 2).toUpperCase() : "IMG"}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        {vehicle.specs?.brand} {vehicle.specs?.model}
                      </p>
                      <p className="text-xs text-slate-500">Electric · 2023</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{String(vehicle.id).padStart(4, "ABC-")}</td>
                <td className="px-6 py-4 text-slate-600">{agencyMap[vehicle.agency?.id] || "Unknown"}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200">
                    {categories?.find((c) => c.nom === vehicle.type)?.nom || vehicle.type || "Unknown"}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-slate-900">{vehicle.pricePerDay} MAD</td>
                <td className="px-6 py-4">
                  <StatusIndicator available={vehicle.availability.isAvailable} />
                </td>
                <td className="px-6 py-4">
                  <ValidationBadge status={vehicle.availability.isAvailable ? "approved" : "pending"} />
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={8} className="px-6 py-8 text-center text-slate-500">
                  No vehicles found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
        <div className="text-sm text-slate-600">
          Showing {startIndex + 1} to {endIndex} of {total} results
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={current === 1}
            className="px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            ←
          </button>

          {Array.from({ length: pages }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  pageNum === current
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            disabled={current === pages}
            className="px-3 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
