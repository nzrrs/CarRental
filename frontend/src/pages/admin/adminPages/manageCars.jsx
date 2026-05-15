
import { useState, useMemo } from "react";
import { voitures, agences } from "../../../data/data";
import VehicleStats from "./components/VehicleStats";
import VehicleFilters from "./components/VehicleFilters";
import VehicleTable from "./components/VehicleTable";

export default function ManageCars() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [validationFilter, setValidationFilter] = useState("all");
  const [agencyFilter, setAgencyFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVehicles = useMemo(() => {
    return voitures.filter((vehicle) => {
      const matchesSearch =
        vehicle.marque.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.modele.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "available" && vehicle.estDisponible) ||
        (statusFilter === "rented" && !vehicle.estDisponible);

      const matchesAgency =
        agencyFilter === "all" || vehicle.agenceId === parseInt(agencyFilter);

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