import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import heroBg from "../../../assets/images/hero_section_bg.png";
import { villes } from "../../../data/data";

const openDatePicker = (e) => {
  e.target.showPicker?.();
  e.target.focus();
};

export default function HomeHero() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    carType: "",
    pickupLocation: "",
    pickupDate: "",
    returnDate: "",
  });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const locationValue = formData.pickupLocation.trim();
  const normalizedLocation = locationValue.toLowerCase();
  const locationIsEmpty = !locationValue;
  const matchingCity = locationIsEmpty
    ? null
    : villes.find((ville) => ville.nom.toLowerCase() === normalizedLocation);
  const isLocationValid = locationIsEmpty || Boolean(matchingCity);
  const locationQuery = locationIsEmpty ? "" : normalizedLocation;
  const locationSuggestions = locationQuery
    ? villes
        .filter((ville) => ville.nom.toLowerCase().includes(locationQuery))
        .slice(0, 6)
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLocationValid) {
      setShowSuggestions(true);
      return;
    }

    const finalPickupLocation = locationIsEmpty
      ? ""
      : (matchingCity?.nom ?? formData.pickupLocation);
    const finalFormData = { ...formData, pickupLocation: finalPickupLocation };
    // Turn formData into query params and navigate to /vehicles (object -> array(to filter out empty values) -> object -> query params)
    const filteredData = Object.fromEntries(
      Object.entries(finalFormData).filter(([, value]) => value !== ""),
    );
    const params = new URLSearchParams(filteredData);
    navigate(`/public/vehicles?${params.toString()}`, {
      state: finalFormData,
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [id]: value };

      if (id === "pickupDate") {
        if (!value) {
          next.returnDate = "";
        } else if (next.returnDate && next.returnDate < value) {
          next.returnDate = value;
        }
      }

      if (id === "returnDate" && prev.pickupDate && value < prev.pickupDate) {
        next.returnDate = prev.pickupDate;
      }

      return next;
    });
  };

  const handleLocationFocus = () => {
    setShowSuggestions(true);
  };

  const handleLocationBlur = () => {
    globalThis.setTimeout(() => {
      setShowSuggestions(false);
    }, 120);
  };

  const handleLocationSelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      pickupLocation: value,
    }));
    setShowSuggestions(false);
  };

  const handleLocationKeyDown = (e) => {
    const isEnter = e.key === "Enter";
    const isTab = e.key === "Tab";

    if (!isEnter && !isTab) return;

    if (showSuggestions && locationSuggestions.length > 0) {
      if (isEnter) {
        e.preventDefault();
      }
      handleLocationSelect(locationSuggestions[0].nom);
      return;
    }

    if (isEnter && !isLocationValid) {
      e.preventDefault();
      setShowSuggestions(true);
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
            to="/public/vehicles"
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
                required
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
                onFocus={handleLocationFocus}
                onBlur={handleLocationBlur}
                onKeyDown={handleLocationKeyDown}
                autoComplete="off"
                aria-expanded={showSuggestions}
                aria-controls="home-location-suggestions"
                aria-invalid={!isLocationValid}
                className="block w-full rounded-xl bg-[#FAFAFA] py-3 px-3 outline-none text-gray-900 placeholder:text-gray-400"
                placeholder="Place of rental"
                required
              />
              {showSuggestions && locationSuggestions.length > 0 && (
                <ul
                  id="home-location-suggestions"
                  role="listbox"
                  className="absolute left-0 right-0 top-full z-20 mt-2 max-h-60 overflow-auto rounded-xl border border-gray-200 bg-white py-2 text-sm text-gray-800 shadow-lg"
                >
                  {locationSuggestions.map((ville) => (
                    <li key={ville.id} role="option">
                      <button
                        type="button"
                        onMouseDown={() => handleLocationSelect(ville.nom)}
                        className="flex w-full items-center px-4 py-2.5 text-left transition-colors hover:bg-gray-50"
                      >
                        {ville.nom}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 21s7-5.686 7-11a7 7 0 10-14 0c0 5.314 7 11 7 11z"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
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
              min={formData.pickupDate || undefined}
              disabled={!formData.pickupDate}
              required
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#FF9E0C] px-4 py-3 text-white font-semibold transition-colors duration-300 hover:bg-[#e68f0a] focus:outline-none flex-1"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}
