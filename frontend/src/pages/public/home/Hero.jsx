import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import heroBg from "../../../assets/images/hero_section_bg.png";

const openDatePicker = (e) => {
  e.target.showPicker?.();
  e.target.focus();
};

export default function HomeHero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    carType: "",
    pickupLocation: "",
    returnLocation: "",
    pickupDate: "",
    returnDate: "",
  });
  const [sameLocation, setSameLocation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Turn formData into query params and navigate to /vehicles (object -> array(to filter out empty values) -> object -> query params)
    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([, value]) => value !== ""),
    );
    const params = new URLSearchParams(filteredData);
    navigate(`/vehicles?${params.toString()}`, { state: formData });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
      ...(id === "pickupLocation" && sameLocation && { returnLocation: value }),
    }));
  };

  const handleSameLocation = (e) => {
    setSameLocation(e.target.checked);
    if (e.target.checked) {
      setFormData((prev) => ({
        ...prev,
        returnLocation: prev.pickupLocation,
      }));
    }
  };

  return (
    <>
      {/* HERO SECTION CONTAINER */}
      <div
        className="bg-cover bg-center lg:bg-left min-h-125 lg:min-h-150 rounded-[40px] p-6  md:p-12 lg:p-18 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* TEXT SECTION */}
        <div className="flex-1 text-white">
          <h1 className="font-extrabold font-[Work_sans] text-4xl md:text-5xl lg:text-6xl leading-tight mb-9">
            Experience the road like never before
          </h1>
          <p className="text-sm md:text-base lg:text-[16px] mb-6 opacity-95 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            quibusdam totam dolore? Accusantium nobis rerum dolor quos debitis,
            iste nisi?
          </p>
          <NavLink
            to="/vehicles"
            className="inline-flex items-center px-4 py-3 bg-[#FF9E0C] text-white font-medium w-fit text-sm sm:text-base lg:text-lg rounded-lg transition-colors duration-300 hover:bg-[#e68f0a]"
          >
            View All Cars
          </NavLink>
        </div>

        {/* FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-sm lg:max-w-lg bg-white rounded-[20px] p-6 sm:p-8 shadow-md flex flex-col gap-6"
        >
          <h1 className="text-xl sm:text-2xl font-semibold text-center">
            Book your car
          </h1>

          <div className="flex flex-col gap-4">
            {/* CAR TYPE */}
            <div className="relative">
              <select
                id="carType"
                value={formData.carType}
                onChange={handleChange}
                className="block w-full rounded-xl bg-[#FAFAFA] py-3 px-3 outline-none appearance-none cursor-pointer placeholder:text-gray-400"
              >
                <option value="" disabled>
                  Car type
                </option>
                <option value="sedan" className="text-gray-900">
                  Sedan
                </option>
                <option value="cabriolet" className="text-gray-900">
                  Cabriolet
                </option>
                <option value="pickup" className="text-gray-900">
                  Pickup
                </option>
                <option value="suv" className="text-gray-900">
                  SUV
                </option>
                <option value="truck" className="text-gray-900">
                  Truck
                </option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>

            {/* PICKUP LOCATION */}
            <div className="relative">
              <input
                type="text"
                id="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                className="block w-full rounded-xl bg-[#FAFAFA] py-3 px-3 outline-none text-gray-900 placeholder:text-gray-400"
                placeholder="Place of rental"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>

            {/* RETURN LOCATION */}
            <div className="relative">
              <input
                type="text"
                id="returnLocation"
                value={formData.returnLocation}
                onChange={handleChange}
                disabled={sameLocation}
                className="block w-full rounded-xl bg-[#FAFAFA] py-3 px-3 outline-none text-gray-900 placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Place of return"
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>

            {/* PICKUP DATE */}
            <input
              type="date"
              id="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              onClick={openDatePicker}
              onFocus={openDatePicker}
              className="block w-full rounded-xl bg-[#FAFAFA] py-3 px-3 outline-none cursor-pointer text-gray-900"
            />

            {/* RETURN DATE */}
            <input
              type="date"
              id="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              onClick={openDatePicker}
              onFocus={openDatePicker}
              className="block w-full rounded-xl bg-[#FAFAFA] py-3 px-3 outline-none cursor-pointer text-gray-900"
            />

            {/* SAME LOCATION CHECKBOX */}
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 pl-1">
              <input
                type="checkbox"
                checked={sameLocation}
                onChange={handleSameLocation}
                className="w-4 h-4 rounded border-gray-300 cursor-pointer"
              />Same as pickup location
            </label>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#FF9E0C] px-4 py-3 text-white font-semibold transition-colors duration-300 hover:bg-[#e68f0a] focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
