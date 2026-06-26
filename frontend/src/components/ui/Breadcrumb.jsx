import { Link, useLocation } from "react-router-dom";
import { vehicles, agences } from "../../data/data";

const HomeIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`mr-1 h-4 w-4 ${className}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mx-2 h-4 w-4 text-gray-400"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const getVehicleName = (id) => {
  const vehicle = vehicles.find((v) => String(v.id) === id);
  return vehicle ? vehicle.title : `Car ${id}`;
};

const getAgencyName = (id) => {
  const agency = agences.find((a) => String(a.id) === id);
  return agency ? agency.nom : `Agency ${id}`;
};

export default function Breadcrumb() {
  const { pathname } = useLocation();

  // Hide breadcrumb on home page
  if (pathname === "/public" || pathname === "/public/") {
    return null;
  }

  const pathnames = pathname
    .split("/")
    .filter((p) => p && p !== "public");

  const breadcrumbs = [
    {
      name: "Home",
      path: "/public",
    },
    ...pathnames.map((segment, index) => {
      let path = "/public/" + pathnames.slice(0, index + 1).join("/");

      let name;

      switch (segment) {
        case "about":
          name = "About Us";
          break;

        case "contact":
          name = "Contact Us";
          break;

        case "vehicles":
          name = "Vehicles";
          break;

        case "agencies":
          name = "Our Agencies";
          break;

        case "car-details":
          name = "Car Details";
          path = ""; // prevent linking this breadcrumb
          break;

        default:
          if (pathnames[index - 1] === "car-details") {
            name = getVehicleName(segment);
            path = "";
          } else if (pathnames[index - 1] === "agencies") {
            name = getAgencyName(segment);
          } else {
            name = segment.charAt(0).toUpperCase() + segment.slice(1);
          }
      }

      return { name, path };
    }),
  ];

  return (
    <nav>
      <ol className="flex flex-wrap items-center">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={`${breadcrumb.path}-${index}`} className="flex items-center">
            {index > 0 && <ChevronRightIcon />}

            {index === breadcrumbs.length - 1 || !breadcrumb.path ? (
              <span className="font-medium text-gray-900">
                {breadcrumb.name}
              </span>
            ) : (
              <Link
                to={breadcrumb.path}
                className={`group flex items-center ${
                  index === 0
                    ? ""
                    : "text-gray-600 transition-colors hover:text-blue-600"
                }`}
              >
                {index === 0 ? (
                  <>
                    <HomeIcon className="text-blue-600" />
                    <span className="text-blue-600 hover:underline">
                      {breadcrumb.name}
                    </span>
                  </>
                ) : (
                  breadcrumb.name
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}