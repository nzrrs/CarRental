import BellIcon from "../../assets/icons/client/Bell.svg";
import DashboardIcon from "../../assets/icons/client/Dashboard.svg";
import LogoutIcon from "../../assets/icons/client/Logout.svg";
import ProfileIcon from "../../assets/icons/client/Profile.svg";
import ReservationIcon from "../../assets/icons/client/Car.svg";
import { NavLink } from "react-router-dom";

const menuLinkClass =
  "mb-4 flex cursor-pointer items-center gap-3 rounded-lg p-3 text-[#b5b5b5]";
const activeMenuLinkClass = `${menuLinkClass} bg-[#0d6efd] text-white`;

function ClientSidebar() {
  return (
    <div className="flex h-screen shrink-0">
      <aside className="flex w-[260px] flex-col bg-[#0f0f0f] p-[25px] text-white">
        <h2 className="mb-10 text-[22px]">CARRENT</h2>

        <nav className="menu">
          <NavLink
            to="/client"
            end
            className={({ isActive }) =>
              isActive ? activeMenuLinkClass : menuLinkClass
            }
          >
            <img src={DashboardIcon} alt="" /> Dashboard
          </NavLink>
          <NavLink
            to="/client/reservations"
            className={({ isActive }) =>
              isActive ? activeMenuLinkClass : menuLinkClass
            }
          >
            <img src={ReservationIcon} alt="" /> Reservations
          </NavLink>
          <NavLink
            to="/client/notifications"
            className={({ isActive }) =>
              isActive ? activeMenuLinkClass : menuLinkClass
            }
          >
            <img src={BellIcon} alt="" /> Notifications
          </NavLink>
          <NavLink
            to="/client/profile"
            className={({ isActive }) =>
              isActive ? activeMenuLinkClass : menuLinkClass
            }
          >
            <img src={ProfileIcon} alt="" /> Profile
          </NavLink>
        </nav>

        <button className="mt-auto mb-4 flex cursor-pointer items-center gap-2.5 rounded-lg border-0 bg-[#2a2a2a] p-3 text-white">
          <img src={LogoutIcon} alt="" /> Logout
        </button>
      </aside>
    </div>
  );
}

export default ClientSidebar;
