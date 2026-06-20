import React from "react";
import PropTypes from "prop-types";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaStar,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import VehicleFilters from "@/pages/admin/adminPages/components/VehicleFilters";

export default function AboutAgency({ vehicle }) {
  if (!vehicle?.agency) {
    return null;
  }

  const rating = Number(vehicle.agency.rating || 0);
  const roundedRating = Math.round(rating);

  return (
    <div className="h-full rounded-[20px]  bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#1F1F1F]">About agency</h3>

      <div className="my-10 flex items-center gap-4">
        <img
          src={vehicle.agency.image}
          alt={vehicle.agency.name}
          className="h-24 w-24 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold text-black">
            {vehicle.agency.name}
          </p>
          <div className="mt-1 flex items-center gap-2 text-sm text-[#4F4F4F]">
            <div className="flex items-center gap-1 text-[#FFB400]">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
                <FaStar
                  key={star}
                  className={
                    star <= roundedRating ? "opacity-100" : "opacity-30"
                  }
                />
              ))}
            </div>
            <span className="font-medium text-black">{rating.toFixed(1)}</span>
          </div>
          <p className="mt-1 flex items-center gap-2 text-sm text-[#4F4F4F]">
            <FaMapMarkerAlt className="text-black" />
            {vehicle.agency.adresse}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-[#4F4F4F]">{vehicle.agency.bio}</p>

      <div className="my-5 flex flex-col items-start gap-6 text-sm text-[#4F4F4F]">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-black" />
          <span>{vehicle.agency.telephone}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-black" />
          <span>{vehicle.agency.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaRegClock className="text-black" />
          <span>{vehicle.agency.supportTime}</span>
        </div>
      </div>

      <NavLink to={`/agencies/${vehicle.agencyId}`}>
        <button
          type="button"
          className="mt-6 w-full rounded-[5px] border border-black py-3 text-sm font-semibold text-black hover:bg-black/5"
        >
          View agency profile
        </button>
      </NavLink>
    </div>
  );
}

AboutAgency.propTypes = {
  vehicle: PropTypes.shape({
    agency: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      telephone: PropTypes.string,
      rating: PropTypes.number,
      adresse: PropTypes.string,
      bio: PropTypes.string,
      supportTime: PropTypes.string,
      image: PropTypes.string,
    }),
  }),
};

AboutAgency.defaultProps = {
  vehicle: null,
};
