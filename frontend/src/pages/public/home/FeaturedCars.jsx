import { NavLink } from "react-router-dom";
import { vehicles } from "../../../data/data.js";
import CarCard from "../../../components/ui/CarCard.jsx";

import vehicleTransparent from "../../../assets/images/vehicle_transparent.png";

function FeaturedCars() {
  return (
    // FEATURED CARS CONTAINER
    <div className="container py-15">
      {/* TITLE CONTAINER */}
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-end">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Featured Cars
          </h1>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-2 max-w-xl">
            Explore our handpicked selection of top-rated cars.
          </p>
        </div>

        {/* LINK TO ALL CARS */}
        <NavLink
          to="/vehicles"
          className="group inline-flex items-center gap-1 text-[#5937E0] font-medium w-fit text-sm sm:text-base lg:text-lg"
        >
          <span className="group-hover:underline text-decoration-[#5937E0]">
            View All Cars
          </span>

          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 12h14"
            />
          </svg>
        </NavLink>
      </div>
      {/* CARS CONTAINER */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {vehicles.slice(0, 6).map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            img={vehicleTransparent}
            title={car.title}
            rating={car.rating}
            type={car.type}
            pricePerDay={car.pricePerDay}
            features={car.features}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCars;
