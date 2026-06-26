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
  const [showFilters, setShowFilters] = useState(false); 

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

      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-start pb-5">

        <div className="hidden md:block">
          <SideFilter filters={filters} setFilters={setFilters} priceBounds={vehiclePriceBounds} />
        </div>
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


      {showFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-white overflow-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="pb-20">
              <SideFilter filters={filters} setFilters={setFilters} priceBounds={vehiclePriceBounds} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
              <button onClick={() => setShowFilters(false)} className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      )}
    </div>
  );
}