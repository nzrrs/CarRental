import Sidebar from "./sideBar"
import AppBar from "./appBar"
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function AdminLayout() {
     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return(
        <main className="min-h-screen bg-[#FFFFFF]">
            <AppBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen}/>
            <div className={` main fixed top-15 h-[calc(100vh-4rem)] right-0  bg-[#F8FAFC]
                              p-2 transition-all duration-300 overflow-y-auto overflow-x-hidden
                              scroll-smooth
                             ${isSidebarOpen ? "left-65 w-[calc(100%-16.25rem)]" : "left-21 w-[calc(100%-5.25rem)]"}  `}>
                <Outlet />
            </div>
        </main>
    )
}