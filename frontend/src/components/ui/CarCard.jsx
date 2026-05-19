import { NavLink } from "react-router-dom";
import { TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaRegSnowflake, FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

import agencyIcon from "../../assets/icons/agency_icon.svg";

export default function CarCard({
  id,
  img,
  title,
  type,
  agencyName,
  agencyLogo,
  pricePerDay,
  rating = 5,
  features,
}) {
  const normalizedRating = Math.max(0, Math.min(5, Number(rating) || 0));
  const filledStars = Math.round(normalizedRating);

  return (
    <div className="flex h-full w-full max-w-101.5 flex-col items-center gap-6 overflow-hidden rounded-[20px] border border-[#ECECEC] bg-[#FAFAFA] p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* IMAGE */}
      <img
        className="h-56 w-full shrink-0 rounded-xl bg-white object-contain p-2 md:h-60"
        src={img || "Car image"}
        alt={title || "Car image"}
      />

      {/* TITLE */}
      <div className="flex w-full items-start justify-between gap-6">
        <div className="min-w-0 flex-1">
          <h3 className="font-title h-12 w-full overflow-hidden whitespace-normal pr-2 leading-6 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
            {title || "Unknown Car"}
          </h3>

          <p className="mt-2 font-subtitle h-5 w-full overflow-hidden text-gray-500 leading-5 truncate">
            {type || "No description available"}
          </p>

          {/* STARS + AGENCY */}
          <div className="mt-4 flex items-center gap-8 flex-wrap">

            {/* STARS */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index+1}
                  className={
                    index < filledStars ? "text-[#F4B400]" : "text-gray-300"
                  }
                  size={16}
                />
              ))}
              <span className="ml-1 text-xs text-gray-500">
                {normalizedRating.toFixed(1)}
              </span>
            </div>

            {/* AGENCY */}
            <NavLink
              to={`/agencies/${agencyName ?? "unknown"}`}
              className="flex items-center gap-2 rounded-full border border-[#5937E026] bg-[#5937E014] px-3 py-1 transition hover:bg-[#5937E026]"
            >
              <img
                src={agencyLogo || agencyIcon}
                alt={agencyName || "Agency"}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-xs font-medium text-[#5937E0] leading-none">
                {agencyName || "Maroc Rental"}
              </span>
            </NavLink>
          </div>
        </div>

        {/* PRICE */}
        <div className="min-w-24 self-start text-right">
          <p className="font-title leading-6 text-[#5937E0] text-lg">
            ${pricePerDay ?? "23"}
          </p>
          <p className="mt-1 font-subtitle text-gray-500 text-sm">per day</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="flex w-full items-center justify-between gap-4 border-t border-[#ECECEC] pt-5 text-[14px] text-[#00000099]">

        <p className="flex flex-1 items-center justify-center gap-2">
          <TbManualGearbox className="text-black" />
          {features?.transmission || "N/A"}
        </p>

        <p className="flex flex-1 items-center justify-center gap-2">
          <BsFillFuelPumpFill className="text-black" />
          {features?.fuel || "N/A"}
        </p>

        <p className="flex flex-1 items-center justify-center gap-2">
          <FaRegSnowflake className="text-black" />
          {features?.ac ? "AC" : "No AC"}
        </p>
      </div>

      {/* BUTTONS */}
      <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row">
        <NavLink
          to={`/vehicles/${id ?? "invalid"}/reservation`}
          className="flex-1 bg-[#5937E0] text-white py-2.5 rounded-lg hover:opacity-90 transition text-center"
        >
          Book Now
        </NavLink>

        <NavLink
          to={`/vehicles/car-details/${id}`}
          className="flex-1 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-100 transition text-center"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
}

CarCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  agencyName: PropTypes.string.isRequired,
  agencyLogo: PropTypes.string,
  pricePerDay: PropTypes.number.isRequired,
  rating: PropTypes.number,
  features: PropTypes.shape({
    transmission: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    ac: PropTypes.bool.isRequired,
  }).isRequired,
};