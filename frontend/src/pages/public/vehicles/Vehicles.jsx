import { useState } from "react";
import { useLocation } from "react-router-dom";
import Main from "./Main";
import Search from "./Search";
import SideFilter from "./SideFilter";
import PaginationBar from "../../../components/ui/PaginationBar";
import { vehicles } from "../../../data/data";

const vehiclePrices = vehicles
  .map((vehicle) => Number(vehicle.pricePerDay))
  .filter((value) => Number.isFinite(value));
const vehiclePriceBounds = vehiclePrices.length
  ? {
      min: Math.floor(Math.min(...vehiclePrices) / 50) * 50,
      max: Math.ceil(Math.max(...vehiclePrices) / 50) * 50,
    }
  : { min: 0, max: 1000 };

export default function Vehicles() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialPickUpLocation = params.get("pickupLocation") ?? location.state?.pickupLocation ?? "";
  const initialPickUpDate = params.get("pickupDate") ?? location.state?.pickupDate ?? "";
  const initialReturnDate = params.get("returnDate") ?? location.state?.returnDate ?? "";
  const initialCarType = params.get("carType") ?? location.state?.carType ?? "all";
  const initialAgency = params.get("agency") ?? location.state?.agency ?? "all";

  const [filters, setFilters] = useState({
    carType: initialCarType,
    seats: "all",
    transmission: "all",
    fuel: "all",
    agency: initialAgency,
    priceRange: [vehiclePriceBounds.min, vehiclePriceBounds.max],
  });

  const [selectedSort, setSelectedSort] = useState("year_desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pickUpLocation, setPickUpLocation] = useState(initialPickUpLocation);
  const [pickUpDate, setPickUpDate] = useState(initialPickUpDate);
  const [returnDate, setReturnDate] = useState(initialReturnDate);

  return (
    <div className="container pb-5">
      <Search 
        pickUpLocation={pickUpLocation}
        setPickUpLocation={setPickUpLocation}
        pickUpDate={pickUpDate}
        setPickUpDate={setPickUpDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
      />
      <div className="flex flex-col md:flex-row gap-5 items-start pb-5">
        <SideFilter
          filters={filters}
          setFilters={setFilters}
          priceBounds={vehiclePriceBounds}
        />
        <Main
          filters={filters}
          pickUpLocation={pickUpLocation}
          pickUpDate={pickUpDate}
          returnDate={returnDate}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setTotalPages={setTotalPages}
        />
      </div>
      {totalPages > 1 && (
        <PaginationBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}
