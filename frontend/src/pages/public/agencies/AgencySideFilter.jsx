import PropTypes from "prop-types";
import { useState } from "react";
import { villes, vehicles } from "../../../data/data";

const cityOptions = villes
  .map((ville) => ({ value: ville.nom.toLowerCase(), label: ville.nom }))
  .sort((a, b) => a.label.localeCompare(b.label));

const carTypeOptions = [...new Set(vehicles.map((v) => v.type))]
  .map((type) => ({ value: type.toLowerCase(), label: type }))
  .sort((a, b) => a.label.localeCompare(b.label));

const ratingOptions = [
  { value: "0", label: "All ratings" },
  { value: "4.5", label: "4.5 & up" },
  { value: "4", label: "4.0 & up" },
  { value: "3.5", label: "3.5 & up" },
];

function FilterSection({ title, children, defaultOpen = true, sectionId }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="p-4 border-b border-gray-200">
      <details className="group" open={isOpen} onToggle={(event) => setIsOpen(event.currentTarget.open)}>
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
            <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

function MultiCheckboxGroup({ name, options, selected, onToggle }) {
  return (
    <div className="flex flex-col gap-1.5">
      {options.map((option) => {
        const optionId = `${name}-${option.value}`;
        const isChecked = selected.includes(option.value);
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
              onChange={() => onToggle(option.value)}
              className="h-4 w-4 accent-blue-600"
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

export default function AgencySideFilter({ filters, setFilters }) {
  return (
    <form className="flex w-full shrink-0 flex-col rounded-[10px] border border-gray-200 bg-white shadow md:w-70 sticky top-24 self-start max-h-[calc(100vh-6rem)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 p-4">
        <p className="text-lg font-bold text-gray-900 sm:text-xl">Filters</p>
        <button
          type="reset"
          className="text-xs font-medium text-blue-600 hover:text-blue-500"
          onClick={() => setFilters({ city: "all", minRating: "0", carTypes: [], activeOnly: true })}
        >
          Clear all
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <FilterSection title="City">
          <CheckboxGroup
            name="city"
            options={[{ value: "all", label: "All" }, ...cityOptions]}
            selected={filters.city}
            onChange={(v) => setFilters({ ...filters, city: v })}
          />
        </FilterSection>

        <FilterSection title="Rating">
          <CheckboxGroup
            name="rating"
            options={ratingOptions}
            selected={filters.minRating}
            onChange={(v) => setFilters({ ...filters, minRating: v })}
          />
        </FilterSection>

        <FilterSection title="Cars offered">
          <MultiCheckboxGroup
            name="car-type"
            options={carTypeOptions}
            selected={filters.carTypes}
            onToggle={(v) =>
              setFilters({
                ...filters,
                carTypes: filters.carTypes.includes(v)
                  ? filters.carTypes.filter((t) => t !== v)
                  : [...filters.carTypes, v],
              })
            }
          />
        </FilterSection>

        <FilterSection title="Status">
          <label className="flex min-h-11 items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-gray-50 sm:text-base">
            <input
              type="checkbox"
              checked={filters.activeOnly}
              onChange={() => setFilters({ ...filters, activeOnly: !filters.activeOnly })}
              className="h-4 w-4 accent-blue-600"
            />
            <span>Active agencies only</span>
          </label>
        </FilterSection>
      </div>
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
    PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

MultiCheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggle: PropTypes.func.isRequired,
};

AgencySideFilter.propTypes = {
  filters: PropTypes.shape({
    city: PropTypes.string.isRequired,
    minRating: PropTypes.string.isRequired,
    carTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeOnly: PropTypes.bool.isRequired,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};