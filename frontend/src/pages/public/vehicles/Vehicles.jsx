import Main from "./Main";
import PaginationBar from "../../../components/ui/PaginationBar";
import Search from "./Search";
import SideFilter from "./SideFilter";
export default function Vehicles() {
  return (
    <div className="container">
      <Search />
      <div className="flex flex-col md:flex-row gap-5 items-start">
        <SideFilter />
        <Main />
      </div>
      <PaginationBar />
    </div>
  );
}
