import {
  Users,
  Car,
  Building2,
  CalendarCheck,
} from "lucide-react";
import StatCard from "./components/statCard";
import DashboardCharts from "./components/dashboardChart";
import TableRow from "./components/tableRow";

export default function Dashboard() {
  return (
    <div className=" bg-[#F8FAFC] min-h-screen">

      {/* ===== STATS CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        
        <StatCard
          title="Total Agencies"
          value="124"
          subtitle="+12% this month"
          icon={<Building2 className="text-blue-600" size={18} />}
          bg="bg-blue-50"
          text="text-green-600"
        />

        <StatCard
          title="Active Cars"
          value="856"
          subtitle="+5% this month"
          icon={<Car className="text-purple-600" size={18} />}
          bg="bg-purple-50"
          text="text-green-600"
        />

        <StatCard
          title="Total Users"
          value="12.5k"
          subtitle="Active accounts"
          icon={<Users className="text-orange-600" size={18} />}
          bg="bg-orange-50"
          text="text-gray-500"
        />

        <StatCard
          title="Reservations"
          value="342"
          subtitle="Pending approval: 12"
          icon={<CalendarCheck className="text-green-600" size={18} />}
          bg="bg-green-50"
          text="text-blue-600"
        />
      </div>

       {/* ===== CHARTS ===== */}
      <div className="mb-6">
        <DashboardCharts />
      </div>

      {/* ===== TABLE ===== */}
      <div className="bg-white rounded-xl shadow-sm p-4 overflow-x-auto">
        <div className="flex justify-between mb-5">
          <h2 className="font-semibold text-gray-800">
            Recent Reservations
          </h2>
          <button className="text-sm text-blue-600 hover:underline">
            View All
          </button>
        </div>

        <table className="min-w-full text-sm">
          <thead className="text-gray-500 bg-[#F8FAFC] border-b [&_th]:px-4">
            <tr>
              <th className="text-left py-3">ID</th>
              <th className="text-left">Customer</th>
              <th className="text-left">Car</th>
              <th className="text-left">Dates</th>
              <th className="text-left">Status</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>

          <tbody className="divide-y [&_td]:px-4">
            <TableRow
              id="#RES-9821"
              customer="Sarah Connor"
              car="Tesla Model 3"
              dates="Oct 24 - Oct 28"
              status="Confirmed"
              statusColor="bg-green-100 text-green-700"
              amount="$420.00"
            />
            <TableRow
              id="#RES-9820"
              customer="John Wick"
              car="Ford Mustang GT"
              dates="Oct 25 - Oct 26"
              status="Pending"
              statusColor="bg-yellow-100 text-yellow-700"
              amount="$180.00"
            />
            <TableRow
              id="#RES-9819"
              customer="Ellen Ripley"
              car="Toyota RAV4"
              dates="Oct 22 - Oct 30"
              status="Active"
              statusColor="bg-blue-100 text-blue-700"
              amount="$560.00"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}








