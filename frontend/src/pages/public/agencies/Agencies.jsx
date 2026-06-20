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

  return (
    <div className="container pb-5">
      <AgencySearch
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        nameQuery={nameQuery}
        setNameQuery={setNameQuery}
      />
      <div className="flex flex-col md:flex-row gap-5 items-start pb-5">
        <AgencySideFilter filters={filters} setFilters={setFilters} />
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
      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      )}
    </div>
  );
}