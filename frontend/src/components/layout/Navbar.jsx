import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import CarRentalLogo from "../../assets/images/car_logo.png";
import SupportIcon from "../../assets/images/phone_blue_icon.png";
import Info from "../ui/ContactBlock.jsx";

const NAV_LINKS = [
  { label: "Home", to: "/public" },
  { label: "Vehicles", to: "/public/vehicles" },
  { label: "Agencies", to: "/public/agencies" },
  { label: "About", to: "/public/about" },
  { label: "Contact", to: "/public/contact" },
];

const NavLinkItem = ({
  to,
  children,
  onClick,
  className = "",
  end = false,
}) => (
  <NavLink
    to={to}
    end={end}
    onClick={onClick}
    className={({ isActive }) =>
      `text-sm transition-all duration-300 ease-in-out ${
        isActive
          ? "font-semibold text-blue-600"
          : "font-medium text-gray-700 hover:text-blue-600"
      } ${className}`
    }
  >
    {children}
  </NavLink>
);

NavLinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  end: PropTypes.bool,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/90">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link to="/public">
            <div className="flex shrink-0 items-center gap-2">
              <img
                src={CarRentalLogo}
                alt="Car Rental"
                className="h-8 w-auto"
              />
              <h1 className="hidden text-lg font-bold sm:block">Car Rental</h1>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLinkItem key={to} to={to} end={to === "/public"}>
                {label}
              </NavLinkItem>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <Info
              icon={SupportIcon}
              title="Need help?"
              subtitle="+537 547-6401"
              className="border-r border-gray-200 pr-4"
            />
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-1">
              <NavLink
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-white hover:text-blue-600"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Register
              </NavLink>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 rounded-lg border border-gray-200 bg-gray-50 p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-gray-900 transition-all ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-gray-900 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-gray-900 transition-all ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="mx-auto w-full max-w-7xl space-y-4 px-4 py-4 md:px-8 lg:px-12">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, to }) => (
                <NavLinkItem
                  key={to}
                  to={to}
                  end={to === "/public"}
                  onClick={closeMenu}
                  className="rounded-md px-3 py-2 hover:bg-gray-50 hover:px-6"
                >
                  {label}
                </NavLinkItem>
              ))}
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <Info
                icon={SupportIcon}
                title="Need help?"
                subtitle="+537 547-6401"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="rounded-lg border border-blue-600 px-4 py-2 text-center text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={closeMenu}
                className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
