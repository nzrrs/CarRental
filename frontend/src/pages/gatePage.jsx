
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Globe,
  Building2,
  User,
  ArrowRight,
} from "lucide-react";

export default function GatePage() {

     const dashboards = [
    {
      title: "Admin",
      description:
        "Manage users, agencies, bookings and platform settings.",
      icon: <ShieldCheck size={60} />,
      route: "/admin",
    },
    {
      title: "Public",
      description:
        "Explore vehicles, agencies and make reservations easily.",
      icon: <Globe size={60} />,
      route: "/public",
    },
    {
      title: "Agence",
      description:
        "Manage your agency, vehicles, bookings and customers.",
      icon: <Building2 size={60} />,
      route: "/agence",
    },
    {
      title: "Client",
      description:
        "View reservations, booking history and account settings.",
      icon: <User size={60} />,
      route: "/client",
    },
  ];

    return(
        <div className="min-h-screen bg-gradient-to-br from-purple-700 via-violet-600 to-purple-900 flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Choose Your Dashboard
        </h1>

        <p className="text-white/80 mt-4 text-lg">
          Select the space you want to access
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-7xl">
        {dashboards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300 flex flex-col"
          >
            <div className="bg-purple-100 text-purple-700 w-28 h-28 rounded-3xl flex items-center justify-center mx-auto">
              {item.icon}
            </div>

            <h2 className="text-3xl font-bold text-center mt-6 text-purple-700">
              {item.title}
            </h2>

            <p className="text-gray-600 text-center mt-4 flex-grow">
              {item.description}
            </p>

            <Link
              to={item.route}
              className="mt-8 bg-gradient-to-r from-purple-600 to-violet-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              Go to {item.title}
              <ArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </div>
    );
}