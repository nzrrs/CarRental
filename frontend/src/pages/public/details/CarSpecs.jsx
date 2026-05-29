import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  FaBluetooth,
  FaCalendarAlt,
  FaCar,
  FaCheck,
  FaGasPump,
  FaIdCard,
  FaMapMarkerAlt,
  FaSnowflake,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";

const equipmentIconMap = {
  navigation: FaMapMarkerAlt,
  connectivity: FaBluetooth,
  comfort: FaSnowflake,
  safety: FaCheck,
};

export default function CarSpecs({ vehicle }) {
  const specs = useMemo(() => {
    if (!vehicle?.specs) {
      return [];
    }

    return [
      { label: "Brand", value: vehicle.specs.brand, icon: FaCar },
      { label: "Model", value: vehicle.specs.model, icon: FaCar },
      { label: "Year", value: vehicle.specs.year, icon: FaCalendarAlt },
      {
        label: "Mileage",
        value: `${vehicle.specs.mileage} km`,
        icon: FaTachometerAlt,
      },
      { label: "Seats", value: `${vehicle.specs.seats} seats`, icon: FaUsers },
      {
        label: "Plate number",
        value: vehicle.specs.plateNumber,
        icon: FaIdCard,
      },
    ];
  }, [vehicle]);

  const features = useMemo(() => {
    if (!vehicle) {
      return [];
    }

    const base = [
      {
        label: vehicle.features?.fuel
          ? `${vehicle.features.fuel} fuel`
          : "Fuel",
        icon: vehicle.features?.fuel ? BsFillFuelPumpFill : FaGasPump,
      },
      {
        label: vehicle.features?.transmission
          ? `${vehicle.features.transmission} transmission`
          : "Transmission",
        icon: TbManualGearbox,
      },
      {
        label: vehicle.features?.ac
          ? "Air conditioning"
          : "No air conditioning",
        icon: FaSnowflake,
      },
    ];

    const equipment = (vehicle.equipment || []).map((item) => {
      const Icon = equipmentIconMap[item.type] || FaCheck;
      return { label: item.name, icon: Icon };
    });

    return [...base, ...equipment];
  }, [vehicle]);

  if (!vehicle) {
    return null;
  }

  return (
    <div className="h-full rounded-[20px] bg-white p-5 shadow-sm sm:p-6">
      <h3 className="text-xl font-semibold text-[#1F1F1F]">About this car</h3>
      <p className="mt-3 text-sm text-[#4F4F4F]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </p>
      <div className="my-8 h-px w-full bg-[#e0e0e0]" />

      <div className="mt-8">
        <h4 className="text-lg font-semibold text-[#1F1F1F]">Specifications</h4>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {specs.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-[#EFEFEF] p-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-black">
                <item.icon />
              </span>
              <div>
                <p className="text-xs text-[#7D7D7D]">{item.label}</p>
                <p className="text-sm font-semibold text-[#1F1F1F]">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 h-px w-full bg-[#e0e0e0]" />

      <div className="mt-8">
        <h4 className="text-lg font-semibold text-[#1F1F1F]">
          Features & Equipment
        </h4>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center gap-3 rounded-xl border border-[#EFEFEF] p-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F5] text-black">
                <item.icon />
              </span>
              <p className="text-sm font-medium text-[#1F1F1F]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

CarSpecs.propTypes = {
  vehicle: PropTypes.shape({
    specs: PropTypes.shape({
      brand: PropTypes.string,
      model: PropTypes.string,
      year: PropTypes.number,
      mileage: PropTypes.number,
      seats: PropTypes.number,
      plateNumber: PropTypes.string,
    }),
    features: PropTypes.shape({
      fuel: PropTypes.string,
      transmission: PropTypes.string,
      ac: PropTypes.bool,
    }),
    equipment: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
      }),
    ),
  }),
};

CarSpecs.defaultProps = {
  vehicle: null,
};
