import PropTypes from "prop-types";

export default function StatCard({ title, value, subtitle, icon, bg, text }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className={`text-xs mt-1 ${text}`}>{subtitle}</p>
      </div>
      <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  );
}

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  bg: PropTypes.string,
  text: PropTypes.string,
};
