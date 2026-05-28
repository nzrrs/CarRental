import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function NoFooterLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NoFooterLayout;