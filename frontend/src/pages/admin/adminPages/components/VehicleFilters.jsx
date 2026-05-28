import PropTypes from "prop-types";

export default function VehicleFilters({
  statusFilter,
  setStatusFilter,
  validationFilter,
  setValidationFilter,
  agencyFilter,
  setAgencyFilter,
  searchQuery,
  setSearchQuery,
  agencies,
}) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      {/* Left: Filters */}
      <div className="flex items-center gap-3">
        {/* Status Dropdown */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Statuses</option>
          <option value="available">Available</option>
          <option value="rented">Rented</option>
          <option value="maintenance">Maintenance</option>
        </select>

        {/* Validation Dropdown */}
        <select
          value={validationFilter}
          onChange={(e) => setValidationFilter(e.target.value)}
          className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Validations</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>

        {/* Agency Dropdown */}
        <select
          value={agencyFilter}
          onChange={(e) => setAgencyFilter(e.target.value)}
          className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Agencies</option>
          {agencies.map((agency) => (
            <option key={agency.id} value={agency.id}>
              {agency.nom}
            </option>
          ))}
        </select>
      </div>

      {/* Right: Search and Add Button */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search vehicle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-4 pr-10 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400">🔍</span>
        </div>

        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium shadow-sm">
          + Add Vehicle
        </button>
      </div>
    </div>
  );
}

VehicleFilters.propTypes = {
  statusFilter: PropTypes.string.isRequired,
  setStatusFilter: PropTypes.func.isRequired,
  validationFilter: PropTypes.string.isRequired,
  setValidationFilter: PropTypes.func.isRequired,
  agencyFilter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setAgencyFilter: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  agencies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nom: PropTypes.string.isRequired,
    })
  ).isRequired,
};
