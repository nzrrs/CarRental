import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  BadgePercent,
  Headphones,
} from "lucide-react";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static — no backend logic
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-[440px]">
        {/* Brand header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#0F172A]">
            CarRental
          </h1>
          <p className="mt-1 text-sm font-semibold tracking-[0.2em] text-[#2563EB]">
            DRIVE MORE, WORRY LESS
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-white px-8 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-[#0F172A]">Forgot Password?</h2>
          <p className="mt-1 text-sm text-[#1E293B]/70">
            No worries! Enter your email address and we'll send you a link to
            reset your password.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1E293B]">
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Mail className="h-4 w-4 text-[#1E293B]/50" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-[#1E293B]/20 bg-white py-2.5 pl-10 pr-3.5 text-sm text-[#0F172A] placeholder:text-[#1E293B]/40 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/10 transition-colors"
                />
              </div>
            </div>

            

            {/* Submit button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#2563EB] py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1d4ed8] active:scale-[0.98]"
            >
              Send Reset Link
            </button>
          </form>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-[#1E293B]/70">
            Remember your password?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Trust section */}
        <TrustSection />
      </div>
    </div>
  );
}

function TrustSection() {
  return (
    <div className="mt-8 rounded-2xl bg-white px-6 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="h-4 w-4 text-[#2563EB]" />
        <h3 className="text-sm font-semibold text-[#0F172A]">
          Secure Booking
        </h3>
        <span className="text-xs text-[#1E293B]/50">|</span>
        <span className="text-xs text-[#1E293B]/60">
          Your data is safe with us
        </span>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <div className="flex items-center gap-1.5">
          <BadgePercent className="h-3.5 w-3.5 text-[#2563EB]" />
          <span className="text-xs text-[#1E293B]/70">
            No Hidden Fees - Transparent pricing always
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Headphones className="h-3.5 w-3.5 text-[#2563EB]" />
          <span className="text-xs text-[#1E293B]/70">
            24/7 Customer Support - We're here to help
          </span>
        </div>
      </div>
    </div>
  );
}
