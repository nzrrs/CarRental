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

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

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
          {/* Welcome */}
          <h2 className="text-2xl font-bold text-[#0F172A]">Welcome Back</h2>
          <p className="mt-1 text-sm text-[#1E293B]/70">
            Sign in to continue your journey
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

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label className="mb-1.5 block text-sm font-medium text-[#1E293B]">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="mb-1.5 text-xs font-medium text-[#2563EB] hover:text-[#2563EB]/80 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <Lock className="h-4 w-4 text-[#1E293B]/50" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-[#1E293B]/20 bg-white py-2.5 pl-10 pr-10 text-sm text-[#0F172A] placeholder:text-[#1E293B]/40 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/10 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#1E293B]/50 hover:text-[#1E293B]/80 transition-colors"
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

            {/* Remember me checkbox */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setRemember(!remember)}
                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                  remember
                    ? "border-[#2563EB] bg-[#2563EB]"
                    : "border-[#1E293B]/20 bg-white hover:border-[#2563EB]"
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
                className="cursor-pointer text-sm text-[#1E293B]/70 select-none"
              >
                Remember me
              </label>
            </div>

            {/* Sign In button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#2563EB] py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1d4ed8] active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#1E293B]/10" />
            <span className="text-xs font-medium text-[#1E293B]/50">OR</span>
            <div className="h-px flex-1 bg-[#1E293B]/10" />
          </div>

          {/* Google login */}
          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-lg border border-[#1E293B]/20 bg-white py-2.5 text-sm font-medium text-[#1E293B] transition-all hover:bg-[#F8FAFC] active:scale-[0.98]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-[#1E293B]/70">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
            >
              Create Account
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
