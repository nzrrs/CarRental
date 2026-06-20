import { useState } from "react";
import PropTypes from "prop-types";
import { villes } from "../../../data/data";

export default function AgencySearch({ cityFilter = "", setCityFilter, nameQuery = "", setNameQuery }) {
  const [searchData, setSearchData] = useState({
    city: cityFilter ?? "",
    name: nameQuery ?? "",
  });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cityValue = searchData.city.trim();
  const normalizedCity = cityValue.toLowerCase();
  const cityIsEmpty = !cityValue;
  const matchingCity = cityIsEmpty
    ? null
    : villes.find((ville) => ville.nom.toLowerCase() === normalizedCity);
  const isCityValid = cityIsEmpty || Boolean(matchingCity);
  const citySuggestions = cityIsEmpty
    ? []
    : villes.filter((ville) => ville.nom.toLowerCase().includes(normalizedCity)).slice(0, 6);

  function handleChange(e) {
    const { id, value } = e.target;
    setSearchData((prev) => ({ ...prev, [id]: value }));
  }

  function handleCityFocus() {
    setShowSuggestions(true);
  }

  function handleCityBlur() {
    globalThis.setTimeout(() => setShowSuggestions(false), 120);
  }

  function handleCitySelect(value) {
    setSearchData((prev) => ({ ...prev, city: value }));
    setShowSuggestions(false);
  }

  function handleCityKeyDown(e) {
    const isEnter = e.key === "Enter";
    const isTab = e.key === "Tab";
    if (!isEnter && !isTab) return;

    if (showSuggestions && citySuggestions.length > 0) {
      if (isEnter) e.preventDefault();
      handleCitySelect(citySuggestions[0].nom);
      return;
    }

    if (isEnter && !isCityValid) {
      e.preventDefault();
      setShowSuggestions(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isCityValid) {
      setShowSuggestions(true);
      return;
    }
    setCityFilter(cityIsEmpty ? "" : matchingCity?.nom ?? searchData.city);
    setNameQuery(searchData.name.trim());
  }

  function handleClear() {
    setSearchData({ city: "", name: "" });
    setCityFilter("");
    setNameQuery("");
  }

  return (
    <form
      className="my-4 flex w-full flex-col gap-4 bg-white px-4 py-4 shadow-sm md:flex-row md:items-center md:gap-0 rounded-[10px]"
      onSubmit={handleSubmit}
    >
      {/* CITY */}
      <div className="flex w-full items-center justify-between gap-4 px-2 md:px-4">
        <div className="relative flex w-full min-w-0 flex-col">
          <label className="text-xs text-gray-500" htmlFor="city">
            City
          </label>
          <input
            id="city"
            value={searchData.city}
            onChange={handleChange}
            onFocus={handleCityFocus}
            onBlur={handleCityBlur}
            onKeyDown={handleCityKeyDown}
            placeholder="Any city"
            autoComplete="off"
            role="combobox"
            aria-expanded={showSuggestions}
            aria-autocomplete="list"
            aria-controls="agency-city-suggestions"
            aria-invalid={!isCityValid}
            className="w-full bg-transparent text-sm font-medium outline-none"
          />
          {showSuggestions && citySuggestions.length > 0 && (
            <ul
              id="agency-city-suggestions"
              className="absolute -left-4 top-full z-20 mt-2 max-h-60 w-[calc(100%+2rem)] overflow-auto border border-gray-200 bg-white py-2 text-sm text-gray-800 shadow-lg"
            >
              {citySuggestions.map((ville) => (
                <li key={ville.id}>
                  <button
                    type="button"
                    onMouseDown={() => handleCitySelect(ville.nom)}
                    className="flex w-full items-center px-4 py-2.5 text-left transition-colors hover:bg-gray-50"
                  >
                    {ville.nom}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <svg className="h-5 w-5 shrink-0 text-[#5937E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* NAME */}
      <div className="flex w-full items-center justify-between gap-4 px-2 md:px-4">
        <div className="flex w-full min-w-0 flex-col">
          <label className="text-xs text-gray-500" htmlFor="name">
            Agency name
          </label>
          <input
            id="name"
            value={searchData.name}
            onChange={handleChange}
            placeholder="Search by name"
            autoComplete="off"
            className="w-full bg-transparent text-sm font-medium outline-none"
          />
        </div>

        <svg className="h-5 w-5 shrink-0 text-[#5937E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </div>

      <div className="hidden h-10 w-px bg-gray-200 md:block" />

      {/* BUTTONS */}
      <button className="w-full bg-[#5937E0] px-10 py-2.5 text-base font-semibold text-white whitespace-nowrap md:ml-4 md:w-full rounded-[10px]">
        Search agencies
      </button>
      <button
        type="button"
        onClick={handleClear}
        className="w-full bg-[#FF9E0C] py-2.5 text-base font-semibold text-white whitespace-nowrap md:ml-4 md:w-1/2 rounded-[10px]"
      >
        Clear
      </button>
    </form>
  );
}

AgencySearch.propTypes = {
  cityFilter: PropTypes.string,
  setCityFilter: PropTypes.func.isRequired,
  nameQuery: PropTypes.string,
  setNameQuery: PropTypes.func.isRequired,
};