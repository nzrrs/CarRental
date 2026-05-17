import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CarRentalLogo from "../../assets/images/car_logo.png";
import supportIcon from "../../assets/images/phone_blue_icon.png";
import Info from "../ui/ContactBlock.jsx";

const SOCIAL_LINKS = [
  { Icon: FaFacebook, url: "#", label: "Facebook" },
  { Icon: FaTwitter, url: "#", label: "Twitter" },
  { Icon: FaInstagram, url: "#", label: "Instagram" },
  { Icon: FaLinkedin, url: "#", label: "LinkedIn" },
];

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Vehicles", to: "/vehicles" },
  { label: "Agencies", to: "/agencies" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const CAR_TYPES = ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"];

const CONTACT_INFO = [
  { icon: "",title: "Address", subtitle: "Oxford Ave. Cary, NC 27511" },
  { icon: "",title: "Email", subtitle: "nwiger@yahoo.com" },
  { icon: "",title: "Phone", subtitle: "+537 547-6401" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container py-10">
        {/* TOP INFO BAR */}
        <div className="mb-10 flex flex-col gap-6 border-b border-gray-100 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <img src={CarRentalLogo} alt="Car Rental" className="h-8 w-auto" />
            <h1 className="text-lg font-bold">Car Rental</h1>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-auto lg:grid-cols-3 lg:gap-8">
            {CONTACT_INFO.map((contact) => (
              <Info
                key={contact.title}
                icon={contact.icon || supportIcon}
                title={contact.title}
                subtitle={contact.subtitle}
              />
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mb-10 grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-base font-bold">About Car Rental</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Reliable cars, fair pricing, and friendly service for every trip.
              We make renting fast and simple, whether you need a daily ride or
              a long weekend getaway.
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.url || "/"}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
              Useful links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
              Vehicle types
            </h3>
            <ul className="space-y-2">
              {CAR_TYPES.map((car) => (
                <li key={car} className="text-sm text-gray-600">
                  {car}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-900">
              Need help booking?
            </h3>
            <p className="mb-3 text-sm text-gray-600">
              Our support team is available every day from 8:00 AM to 10:00 PM.
            </p>
            <a
              href="tel:+5375476401"
              className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Call us now
            </a>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-sm text-gray-500 md:flex-row">
          <p>&copy; {currentYear} Car Rental. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <NavLink to="/about" className="transition-colors hover:text-blue-600">
              About
            </NavLink>
            <NavLink to="/contact" className="transition-colors hover:text-blue-600">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
