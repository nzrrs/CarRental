import { vehicles } from "../../../../data/data";

export default function VehicleStats() {
  const total = vehicles.length;
  const available = vehicles.filter((v) => v.availability.isAvailable).length;
  const unavailable = total - available;
  const maintenance = Math.floor(total * 0.036); // ~3.6% in maintenance

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {/* Total Vehicles */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Total Vehicles</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{total}</p>
            <p className="text-xs text-green-600 mt-2">↑ 12% vs last month</p>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-lg">
            🚗
          </div>
        </div>
      </div>

      {/* Available Now */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Available Now</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{available}</p>
            <p className="text-xs text-slate-500 mt-2">{Math.round((available / total) * 100)}% utilization rate</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-lg">
            ✓
          </div>
        </div>
      </div>

      {/* Pending Validation */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Pending Validation</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{Math.floor(total * 0.01)}</p>
            <p className="text-xs text-amber-600 mt-2">Action required</p>
          </div>
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 text-lg">
            ⚠️
          </div>
        </div>
      </div>

      {/* In Maintenance */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">In Maintenance</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{maintenance}</p>
            <p className="text-xs text-slate-500 mt-2">{Math.round((maintenance / total) * 100)}% returning soon</p>
          </div>
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-lg">
            🔧
          </div>
        </div>
      </div>
    </div>
  );
}
