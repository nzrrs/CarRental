import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

export default function AgencySignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static — no backend logic
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F1F5F9] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-[520px]">
        {/* Brand header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#0F172A]">
            CarRental
          </h1>
          <p className="mt-1.5 text-xs font-semibold tracking-[0.25em] text-[#1E3A8A] uppercase">
            Agency Portal
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white px-8 py-10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
          {/* Welcome */}
          <h2 className="text-[28px] font-bold text-[#0F172A]">
            Welcome back, agency
          </h2>
          <p className="mt-1.5 text-sm text-[#475569]">
            Sign in to manage your fleet, bookings, and earnings
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Agency Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Agency Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Mail className="h-4 w-4 text-[#94A3B8]" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="agency@yourcompany.com"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-3.5 text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                  Password
                </label>
                <Link
                  to="/agency/forgot-password"
                  className="mb-1.5 text-xs font-medium text-[#3B82F6] hover:text-[#1E3A8A] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Lock className="h-4 w-4 text-[#94A3B8]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-10 text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#94A3B8] hover:text-[#64748B] transition-colors"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Keep me signed in checkbox */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setRemember(!remember)}
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                  remember
                    ? "border-[#1E3A8A] bg-[#1E3A8A]"
                    : "border-[#E2E8F0] bg-white hover:border-[#3B82F6]"
                }`}
                aria-checked={remember}
                role="checkbox"
              >
                {remember && (
                  <svg
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
              <label
                onClick={() => setRemember(!remember)}
                className="cursor-pointer text-sm text-[#475569] select-none"
              >
                Keep me signed in
              </label>
            </div>

            {/* Sign In button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#1E3A8A] py-3 text-sm font-semibold text-white transition-all hover:bg-[#1E3A8A]/90 active:scale-[0.98] shadow-sm"
            >
              Sign in to agency dashboard
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-3">
            <p className="text-xs text-[#64748B]">
              <span className="font-medium text-[#475569]">Demo:</span>{" "}
              agency@carrental.com / demo123
              <span className="ml-1 text-[#94A3B8]">
                (for testing only)
              </span>
            </p>
          </div>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-[#475569]">
            Don't have an agency account?{" "}
            <Link
              to="/agency/register"
              className="font-semibold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors"
            >
              Create one here
            </Link>
          </p>
        </div>

        {/* Trust badge */}
        <AgencyTrustBadge />
      </div>
    </div>
  );
}

function AgencyTrustBadge() {
  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
      <span className="text-xs text-[#64748B]">
        Agency data is encrypted & commission payouts are protected
      </span>
    </div>
  );
}
