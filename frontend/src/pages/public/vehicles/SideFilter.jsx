import PropTypes from "prop-types";
import { useState } from "react";
const carTypeOptions = [
  { value: "all", label: "All" },
  { value: "sedan", label: "Sedan" },
  { value: "cabriolet", label: "Cabriolet" },
  { value: "pickup", label: "Pickup" },
  { value: "suv", label: "SUV" },
  { value: "truck", label: "Truck" },
];

const seatOptions = [
  { value: "all", label: "All" },
  { value: "2", label: "2 seats" },
  { value: "4", label: "4 seats" },
  { value: "5", label: "5 seats" },
  { value: "7", label: "7 seats" },
];

const transmissionOptions = [
  { value: "all", label: "All" },
  { value: "automatic", label: "Automatic" },
  { value: "manual", label: "Manual" },
];

const fuelOptions = [
  { value: "all", label: "All" },
  { value: "diesel", label: "Diesel" },
  { value: "petrol", label: "Petrol" },
  { value: "hybrid", label: "Hybrid" },
  { value: "electric", label: "Electric" },
];

const agencyOptions = [
  { value: "atlas rentals", label: "Atlas Rentals" },
  { value: "prestige drive", label: "Prestige Drive" },
  { value: "royal vehicles", label: "Royal Vehicles" },
];

function FilterSection({ title, children, defaultOpen = true, sectionId }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="p-4 border-b border-gray-200">
      <details
        className="group"
        open={isOpen}
        onToggle={(event) => setIsOpen(event.currentTarget.open)}
      >
        <summary
          id={sectionId}
          className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-semibold text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/80 sm:text-sm [&::-webkit-details-marker]:hidden"
        >
          <span>{title}</span>

          <svg
            aria-hidden="true"
            className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M6 8l4 4 4-4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </summary>

        <div className="mt-3">{children}</div>
      </details>
    </div>
  );
}

function CheckboxGroup({ name, options, selected, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      {options.map((option) => {
        const optionId = `${name}-${option.value}`;
        const isChecked = selected === option.value;

        return (
          <label
            key={option.value}
            htmlFor={optionId}
            className="flex min-h-11 items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-gray-50 sm:text-base"
          >
            <input
              id={optionId}
              name={name}
              type="radio"
              checked={isChecked}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 accent-blue-600"
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

function SelectField({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full min-h-11 appearance-none rounded-md border border-gray-200 bg-white px-3 py-2.5 pr-9 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/80 sm:text-base"
      >
        <option value="all">All</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M6 8l4 4 4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export default function SideFilter({ filters, setFilters }) {
  return (
    <form className="w-full shrink-0 rounded-[10px] border border-gray-200 bg-white shadow md:w-70">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 p-4">
        <p className="text-lg font-bold text-gray-900 sm:text-xl">Filters</p>

        <button
          type="reset"
          className="text-xs font-medium text-blue-600 hover:text-blue-500"
          onClick={() =>
            setFilters({
              carType: "all",
              seats: "all",
              transmission: "all",
              fuel: "all",
              agency: "all",
            })
          }
        >
          Clear all
        </button>
      </div>

      {/* Car type */}
      <FilterSection title="Car type">
        <CheckboxGroup
          name="car-type"
          options={carTypeOptions}
          selected={filters.carType}
          onChange={(v) => setFilters({ ...filters, carType: v })}
        />
      </FilterSection>

      {/* Seats */}
      <FilterSection title="Seats">
        <CheckboxGroup
          name="seats"
          options={seatOptions}
          selected={filters.seats}
          onChange={(v) => setFilters({ ...filters, seats: v })}
        />
      </FilterSection>

      {/* Transmission */}
      <FilterSection title="Transmission">
        <CheckboxGroup
          name="transmission"
          options={transmissionOptions}
          selected={filters.transmission}
          onChange={(v) =>
            setFilters({ ...filters, transmission: v })
          }
        />
      </FilterSection>

      {/* Fuel */}
      <FilterSection title="Fuel type">
        <CheckboxGroup
          name="fuel"
          options={fuelOptions}
          selected={filters.fuel}
          onChange={(v) => setFilters({ ...filters, fuel: v })}
        />
      </FilterSection>

      {/* Agency */}
      <FilterSection title="Agency">
        <SelectField
          value={filters.agency}
          options={agencyOptions}
          onChange={(e) =>
            setFilters({ ...filters, agency: e.target.value })
          }
        />
      </FilterSection>
    </form>
  );
}

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
  sectionId: PropTypes.string,
};

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

SelectField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SideFilter.propTypes = {
  filters: PropTypes.shape({
    carType: PropTypes.string.isRequired,
    seats: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    transmission: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    agency: PropTypes.string.isRequired,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};
