
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setSubmitted(true);
    setMessage(
      "If an account exists for this email, a password reset link would be sent."
    );
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

      {/* Forgot Password Card */}
      <section className="mx-auto mt-12 max-w-md sm:mt-20">
        <div className="rounded-[2rem] border border-[#e8e8df] bg-white p-7 shadow-sm sm:p-10">
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7eee4] text-2xl text-[#31584d]">
              ↗
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight">
              Forgot your password?
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#788279]">
              No worries. Enter your email address below and we&apos;ll help you
              get back into your account.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
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

              {message && (
                <div className="rounded-xl bg-[#f9e8e2] px-4 py-3 text-sm text-[#a14e36]">
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-[#174e43] py-4 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#103d34] hover:shadow-md"
              >
                Send reset link →
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              <div className="rounded-2xl bg-[#e7eee4] p-5 text-center">
                <div className="text-2xl text-[#31584d]">✓</div>

                <p className="mt-2 text-sm font-semibold text-[#31584d]">
                  Request submitted
                </p>

                <p className="mt-3 text-sm leading-6 text-[#617568]">
                  {message}
                </p>

                <p className="mt-3 break-all text-sm font-medium text-[#31584d]">
                  {email}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setMessage("");
                }}
                className="w-full rounded-full border border-[#dce5da] bg-white py-3.5 text-sm font-semibold text-[#31584d] transition hover:bg-[#f0f1e9]"
              >
                Try another email
              </button>
            </div>
          )}

          <div className="mt-7 border-t border-[#e8e8df] pt-6 text-center">
            <Link
              href="/login"
              className="text-sm font-semibold text-[#d97855] transition hover:text-[#b65f40]"
            >
              ← Back to log in
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-[#9aa198]">
          Portfolio demo · Password recovery is not connected to a real service.
        </p>
      </section>
    </main>
  );
}
