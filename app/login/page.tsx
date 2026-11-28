
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage("Demo login successful! Authentication is not connected yet.");
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
            MediCare<span className="text-[#df805c]">.</span>
          </span>
        </Link>

        <Link
          href="/"
          className="text-sm font-medium text-[#788279] transition hover:text-[#174e43]"
        >
          ← Back to home
        </Link>
      </header>

      {/* Login Card */}
      <section className="mx-auto mt-12 max-w-md sm:mt-20">
        <div className="rounded-[2rem] border border-[#e8e8df] bg-white p-7 shadow-sm sm:p-10">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7eee4] text-2xl text-[#31584d]">
              ♡
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight">
              Welcome back
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#788279]">
              Log in to continue your healthcare journey.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
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
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-[#31584d]"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-[#d97855] transition hover:text-[#b65f40]"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage("");
                  }}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-[#dfe5dc] bg-[#faf9f6] px-4 py-3.5 pr-20 text-sm outline-none transition focus:border-[#174e43] focus:ring-2 focus:ring-[#174e43]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#788279] hover:text-[#174e43]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[#788279]">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 accent-[#174e43]"
              />
              Remember me
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

            {/* Login button */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#174e43] py-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#103d34] hover:shadow-md"
            >
              Log in →
            </button>
          </form>

          {/* Sign up */}
          <p className="mt-7 text-center text-sm text-[#788279]">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#d97855] transition hover:text-[#b65f40]"
            >
              Sign up
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-[#9aa198]">
          This is a portfolio demonstration. No real authentication is connected.
        </p>
      </section>
    </main>
  );
}
