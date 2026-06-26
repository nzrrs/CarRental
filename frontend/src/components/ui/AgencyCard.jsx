import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import { getAgencyImage, getAgencyVehicles } from "../../utils/agency";
import { vehicles } from "../../data/data";

export default function AgencyCard({ agency }) {
  const fleet = getAgencyVehicles(agency, vehicles);
  const image = getAgencyImage(agency);
  return (
    <div className="flex w-full gap-5 rounded-[10px] border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-[10px] bg-gray-100 sm:h-36 sm:w-36">
        {image ? (
          <img src={image} alt={agency.nom} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-medium text-gray-400">
            No logo
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 py-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-base font-bold text-gray-900 sm:text-lg">{agency.nom}</h3>
              {!agency.statut && (
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-500">
                  Inactive
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{agency.city}</p>
          </div>

          <RatingStars rating={agency.rating} />
        </div>

        {agency.bio && <p className="line-clamp-2 text-sm text-gray-500">{agency.bio}</p>}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="font-medium text-gray-700">{fleet.length} cars listed</span>
            <span>{agency.fleetSize} total fleet</span>
          </div>

          <Link
            to={`/agencies/${agency.id}`}
            className="shrink-0 rounded-[10px] bg-[#5937E0] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4a2dc4]"
          >
            View agency
          </Link>
        </div>
      </div>
    </div>
  );
}

AgencyCard.propTypes = {
  agency: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string,
    rating: PropTypes.number,
    bio: PropTypes.string,
    fleetSize: PropTypes.number,
    active: PropTypes.bool,
    logo: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};