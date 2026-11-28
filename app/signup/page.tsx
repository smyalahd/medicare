
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState("");

  function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setMessage("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setMessage("Password must contain at least one lowercase letter.");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setMessage("Password must contain at least one number.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (!acceptedTerms) {
      setMessage("Please accept the Terms & Privacy Policy.");
      return;
    }

    setMessage("Demo registration successful! No account has been created.");
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-8 text-[#183d36]">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#174e43] text-lg font-bold text-white">
            M
          </span>
          <span className="text-2xl font-bold tracking-tight">
            MediCare<span className="text-[#df805c">.</span>
          </span>
        </Link>

        <Link
          href="/"
          className="text-sm font-medium text-[#788279] transition hover:text-[#174e43]"
        >
          ← Back to home
        </Link>
      </header>

      {/* Signup Card */}
      <section className="mx-auto mt-10 max-w-md sm:mt-16">
        <div className="rounded-[2rem] border border-[#e8e8df] bg-white p-7 shadow-sm sm:p-10">
          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7eee4] text-2xl text-[#31584d]">
              ✳
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight">
              Create your account
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#788279]">
              Join MediCare and take the next step in your healthcare journey.
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            {/* Full name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[#31584d]"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setMessage("");
                }}
                placeholder="Your full name"
                required
                className="w-full rounded-xl border border-[#dfe5dc] bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#174e43] focus:ring-2 focus:ring-[#174e43]/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#31584d]"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage("");
                }}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-[#dfe5dc] bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#174e43] focus:ring-2 focus:ring-[#174e43]/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#31584d]"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage("");
                  }}
                  placeholder="Create a password"
                  required
                  className="w-full rounded-xl border border-[#dfe5dc] bg-[#faf9f6] px-4 py-3.5 pr-20 text-sm outline-none transition focus:border-[#174e43] focus:ring-2 focus:ring-[#174e43]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#788279] transition hover:text-[#174e43]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <p className="mt-2 text-xs leading-5 text-[#9aa198]">
                Minimum 8 characters, including an uppercase letter, a lowercase
                letter, and a number.
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-[#31584d]"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setMessage("");
                }}
                placeholder="Repeat your password"
                required
                className="w-full rounded-xl border border-[#dfe5dc] bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#174e43] focus:ring-2 focus:ring-[#174e43]/10"
              />
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#788279]">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => {
                  setAcceptedTerms(e.target.checked);
                  setMessage("");
                }}
                className="mt-1 h-4 w-4 shrink-0 accent-[#174e43]"
              />

              <span>
                I agree to the{" "}
                <span className="font-semibold text-[#31584d]">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#31584d]">
                  Privacy Policy
                </span>
                .
              </span>
            </label>

            {/* Message */}
            {message && (
              <div
                className={`rounded-xl px-4 py-3 text-sm leading-6 ${
                  message.startsWith("Demo")
                    ? "bg-[#e7eee4] text-[#31584d]"
                    : "bg-[#f9e8e2] text-[#a14e36]"
                }`}
              >
                {message}
              </div>
            )}

            {/* Signup button */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#174e43] py-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#103d34] hover:shadow-md"
            >
              Create account ↗
            </button>
          </form>

          {/* Login link */}
          <p className="mt-7 text-center text-sm text-[#788279]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#d97855] transition hover:text-[#b65f40]"
            >
              Log in
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-[#9aa198]">
          This is a portfolio demonstration. No real account will be created.
        </p>
      </section>
    </main>
  );
}
