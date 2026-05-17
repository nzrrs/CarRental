import { NavLink } from "react-router-dom";
import { TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa6";
import PropTypes from "prop-types";

function CarCard({ id, img, title, subtitle, pricePerDay, features }) {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-80 min-h-105 rounded-[20px] p-4 bg-[#FAFAFA] overflow-hidden gap-8 shadow-sm">
      
      {/* IMAGE */}
      <img
        className="w-full h-40 object-contain"
        src={img || "Car image"}
        alt={title}
      />

      {/* TITLE */}
      <div className="flex w-full items-center justify-between">
        <span>
          <h3 className="font-title">{title}</h3>
          <p className="font-subtitle text-gray-500">
            {subtitle}
          </p>
        </span>

        <span className="text-right">
          <p className="font-title text-[#5937E0]">
            ${pricePerDay}
          </p>
          <p className="font-subtitle text-gray-500">
            per day
          </p>
        </span>
      </div>

      {/* FEATURES */}
      <div className="flex flex-row items-center justify-between w-full text-[14px] text-[#00000099]">
        
        <p className="flex items-center gap-1 shrink-0">
          <TbManualGearbox className="text-black" />
          {features?.transmission || "N/A"}
        </p>

        <p className="flex items-center gap-1 shrink-0">
          <BsFillFuelPumpFill className="text-black" />
          {features?.fuel || "N/A"}
        </p>

        <p className="flex items-center gap-1 shrink-0">
          <FaRegSnowflake className="text-black" />
          {features?.ac ? "AC" : "No-AC"}
        </p>

      </div>

      {/* BUTTONS */}
      <div className="flex w-full gap-2 mt-auto">

        <NavLink
          to={`/vehicles/${id}/reservation`}
          className="flex-1 bg-[#5937E0] text-white py-2 rounded-lg hover:opacity-90 transition text-center"
        >
          Book Now
        </NavLink>

        <NavLink
          to={`/vehicles/car-details/${id}`}
          className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition text-center"
        >
          View Details
        </NavLink>

      </div>
    </div>
  );
}

export default CarCard;

CarCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  pricePerDay: PropTypes.number.isRequired,

  features: PropTypes.shape({
    transmission: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    ac: PropTypes.bool.isRequired,
  }).isRequired,
};