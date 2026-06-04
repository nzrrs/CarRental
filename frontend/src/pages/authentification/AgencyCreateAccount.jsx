import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  BadgeInfo,
  X,
} from "lucide-react";

export default function AgencyCreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [form, setForm] = useState({
    agencyName: "",
    businessEmail: "",
    phone: "",
    password: "",
    confirmPassword: "",
    taxId: "",
  });

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

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
          {/* Heading */}
          <h2 className="text-[28px] font-bold text-[#0F172A]">
            Register your rental agency
          </h2>
          <p className="mt-1.5 text-sm text-[#475569]">
            Join CarRental and list your fleet in minutes
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Agency Name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Agency Name
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Building2 className="h-4 w-4 text-[#94A3B8]" />
                </div>
                <input
                  type="text"
                  value={form.agencyName}
                  onChange={updateField("agencyName")}
                  placeholder="e.g., CityDrive Rentals"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-3.5 text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 transition-colors"
                />
              </div>
            </div>

            {/* Business Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Business Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Mail className="h-4 w-4 text-[#94A3B8]" />
                </div>
                <input
                  type="email"
                  value={form.businessEmail}
                  onChange={updateField("businessEmail")}
                  placeholder="contact@agency.com"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-3.5 text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Phone Number
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Phone className="h-4 w-4 text-[#94A3B8]" />
                </div>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={updateField("phone")}
                  placeholder="+1 555 000 0000"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-3.5 text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Lock className="h-4 w-4 text-[#94A3B8]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={updateField("password")}
                  placeholder="Create a strong password"
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

            {/* Confirm Password */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Confirm Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Lock className="h-4 w-4 text-[#94A3B8]" />
                </div>
                <input
                  type={showConfirm ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={updateField("confirmPassword")}
                  placeholder="Confirm password"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-10 text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#94A3B8] hover:text-[#64748B] transition-colors"
                  tabIndex={-1}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Tax ID */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#0F172A]">
                Tax ID / Registration Number
                <span className="ml-1 text-[#94A3B8] font-normal">
                  (Optional)
                </span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <svg
                    className="h-4 w-4 text-[#94A3B8]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18" />
                    <path d="M13 8l2 3 2-3" />
                    <path d="M13 12l2 3 2-3" />
                    <path d="M13 16l2 3 2-3" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={form.taxId}
                  onChange={updateField("taxId")}
                  placeholder="Optional but recommended"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-3.5 text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 transition-colors"
                />
              </div>
            </div>

            {/* Terms and "Why partner with us?" */}
            <div className="space-y-3">
              {/* Checkbox */}
              <div className="flex items-start gap-2">
                <button
                  type="button"
                  onClick={() => setAgreeTerms(!agreeTerms)}
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    agreeTerms
                      ? "border-[#1E3A8A] bg-[#1E3A8A]"
                      : "border-[#E2E8F0] bg-white hover:border-[#3B82F6]"
                  }`}
                  aria-checked={agreeTerms}
                  role="checkbox"
                >
                  {agreeTerms && (
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
                  onClick={() => setAgreeTerms(!agreeTerms)}
                  className="cursor-pointer text-sm text-[#475569] select-none leading-5"
                >
                  I confirm that I am an authorized representative of this
                  agency
                </label>
              </div>

              {/* Terms link with "Why partner?" tooltip */}
              <div className="flex items-start gap-2">
                <div className="w-4 shrink-0" />
                <div className="flex items-center gap-1.5 text-sm text-[#475569] leading-5">
                  <span>I agree to the</span>
                  <button
                    type="button"
                    className="font-medium text-[#3B82F6] hover:text-[#1E3A8A] transition-colors underline underline-offset-2"
                  >
                    Agency Terms & Commission Structure
                  </button>
                  <div className="relative inline-flex">
                    <button
                      type="button"
                      onClick={() => setShowTooltip(!showTooltip)}
                      className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors"
                      aria-label="Why partner with us?"
                    >
                      <BadgeInfo className="h-4 w-4" />
                    </button>

                    {/* Tooltip */}
                    {showTooltip && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-10">
                        <div className="rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 shadow-lg min-w-[200px]">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-[#0F172A]">
                              Why partner with us?
                            </span>
                            <button
                              type="button"
                              onClick={() => setShowTooltip(false)}
                              className="text-[#94A3B8] hover:text-[#475569] transition-colors"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                          <ul className="space-y-1.5">
                            <li className="flex items-center gap-1.5 text-xs text-[#475569]">
                              <span className="h-1 w-1 rounded-full bg-[#10B981]" />
                              Low commission fees
                            </li>
                            <li className="flex items-center gap-1.5 text-xs text-[#475569]">
                              <span className="h-1 w-1 rounded-full bg-[#10B981]" />
                              Dedicated support
                            </li>
                            <li className="flex items-center gap-1.5 text-xs text-[#475569]">
                              <span className="h-1 w-1 rounded-full bg-[#10B981]" />
                              Free fleet listing
                            </li>
                          </ul>
                        </div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                          <div className="border-4 border-transparent border-t-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Create Account button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#1E3A8A] py-3 text-sm font-semibold text-white transition-all hover:bg-[#1E3A8A]/90 active:scale-[0.98] shadow-sm"
            >
              Create agency account
            </button>
          </form>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-[#475569]">
            Already registered?{" "}
            <Link
              to="/agency/login"
              className="font-semibold text-[#3B82F6] hover:text-[#1E3A8A] transition-colors"
            >
              Sign in here
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
