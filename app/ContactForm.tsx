
"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setSubmitted(false);
  }

  const inputClasses =
    "w-full rounded-xl border border-[#dce9e4] bg-[#f8fbfa] px-4 py-3.5 text-[#153b3b] placeholder:text-[#9aaca6] outline-none transition-all duration-200 hover:border-[#b7d0c5] focus:border-[#087f73] focus:ring-4 focus:ring-[#087f73]/10";

  const labelClasses =
    "mb-2 block text-sm font-semibold text-[#315b56]";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-3xl border border-[#e9f0ec] bg-white p-6 text-left shadow-[0_12px_40px_rgba(21,59,59,0.06)] sm:p-8"
    >
      {submitted ? (
        <div className="py-10 text-center animate-[fadeIn_0.4s_ease-out]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f4ef] text-3xl font-bold text-[#087f73]">
            ✓
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#153b3b]">
            Message received!
          </h3>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#59665e]">
            Thank you for contacting MediCare. We appreciate your message.
            This is a demo confirmation.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="mt-7 rounded-full bg-[#087f73] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#06695f] hover:shadow-lg hover:shadow-[#087f73]/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087f73]/20"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={labelClasses}>
                Full Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your full name"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClasses}>
                Email Address
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="contact-subject" className={labelClasses}>
              Subject
            </label>

            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              placeholder="How can we help you?"
              className={inputClasses}
            />
          </div>

          <div className="mt-6">
            <label htmlFor="contact-message" className={labelClasses}>
              Message
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="Write your message here..."
              className={`${inputClasses} min-h-[140px] resize-y`}
            />
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#087f73] px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#06695f] hover:shadow-lg hover:shadow-[#087f73]/20 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#087f73]/20 sm:w-auto"
          >
            Send Message
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>

          <p className="mt-4 text-xs leading-5 text-[#59665e]">
            Demo form: messages are not transmitted or stored.
          </p>
        </>
      )}
    </form>
  );
}
