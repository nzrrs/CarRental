import React from "react";
import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";

export default function SendMessage({ agency }) {
  const whatsappNumber = agency?.whatsapp || "212600000000";

  return (
    <div className="h-full rounded-[24px] bg-white p-5 shadow-sm sm:p-6">
      <div className="flex h-full flex-col justify-between gap-8">
        <div className="space-y-4">
          <h4 className="text-xl font-semibold tracking-[-0.02em] text-[#1F1F1F]">
            Have a question?
          </h4>
          <p className="max-w-sm text-sm leading-6 text-[#4F4F4F]">
            Send a message to the agency. They will reply as soon as possible.
          </p>
        </div>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb455]"
        >
          <FaWhatsapp className="text-base sm:text-lg" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

SendMessage.propTypes = {
  agency: PropTypes.shape({
    whatsapp: PropTypes.string,
  }),
};

SendMessage.defaultProps = {
  agency: null,
};
