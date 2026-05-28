import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { vehicles } from "../../../data/data.js";
import CarCard from "../../../components/ui/CarCard";
import Select from "../../../components/ui/Select";

const sortOptions = [
  { label: "Newest", value: "year_desc" },
  { label: "Oldest", value: "year_asc" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Highest Rating", value: "rating_desc" },
  { label: "Lowest Mileage", value: "mileage_asc" },
];

function sortCars(cars, sortType) {
  const sorted = [...cars];
  switch (sortType) {
    case "price_asc": return sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
    case "price_desc": return sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
    case "year_desc": return sorted.sort((a, b) => b.specs.year - a.specs.year);
    case "year_asc": return sorted.sort((a, b) => a.specs.year - b.specs.year);
    case "rating_desc": return sorted.sort((a, b) => b.rating - a.rating);
    case "mileage_asc": return sorted.sort((a, b) => a.specs.mileage - b.specs.mileage);
    default: return sorted;
  }
}

function filterCars(cars, filters) {
  return cars.filter((car) => {
    if (filters.carType !== "all" && car.type.toLowerCase() !== filters.carType) return false;
    if (filters.seats !== "all" && car.specs.seats !== Number(filters.seats)) return false;
    if (filters.transmission !== "all" && car.features.transmission.toLowerCase() !== filters.transmission) return false;
    if (filters.fuel !== "all" && car.features.fuel.toLowerCase() !== filters.fuel) return false;
    if (filters.agency !== "all" && car.agency.name.toLowerCase() !== filters.agency) return false;
    return true;
  });
}

export default function Main({ filters, selectedSort, setSelectedSort, currentPage, setCurrentPage, setTotalPages }) {
  const carsPerPage = 6;
  const listTopRef = useRef(null);
  const hasMountedRef = useRef(false);

  const filteredCars = filterCars(vehicles, filters);
  const sortedCars = sortCars(filteredCars, selectedSort);
  const totalPages = Math.ceil(sortedCars.length / carsPerPage);

  useEffect(() => {
    setCurrentPage(1);
    setTotalPages(totalPages);
  }, [filters, selectedSort, totalPages, setCurrentPage, setTotalPages]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage, filters, selectedSort]);

  const paginatedCars = sortedCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  return (
    <div ref={listTopRef} className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">{sortedCars.length} cars available</h1>
        <Select
          id="sort"
          label="Sort by:"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
          options={sortOptions}
        />
      </div>

      <div className="grid w-full grid-cols-1 xl:grid-cols-3 gap-6">
        {paginatedCars.map((vehicle) => (
          <CarCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

Main.propTypes = {
  filters: PropTypes.shape({
    carType: PropTypes.string.isRequired,
    seats: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    transmission: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    agency: PropTypes.string.isRequired,
  }).isRequired,
  selectedSort: PropTypes.string.isRequired,
  setSelectedSort: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setTotalPages: PropTypes.func.isRequired,
};
