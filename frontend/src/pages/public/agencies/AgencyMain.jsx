import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { agences, vehicles } from "../../../data/data";
import AgencyCard from "../../../components/ui/AgencyCard";
import Select from "../../../components/ui/Select";
import { getAgencyVehicles, normalizeText } from "../../../utils/agency";

const sortOptions = [
  { label: "Highest Rating", value: "rating_desc" },
  { label: "Name: A-Z", value: "name_asc" },
  { label: "Most Cars Listed", value: "fleet_desc" },
  { label: "Largest Fleet", value: "fleetSize_desc" },
];

function sortAgencies(list, sortType) {
  const sorted = [...list];
  switch (sortType) {
    case "rating_desc":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "name_asc":
      return sorted.sort((a, b) => a.nom.localeCompare(b.nom));
    case "fleet_desc":
      return sorted.sort(
        (a, b) => getAgencyVehicles(b, vehicles).length - getAgencyVehicles(a, vehicles).length
      );
    case "fleetSize_desc":
      return sorted.sort((a, b) => b.fleetSize - a.fleetSize);
    default:
      return sorted;
  }
}

function filterAgencies(list, filters) {
  return list.filter((agency) => {
    if (filters.activeOnly && !agency.statut) return false;
    if (filters.city !== "all" && normalizeText(agency.adresse) !== filters.city) return false;
    if (Number(filters.minRating) > 0 && agency.rating < Number(filters.minRating)) return false;
    if (filters.carTypes.length > 0) {
      const offered = new Set(getAgencyVehicles(agency, vehicles).map((v) => normalizeText(v.type)));
      if (!filters.carTypes.some((t) => offered.has(t))) return false;
    }
    return true;
  });
}

function filterBySearch(list, { cityFilter, nameQuery }) {
  return list.filter((agency) => {
    if (cityFilter && !normalizeText(agency.adresse).includes(normalizeText(cityFilter))) return false;
    if (nameQuery && !normalizeText(agency.nom).includes(normalizeText(nameQuery))) return false;
    return true;
  });
}

export default function AgencyMain({
  filters,
  cityFilter,
  nameQuery,
  selectedSort,
  setSelectedSort,
  currentPage,
  setCurrentPage,
  setTotalPages,
}) {
  const agenciesPerPage = 6;
  const listTopRef = useRef(null);
  const hasMountedRef = useRef(false);

  const filteredAgencies = filterAgencies(agences, filters);
  const searchFilteredAgencies = filterBySearch(filteredAgencies, { cityFilter, nameQuery });
  const sortedAgencies = sortAgencies(searchFilteredAgencies, selectedSort);
  const totalPages = Math.max(Math.ceil(sortedAgencies.length / agenciesPerPage), 1);

  useEffect(() => {
    setCurrentPage(1);
    setTotalPages(totalPages);
  }, [filters, cityFilter, nameQuery, selectedSort, totalPages, setCurrentPage, setTotalPages]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage, filters, selectedSort]);

  const paginatedAgencies = sortedAgencies.slice(
    (currentPage - 1) * agenciesPerPage,
    currentPage * agenciesPerPage
  );

  return (
    <div ref={listTopRef} className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">{sortedAgencies.length} agencies found</h1>
        <Select
          id="sort"
          label="Sort by:"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
          options={sortOptions}
        />
      </div>

      {paginatedAgencies.length === 0 ? (
        <p className="text-sm text-gray-500">No agencies match these filters.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {paginatedAgencies.map((agency) => (
            <AgencyCard key={agency.id} agency={agency} />
          ))}
        </div>
      )}
    </div>
  );
}

AgencyMain.propTypes = {
  filters: PropTypes.shape({
    city: PropTypes.string.isRequired,
    minRating: PropTypes.string.isRequired,
    carTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeOnly: PropTypes.bool.isRequired,
  }).isRequired,
  cityFilter: PropTypes.string.isRequired,
  nameQuery: PropTypes.string.isRequired,
  selectedSort: PropTypes.string.isRequired,
  setSelectedSort: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};