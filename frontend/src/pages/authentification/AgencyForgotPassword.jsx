import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

export default function AgencyForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
            Reset your agency password
          </h2>
          <p className="mt-1.5 text-sm text-[#475569]">
            We'll send a password reset link to your agency email
          </p>

          {/* Success state */}
          {submitted ? (
            <div className="mt-8 space-y-5">
              <div className="rounded-lg border border-[#10B981]/20 bg-[#F0FDF4] px-5 py-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#10B981]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-[#065F46]">
                      Reset link sent
                    </p>
                    <p className="mt-1 text-xs text-[#047857]">
                      We've sent a password reset link to{" "}
                      <span className="font-medium">{email}</span>. If an
                      account exists, you'll receive an email within 5
                      minutes.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/agency/login"
                className="flex items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white py-3 text-sm font-medium text-[#0F172A] transition-all hover:bg-[#F8FAFC] active:scale-[0.98]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
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

                {/* Send Reset Link button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#1E3A8A] py-3 text-sm font-semibold text-white transition-all hover:bg-[#1E3A8A]/90 active:scale-[0.98] shadow-sm"
                >
                  Send reset link
                </button>
              </form>

              {/* Helper text */}
              <p className="mt-4 text-center text-xs text-[#94A3B8]">
                If an account exists, you'll receive an email within 5
                minutes
              </p>

              {/* Footer link */}
              <p className="mt-6 text-center text-sm text-[#475569]">
                <Link
                  to="/agency/login"
                  className="font-medium text-[#3B82F6] hover:text-[#1E3A8A] transition-colors"
                >
                  &larr; Back to sign in
                </Link>
              </p>
            </>
          )}
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
