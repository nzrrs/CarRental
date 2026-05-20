
import { useState, useMemo } from "react";
import { vehicles, agences } from "../../../data/data";
import VehicleStats from "./components/VehicleStats";
import VehicleFilters from "./components/VehicleFilters";
import VehicleTable from "./components/VehicleTable";

export default function ManageCars() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [validationFilter, setValidationFilter] = useState("all");
  const [agencyFilter, setAgencyFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesSearch =
        vehicle.specs.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.specs.model.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "available" && vehicle.availability.isAvailable) ||
        (statusFilter === "rented" && !vehicle.availability.isAvailable);

      const matchesAgency =
        agencyFilter === "all" || vehicle.agency.id === parseInt(agencyFilter);

      return matchesSearch && matchesStatus && matchesAgency;
    });
  }, [statusFilter, searchQuery, agencyFilter]);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      {/* Stats */}
      <VehicleStats />

      {/* Filters */}
      <VehicleFilters
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        validationFilter={validationFilter}
        setValidationFilter={setValidationFilter}
        agencyFilter={agencyFilter}
        setAgencyFilter={setAgencyFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        agencies={agences}
      />

      {/* Table */}
      <VehicleTable vehicles={filteredVehicles} agencies={agences} />
    </div>
  );
}