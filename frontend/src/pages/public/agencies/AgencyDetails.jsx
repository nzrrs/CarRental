import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { agences, vehicles } from "../../../data/data";
import CarCard from "../../../components/ui/CarCard";
import PaginationBar from "../../../components/ui/PaginationBar";
import RatingStars from "../../../components/ui/RatingStars";
import { getAgencyImage, getAgencyVehicles } from "../../../utils/agency";

export default function AgencyDetails() {
  const { id } = useParams();
  const agency = agences.find((a) => String(a.id) === id);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  if (!agency) {
    return (
      <div className="container py-10 text-center">
        <p className="text-lg font-semibold text-gray-900">Agency not found</p>
        <Link to="/agencies" className="mt-2 inline-block text-sm font-medium text-[#5937E0]">
          Back to agencies
        </Link>
      </div>
    );
  }

  const fleet = getAgencyVehicles(agency, vehicles);
  const totalPages = Math.max(Math.ceil(fleet.length / carsPerPage), 1);
  const paginatedFleet = fleet.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage);
  const image = getAgencyImage(agency);

  return (
    <div className="container pb-10">
      <div className="my-4 flex flex-col gap-5 rounded-[10px] bg-white p-5 shadow-sm sm:flex-row sm:p-6">
        <div className="h-32 w-32 shrink-0 overflow-hidden rounded-[10px] bg-gray-100 sm:h-40 sm:w-40">
          {image ? (
            <img src={image} alt={agency.nom} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs font-medium text-gray-400">
              No logo
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">{agency.nom}</h1>
                {!agency.statut && (
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
                    Inactive
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{agency.adresse}</p>
            </div>
            <RatingStars rating={agency.rating} size="lg" />
          </div>

          {agency.bio && <p className="text-sm text-gray-600">{agency.bio}</p>}

          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
            <span>
              <span className="font-medium text-gray-700">{fleet.length}</span> cars listed
            </span>
            <span>
              <span className="font-medium text-gray-700">{agency.fleetSize}</span> total fleet
            </span>
            {agency.supportTime && <span>{agency.supportTime}</span>}
            {agency.telephone && <span>{agency.telephone}</span>}
            {agency.email && <span>{agency.email}</span>}
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-lg font-bold text-gray-900">Cars from {agency.nom}</h2>

      {paginatedFleet.length === 0 ? (
        <p className="text-sm text-gray-500">This agency has no cars listed yet.</p>
      ) : (
        <div className="grid w-full grid-cols-1 xl:grid-cols-3 gap-6">
          {paginatedFleet.map((vehicle) => (
            <CarCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      )}
    </div>
  );
}