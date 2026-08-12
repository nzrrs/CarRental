import { useState } from "react";
import AgencyMain from "./AgencyMain";
import AgencySearch from "./AgencySearch";
import AgencySideFilter from "./AgencySideFilter";
import PaginationBar from "../../../components/ui/PaginationBar";

export default function Agencies() {
  const [filters, setFilters] = useState({
    city: "all",
    minRating: "0",
    carTypes: [],
    activeOnly: true,
  });

  const [selectedSort, setSelectedSort] = useState("rating_desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cityFilter, setCityFilter] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="container pb-5">
      <AgencySearch
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        nameQuery={nameQuery}
        setNameQuery={setNameQuery}
      />
      
      {/* Filter button for small screens */}
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
        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <AgencySideFilter filters={filters} setFilters={setFilters} />
        </div>
        
        <AgencyMain
          filters={filters}
          cityFilter={cityFilter}
          nameQuery={nameQuery}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setTotalPages={setTotalPages}
        />
      </div>
      
      {/* Mobile filter drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowFilters(false)}
          />
          
          {/* Drawer */}
          <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-white overflow-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <button 
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="pb-20">
              <AgencySideFilter filters={filters} setFilters={setFilters} />
            </div>
            
            {/* Apply button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
              <button 
                onClick={() => setShowFilters(false)}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
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