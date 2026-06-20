import PropTypes from "prop-types";

const STAR_PATH = "M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L10 1.5z";

export default function RatingStars({ rating = 0, size = "sm" }) {
  const starClass = size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5";

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          const fillRatio = Math.min(Math.max(rating - i, 0), 1);
          return (
            <div key={i} className={`relative ${starClass}`}>
              <svg viewBox="0 0 20 20" className={`${starClass} absolute inset-0 text-gray-200`} fill="currentColor">
                <path d={STAR_PATH} />
              </svg>
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillRatio * 100}%` }}>
                <svg viewBox="0 0 20 20" className={`${starClass} text-[#FF9E0C]`} fill="currentColor">
                  <path d={STAR_PATH} />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
      <span className="text-sm font-semibold text-gray-900">{rating.toFixed(1)}</span>
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number,
  size: PropTypes.oneOf(["sm", "lg"]),
};