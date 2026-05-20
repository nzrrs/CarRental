import { Bell, Search, Sun } from "lucide-react";
import { FiMenu } from "react-icons/fi";

export default function AppBar(props) {
  return (
    <header
      className={` fixed w-245 h-16 right-0 bg-[#FFFFFF] border-b border-gray-200
                         flex items-center justify-between px-6 
                         ${props.isSidebarOpen ? "left-65 w-[calc(100%-16.25rem)]" : "left-21 w-[calc(100%-5.25rem)]"}`}
    >
      {/* Left: Title */}
      <h1 className="text-sm flex items-center gap-2 font-semibold text-gray-800">
        <button onClick={props.toggleSidebar}>
          <FiMenu
            size={18}
            className="w-7 h-7 text-gray-600 p-1 rounded-lg hover:bg-gray-100 cursor-pointer"
          />
        </button>
        Dashboard Overview
      </h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Theme icon */}
        <button className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center cursor-pointer">
          <Sun size={18} className="text-gray-600" />
        </button>

        {/* Search */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search anything..."
            className="pl-9 pr-4 py-2 w-48 text-sm rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Notification */}
        <button className="relative w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center cursor-pointer">
          <Bell size={18} className="text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
        </button>
      </div>
    </header>
  );
}
