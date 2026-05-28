import PropTypes from "prop-types";

export default function Select({ id, value, onChange, options, label }) {
  return (
    <div className="relative">
      {label && (
        <label htmlFor={id} className="font-subtitle mr-2">
          {label}
        </label>
      )}

      <select
        id={id}
        value={value}
        onChange={onChange}
        className="appearance-none rounded-md border border-gray-200 bg-white px-3 py-2.5 pr-9 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-black/80 sm:text-base"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <svg
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
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

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
};
