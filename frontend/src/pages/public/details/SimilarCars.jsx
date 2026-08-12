import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const fallbackImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
];

export default function SimilarCars({ vehicle, vehicles }) {
  const similarCars = useMemo(() => {
    if (!vehicle) {
      return [];
    }

    const baseName = vehicle.title?.split(" ")[0];
    const roundedRating = Math.round(vehicle.rating || 0);

    return (vehicles || [])
      .filter((item) => item.id !== vehicle.id)
      .filter((item) => {
        const sameRating = Math.round(item.rating || 0) === roundedRating;
        const sameAgency = item.agencyId === vehicle.agencyId;
        const sameName = baseName && item.title?.includes(baseName);
        return sameRating || sameAgency || sameName;
      })
      .slice(0, 4);
  }, [vehicle, vehicles]);

  if (!vehicle) {
    return null;
  }

  return (
    <div className="rounded-[20px] bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-[#1F1F1F]">Similar cars</h3>
        <NavLink
          to="/public/vehicles"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          View all cars
        </NavLink>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {similarCars.map((item, index) => (
          <div key={item.id} className=" p-4">
            <div className="h-36 overflow-hidden">
              <img
                src={fallbackImages[index % fallbackImages.length]}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-[#1F1F1F]">
                {item.title}
              </p>
              <span className="flex items-center gap-1 text-xs text-[#4F4F4F]">
                <FaStar className="text-[#FFB400]" />
                {item.rating?.toFixed?.(1)}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#7D7D7D]">{item.agency?.name}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#5937E0]">
                {item.pricePerDay?.toLocaleString?.()} MAD/day
              </span>
              <NavLink
                to={`/public/vehicles/car-details/${item.id}`}
                className="text-xs font-semibold text-[#2F80ED] hover:underline"
              >
                View
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

SimilarCars.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.number,
    rating: PropTypes.number,
    title: PropTypes.string,
    agencyId: PropTypes.number,
  }),
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      rating: PropTypes.number,
      agencyId: PropTypes.number,
      pricePerDay: PropTypes.number,
      agency: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  ),
};

SimilarCars.defaultProps = {
  vehicle: null,
  vehicles: [],
};
