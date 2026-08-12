import { Outlet } from "react-router-dom";
import ClientSidebar from "../client/ClientSidebar";
import ClientTopbar from "../client/ClientTopbar";

function ClientLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fa]">
      <ClientSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <ClientTopbar />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ClientLayout;
