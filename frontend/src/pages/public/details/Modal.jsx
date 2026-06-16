import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaTimes,
  FaStar,
  FaLock,
  FaUser,
  FaShieldAlt,
  
} from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

export default function Modal({ vehicle, onClose }) {
  const [step, setStep] = useState(1);
  const [otpMethod, setOtpMethod] = useState("email");
  const [timer, setTimer] = useState(28);

  const agency = vehicle?.agency;
  const rating = Math.round(Number(agency?.rating || 0));

  const goStep = (n) => {
    setStep(n);
    if (n === 3) startTimer();
  };

  const startTimer = () => {
    let t = 28;
    const iv = setInterval(() => {
      t--;
      setTimer(t);
      if (t <= 0) clearInterval(iv);
    }, 1000);
  };

  const handleClose = () => {
    setStep(1);
    setTimer(28);
    onClose();
  };

  return (
    <div className="bg-white rounded-2xl w-full max-w-md mx-4 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="border-b bg-white px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Back */}
          <div className="w-24">
            {step > 1 && step < 4 ? (
              <button
                onClick={() => goStep(step - 1)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black active:scale-95"
              >
                <FaArrowLeft className="text-xs" />
                Back
              </button>
            ) : (
              <div />
            )}
          </div>

          {/* Center */}
          <div className="flex flex-col items-center">
            <p className="text-sm font-semibold text-gray-800">
              Step {step} of 4
            </p>

            <div className="mt-2 flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === step
                      ? "w-8 bg-blue-600"
                      : i < step
                        ? "w-4 bg-blue-300"
                        : "w-4 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Close */}
          <div className="w-24 flex justify-end">
            <button
              onClick={handleClose}
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-red-50 hover:text-red-500 active:scale-95"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        {/* STEP 1 — agency info + choice */}
        {step === 1 && (
          <div>
            <div className="flex items-center gap-3 py-4 border-b mb-4">
              <img
                src={agency?.image}
                alt={agency?.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{agency?.name}</p>
                <div className="flex items-center gap-1 text-yellow-400 text-xs">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={i < rating ? "opacity-100" : "opacity-30"}
                    />
                  ))}
                  <span className="text-gray-500 ml-1">
                    {Number(agency?.rating).toFixed(1)}
                  </span>
                </div>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                  <FaMapMarkerAlt /> {agency?.adresse}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4 text-center">
              Send a message about{" "}
              <strong className="text-black">{vehicle?.title}</strong>
            </p>

            <button
              onClick={() => goStep(2)}
              className="w-full flex items-center gap-3 p-3 border rounded-xl mb-3 hover:bg-gray-50 text-left"
            >
              <FaUser className="text-gray-400 text-lg" />
              <div>
                <p className="text-sm font-medium">Continue as Guest</p>
                <p className="text-xs text-gray-400">
                  Verify with OTP and send message
                </p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-3 border rounded-xl hover:bg-gray-50 text-left">
              <FaLock className="text-gray-400 text-lg" />
              <NavLink to="/login">
                <p className="text-sm font-medium">Login to Your Account</p>
                <p className="text-xs text-gray-400">
                  Faster, details auto-filled
                </p>
              </NavLink>
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              Don't have an account?{" "}
              <NavLink to="/register" className="text-blue-600">
                Register
              </NavLink>
            </p>
          </div>
        )}

        {/* STEP 2 — guest form */}
        {step === 2 && (
          <div>
            <p className="font-medium mb-4">Contact Agency</p>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-500">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">Email Address</label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">Message</label>
                <textarea
                  rows={3}
                  placeholder={`Hello, I am interested in ${vehicle?.title}. Please contact me.`}
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-2">
                  Verify using
                </label>
                <div className="flex gap-4">
                  {["email", "phone"].map((m) => (
                    <label
                      key={m}
                      className="flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="otp"
                        checked={otpMethod === m}
                        onChange={() => setOtpMethod(m)}
                      />
                      {m === "email" ? "Email OTP" : "Phone OTP"}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={() => goStep(3)}
              className="w-full mt-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700"
            >
              Send OTP
            </button>
          </div>
        )}

        {/* STEP 3 — OTP verify */}
        {step === 3 && (
          <div>
            <div className="text-center mb-5 mt-2">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <FaEnvelope className="text-green-600 text-xl" />
              </div>
              <p className="font-medium">
                Verify Your {otpMethod === "email" ? "Email" : "Phone"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                We sent a 6-digit code to your {otpMethod}
              </p>
            </div>
            <div className="flex gap-2 justify-center mb-4">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 border rounded-lg text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onInput={(e) =>
                    e.target.value && e.target.nextSibling?.focus()
                  }
                  onKeyDown={(e) =>
                    e.key === "Backspace" &&
                    !e.target.value &&
                    e.target.previousSibling?.focus()
                  }
                />
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mb-4">
              Resend in{" "}
              <span className="text-blue-600">
                0:{timer < 10 ? `0${timer}` : timer}
              </span>
            </p>
            <button
              onClick={() => goStep(4)}
              className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700"
            >
              Verify & Continue
            </button>
            <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
              <FaShieldAlt /> Your information is safe and secure
            </p>
          </div>
        )}

        {/* STEP 4 — success */}
        {step === 4 && (
          <div className="text-center py-2">
           <div className="flex justify-center mb-5">
  <div className="relative">
    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
        <IoCheckmark className="text-white text-4xl" />
      </div>
    </div>
  </div>
</div>
            <p className="font-semibold text-lg mb-2">Message Sent!</p>
            <p className="text-sm text-gray-500 mb-5">
              {agency?.name} received your message and will contact you soon.
            </p>
            <button
              onClick={handleClose}
              className="w-full py-2.5 border rounded-xl text-sm mb-3 hover:bg-gray-50"
            >
              Close
            </button>
            <div className="border-t pt-3">
              <NavLink to="/register" className="text-xs text-gray-400 mb-2">
                Create an account to track your inquiries.
              </NavLink>
              <button className="w-full py-2.5 border border-green-500 text-green-600 rounded-xl text-sm font-medium hover:bg-green-50">
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
