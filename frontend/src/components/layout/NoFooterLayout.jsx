import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Breadcrumb from "../ui/Breadcrumb.jsx";

function NoFooterLayout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb />
        </div>
        <Outlet />
      </main>
    </>
  );
}

export default NoFooterLayout;
