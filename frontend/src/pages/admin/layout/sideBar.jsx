import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Car,
  Users,
  CalendarCheck,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar({ isOpen }) {
  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={18} />, to: "/admin/dashboard" },
    { label: "Agencies", icon: <Building2 size={18} />, to: "/admin/agencies" },
    { label: "Cars ", icon: <Car size={18} />, to: "/admin/cars", badge: 3 },
    { label: "Users", icon: <Users size={18} />, to: "/admin/users" },
    { label: "Reservations", icon: <CalendarCheck size={18} />, to: "/admin/reservations" },
  ];

  return (
    <aside
      className={`fixed h-screen bg-[#0F172A] text-gray-300 flex flex-col justify-between
        transition-all duration-300
        ${isOpen ? "w-64" : "w-20"}
      `}
    >

      {/* Navigation */}
      <nav className=" flex flex-col gap-1 px-3">
        {/* Logo */}
        <div className={`flex border-b border-gray-800 items-center gap-2 px-6 py-5 text-[#CBD5E1] font-semibold text-lg
          ${!isOpen && "justify-center"}
        `}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            🚗
          </div>
          {isOpen && <span>RentAdmin</span>}
        </div>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-[#111a2e]
              ${item.badge && isOpen ? "justify-between" : ""}
            `}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              {isOpen && <span>{item.label}</span>}
            </div>
            {item.badge && isOpen && (
              <span className="bg-[#3B82F6] text-white text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* User section */}
      <div className="border-t border-gray-800 px-4 py-4">
        <div className={`flex items-center justify-between ${!isOpen && "flex-col gap-2"}`}>
          <div className={`flex items-center gap-3 ${!isOpen && "justify-center"}`}>
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
            {isOpen && (
              <div>
                <p className="text-sm text-white">Alex Morgan</p>
                <p className="text-xs text-gray-400">Super Admin</p>
              </div>
            )}
          </div>

          <Link
            to="/logout"
            className="text-gray-400 hover:text-red-500"
          >
            <LogOut size={18} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
