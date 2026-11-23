
"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl bg-white p-6 text-left shadow-lg sm:p-8"
    >
      {submitted ? (
        <div className="py-8 text-center">
          <div className="text-4xl text-[#087f73]">✓</div>

          <h3 className="mt-4 text-2xl font-bold text-[#153b3b]">
            Message received!
          </h3>

          <p className="mt-3 text-[#82938e]">
            Thank you for contacting MediCare.
            This is a demo confirmation.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-full bg-[#087f73] px-6 py-3 font-semibold text-white"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[#315b56]"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="w-full rounded-xl border border-[#dce9e4] bg-[#f8fbfa] px-4 py-3 text-[#153b3b]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#315b56]"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#dce9e4] bg-[#f8fbfa] px-4 py-3 text-[#153b3b]"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-semibold text-[#315b56]"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="How can we help you?"
              className="w-full rounded-xl border border-[#dce9e4] bg-[#f8fbfa] px-4 py-3 text-[#153b3b]"
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-[#315b56]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message here..."
              className="w-full resize-y rounded-xl border border-[#dce9e4] bg-[#f8fbfa] px-4 py-3 text-[#153b3b]"
            />
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-[#087f73] px-8 py-4 font-bold text-white sm:w-auto"
          >
            Send Message →
          </button>

          <p className="mt-4 text-xs leading-5 text-[#82938e]">
            Demo form: messages are not transmitted or stored.
          </p>
        </>
      )}
    </form>
  );
}
