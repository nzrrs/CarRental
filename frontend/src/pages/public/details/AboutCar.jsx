import React from "react";
import PropTypes from "prop-types";
import { FaCogs, FaGasPump, FaRegHeart, FaSnowflake, FaStar, FaUsers } from "react-icons/fa";

export default function AboutCar({ vehicle }) {
  if (!vehicle) {
    return null;
  }

  const rating = Number(vehicle.rating || 0);
  const roundedRating = Math.round(rating);
  const isAvailable = vehicle?.availability?.isAvailable;
  const contactEmail = vehicle?.agency?.email || "info@carrental.ma";

  const quickFeatures = [
    {
      label: vehicle.specs?.seats ? `${vehicle.specs.seats} Seats` : "Seats",
      icon: FaUsers,
    },
    {
      label: vehicle.features?.transmission ? `${vehicle.features.transmission} Transmission` : "Transmission",
      icon: FaCogs,
    },
    {
      label: vehicle.features?.fuel ? `${vehicle.features.fuel} Fuel` : "Fuel",
      icon: FaGasPump,
    },
    {
      label: vehicle.features?.ac ? "Air Conditioning" : "No Air Conditioning",
      icon: FaSnowflake,
    },
  ];

  return (
    <div className="h-full rounded-[20px] bg-white">
      <div className="flex h-full flex-col rounded-[16px]  p-4 shadow-sm sm:p-5">
        <h2 className="text-2xl font-semibold text-[#1F1F1F]">{vehicle.title}</h2>

        <div className="mt-4 flex items-center gap-2 text-sm text-[#4F4F4F]">
          <div className="flex items-center gap-1 text-[#FFB400]">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={`star-${index + 1}`}
                className={index < roundedRating ? "opacity-100" : "opacity-30"}
              />
            ))}
          </div>
          <span className="font-medium text-[#1F1F1F]">{rating.toFixed(1)}</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-[#7D7D7D]">Price per day</p>
            <p className="text-2xl font-semibold text-[#5937E0]">
              {vehicle.pricePerDay?.toLocaleString?.()} MAD
            </p>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              isAvailable ? "bg-[#E6F6ED] text-[#1F8B4C]" : "bg-[#FDECEC] text-[#D64545]"
            }`}
          >
            {isAvailable ? "Available" : "Not available"}
          </span>
        </div>

        <p className="mt-6 text-sm text-[#4F4F4F] leading-relaxed">{vehicle.description}</p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {quickFeatures.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 rounded-xl border border-[#EFEFEF] px-3 py-2 text-sm text-[#1F1F1F]"
            >
              <feature.icon className="text-black" />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`mailto:${contactEmail}`}
            className="flex w-full items-center justify-center rounded-[5px] bg-[#2460af] py-3 text-sm font-semibold text-white hover:bg-[#3c7ad0]"
          >
            Contact agency
          </a>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-[5px] border border-black bg-white py-3 text-sm font-semibold text-black hover:bg-black/5"
          >
            <FaRegHeart />
            Save to favorites
          </button>
        </div>
      </div>
    </div>
  );
}

AboutCar.propTypes = {
  vehicle: PropTypes.shape({
    title: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
    pricePerDay: PropTypes.number,
    specs: PropTypes.shape({
      seats: PropTypes.number,
    }),
    features: PropTypes.shape({
      fuel: PropTypes.string,
      transmission: PropTypes.string,
      ac: PropTypes.bool,
    }),
    availability: PropTypes.shape({
      isAvailable: PropTypes.bool,
    }),
    agency: PropTypes.shape({
      email: PropTypes.string,
    }),
  }),
};

AboutCar.defaultProps = {
  vehicle: null,
};
