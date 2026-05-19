import propTypes from "prop-types";
export default function Info({icon, title, subtitle, className=""}) {
  return (
     <div className={className+" flex items-center gap-2"}>
            <img src={icon} alt={title} />
            <div className="text-left">
            <p className="text-xs text-gray-600">{title}</p>
            <p className="font-semibold text-sm">{subtitle}</p>
        </div>
    </div>
  )
}

Info.propTypes = {
  icon: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  className: propTypes.string
}
