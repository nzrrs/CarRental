import { useState } from "react";
import Main from "./Main";
import Search from "./Search";
import SideFilter from "./SideFilter";
import PaginationBar from "../../../components/ui/PaginationBar";

export default function Vehicles() {
  const [filters, setFilters] = useState({
    carType: "all",
    seats: "all",
    transmission: "all",
    fuel: "all",
    agency: "all",
  });

  const [selectedSort, setSelectedSort] = useState("year_desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <div className="container pb-5">
      <Search />
      <div className="flex flex-col md:flex-row gap-5 items-start pb-5">
        <SideFilter filters={filters} setFilters={setFilters} />
        <Main
          filters={filters}
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
