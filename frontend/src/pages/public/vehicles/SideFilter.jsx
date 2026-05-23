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
  { value: "fastcar", label: "FastCar Rentals" },
  { value: "speedy", label: "Speedy Drive" },
  { value: "urban", label: "Urban Wheels" },
  { value: "elite", label: "Elite Motors" },
  { value: "prime", label: "Prime Rentals" },
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

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
  sectionId: PropTypes.string,
};

function CheckboxGroup({ name, options }) {
  const allValue = options[0]?.value ?? "all";
  const [selected, setSelected] = useState(() => new Set([allValue]));

  const handleToggle = (value) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (value === allValue) {
        if (next.has(allValue)) {
          next.delete(allValue);
          return next;
        }

        CheckboxGroup.propTypes = {
          name: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(
            PropTypes.shape({
              value: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
            })
          ).isRequired,
        };
        return new Set([allValue]);
      }
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      next.delete(allValue);
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-1.5">
      {options.map((option) => {
        const optionId = `${name}-${option.value}`;
        const isChecked = selected.has(option.value);

        return (
          <label
            key={option.value}
            htmlFor={optionId}
            className="flex min-h-11 items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-gray-50 sm:text-base"
          >
            <input
              id={optionId}
              name={name}
              type="checkbox"
              checked={isChecked}
              onChange={() => handleToggle(option.value)}
              className="h-4 w-4 accent-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/80"
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

function SelectField({ id, options, labelledBy }) {
  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        aria-labelledby={labelledBy}
        defaultValue=""
        className="w-full min-h-11 appearance-none rounded-md border border-gray-200 bg-white px-3 py-2.5 pr-9 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/80 sm:text-base"
      >
        <option value="" disabled>
          Select agency
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
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

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  labelledBy: PropTypes.string,
};

export default function SideFilter() {
  return (
    <form className="w-full shrink-0 rounded-[10px] border border-gray-200 bg-white shadow md:w-70">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 p-4">
        <p className="text-lg font-bold text-gray-900 sm:text-xl">Filters</p>
        <button
          type="reset"
          className="text-xs font-medium text-blue-600 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/80 sm:text-sm"
        >
          Clear all
        </button>
      </div>
      <FilterSection title="Car type" sectionId="car-type-filter">
        <CheckboxGroup name="car-type" options={carTypeOptions} />
      </FilterSection>
      <FilterSection title="Seats" sectionId="seats-filter">
        <CheckboxGroup name="seats" options={seatOptions} />
      </FilterSection>
      <FilterSection title="Transmission" sectionId="transmission-filter">
        <CheckboxGroup name="transmission" options={transmissionOptions} />
      </FilterSection>
      <FilterSection title="Fuel type" sectionId="fuel-type-filter">
        <CheckboxGroup name="fuel" options={fuelOptions} />
      </FilterSection>
      <FilterSection title="Agency" sectionId="agency-filter">
        <SelectField id="agency-select" options={agencyOptions} labelledBy="agency-filter" />
      </FilterSection>
    </form>
  );
}
