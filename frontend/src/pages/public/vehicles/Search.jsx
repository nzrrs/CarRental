import { useState } from "react";
import PropTypes from "prop-types";
import { villes } from "../../../data/data";

const openDatePicker = (e) => {
  if (e.isTrusted) {
    e.target.showPicker?.();
  }
};

export default function Search({
  pickUpLocation = "Choose a location",
  setPickUpLocation,
  pickUpDate,
  setPickUpDate,
  returnDate,
  setReturnDate,
}) {
  const [searchData, setSearchData] = useState({
    location: pickUpLocation ?? "",
    pickupDate: pickUpDate ?? "",
    returnDate: returnDate ?? "",
  });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const locationValue = searchData.location.trim();
  const normalizedLocation = locationValue.toLowerCase();
  const locationIsEmpty = !locationValue || normalizedLocation === "choose a location";
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

  function handleChange(e) {
    const { id, value } = e.target;
    setSearchData((prev) => {
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
  }

  function handleLocationFocus() {
    setShowSuggestions(true);
  }

  function handleLocationBlur() {
    globalThis.setTimeout(() => {
      setShowSuggestions(false);
    }, 120);
  }

  function handleLocationSelect(value) {
    setSearchData((prev) => ({
      ...prev,
      location: value,
    }));
    setShowSuggestions(false);
  }

  function handleLocationKeyDown(e) {
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
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isLocationValid) {
      setShowSuggestions(true);
      return;
    }

    const finalLocation = locationIsEmpty
      ? "Choose a location"
      : matchingCity?.nom ?? searchData.location;

    setPickUpLocation(finalLocation);
    setPickUpDate(searchData.pickupDate);
    setReturnDate(searchData.returnDate);
  }

  function handleClear() {  
    setSearchData({
      location: "",
      pickupDate: "",
      returnDate: "",
    });
    setPickUpLocation("");
    setPickUpDate("");
    setReturnDate("");
  }

  return (
    <form
      className="my-4 flex w-full flex-col gap-4 bg-white px-4 py-4 shadow-sm md:flex-row md:items-center md:gap-0 rounded-[10px]"
      onSubmit={handleSubmit}
    >
      {/* LOCATION */}
      <div className="flex w-full items-center justify-between gap-4 px-2 md:px-4">
        <div className="relative flex w-full min-w-0 flex-col">
          <label className="text-xs text-gray-500" htmlFor="location">
            Pick-up location
          </label>
          <input
            id="location"
            value={searchData.location}
            onChange={handleChange}
            onFocus={handleLocationFocus}
            onBlur={handleLocationBlur}
            onKeyDown={handleLocationKeyDown}
            placeholder="Choose a location"
            autoComplete="off"
            role="combobox"
            aria-expanded={showSuggestions}
            aria-autocomplete="list"
            aria-controls="location-suggestions"
            aria-invalid={!isLocationValid}
            className="w-full bg-transparent text-sm font-medium outline-none"
          />
          {showSuggestions && locationSuggestions.length > 0 && (
            <ul
              id="location-suggestions"
              className="absolute -left-4 top-full z-20 mt-2 max-h-60 w-[calc(100%+2rem)] overflow-auto border border-gray-200 bg-white py-2 text-sm text-gray-800 shadow-lg"
            >
              {locationSuggestions.map((ville) => (
                <li key={ville.id}>
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
        </div>

        <svg
          className="h-5 w-5 shrink-0 text-[#5937E0]"
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
          <circle cx="12" cy="10" r="2" strokeWidth={2} />
        </svg>
      </div>

      <div className="hidden h-10 w-px bg-gray-200 md:block" />

      {/* PICKUP DATE */}
      <div className="flex w-full items-center justify-between gap-4 px-2 md:px-4">
        <div className="flex w-full min-w-0 flex-col">
          <label className="text-xs text-gray-500" htmlFor="pickupDate">
            Pick-up date
          </label>
          <input
            type="date"
            id="pickupDate"
            value={searchData.pickupDate}
            onChange={handleChange}
            onClick={openDatePicker}
            className="w-full cursor-pointer bg-transparent text-sm font-medium outline-none"
          />
        </div>

        <svg
          className="h-5 w-5 shrink-0 text-[#5937E0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      <div className="hidden h-10 w-px bg-gray-200 md:block" />

      {/* RETURN DATE */}
      <div className="flex w-full items-center justify-between gap-4 px-2 md:px-4">
        <div className="flex w-full min-w-0 flex-col">
          <label className="text-xs text-gray-500" htmlFor="returnDate">
            Return date
          </label>
          <input
            type="date"
            id="returnDate"
            value={searchData.returnDate}
            onChange={handleChange}
            onClick={openDatePicker}
            className="w-full cursor-pointer bg-transparent text-sm font-medium outline-none"
            min={searchData.pickupDate || undefined}
            disabled={!searchData.pickupDate}
            required
          />
        </div>

        <svg
          className="h-5 w-5 shrink-0 text-[#5937E0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="hidden h-10 w-px bg-gray-200 md:block" />
      {/* BUTTON */}
      <button className="w-full bg-[#5937E0] px-10 py-2.5 text-base font-semibold text-white whitespace-nowrap md:ml-4 md:w-full rounded-[10px]">
        Search cars
      </button>
      <button
      onClick={handleClear}
      className="w-full bg-[#FF9E0C] py-2.5 text-base font-semibold text-white whitespace-nowrap md:ml-4 md:w-1/2 rounded-[10px]">
        Clear
      </button>
    </form>
  );
}

Search.propTypes = {
  pickUpLocation: PropTypes.string,
  setPickUpLocation: PropTypes.func.isRequired,
  pickUpDate: PropTypes.string,
  setPickUpDate: PropTypes.func.isRequired,
  returnDate: PropTypes.string,
  setReturnDate: PropTypes.func.isRequired,
};
