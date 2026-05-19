import { useState } from "react";

const openDatePicker = (e) => {
  if (e.isTrusted) {
    e.target.showPicker?.();
  }
};

export default function Search() {
  const [searchData, setSearchData] = useState({
    location: "Casablanca, Maroc",
    pickupDate: "",
    returnDate: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  return (
    <form className="flex w-full flex-col gap-4 rounded-2xl bg-white px-4 py-4 shadow-sm md:flex-row md:items-center md:gap-0 my-4">
      {/* LOCATION */}
      <div className="flex w-full items-center justify-between gap-4 px-2 md:px-4">
        <div className="flex w-full min-w-0 flex-col">
          <label className="text-xs text-gray-500" htmlFor="location">
            Pick-up location
          </label>
          <input
            id="location"
            value={searchData.location}
            onChange={handleChange}
            className="w-full bg-transparent text-sm font-medium outline-none"
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
      <button className="w-full rounded-xl bg-[#5937E0] px-10 py-2.5 text-base font-semibold text-white whitespace-nowrap md:ml-4 md:w-full">
        Search cars
      </button>
    </form>
  );
}
